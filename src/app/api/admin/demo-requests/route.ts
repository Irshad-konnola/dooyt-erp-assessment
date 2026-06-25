import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyApiKey, unauthorizedResponse } from '@/lib/auth';

export async function GET(request: Request) {
  // Check auth header
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || '';
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.max(1, parseInt(searchParams.get('limit') || '10'));
    const skip = (page - 1) * limit;

    const whereClause: any = {};
    if (status) {
      whereClause.status = status;
    }

    const [requests, total] = await Promise.all([
      prisma.demoRequest.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.demoRequest.count({ where: whereClause }),
    ]);

    return NextResponse.json({
      data: requests,
      page,
      limit,
      total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch admin demo requests' }, { status: 500 });
  }
}