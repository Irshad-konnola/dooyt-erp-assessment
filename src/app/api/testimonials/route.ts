import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.max(1, parseInt(searchParams.get('limit') || '10'));
    const skip = (page - 1) * limit;

    const [testimonials, total] = await Promise.all([
      prisma.testimonial.findMany({
        skip,
        take: limit,
      }),
      prisma.testimonial.count(),
    ]);

    return NextResponse.json({
      data: testimonials,
      page,
      limit,
      total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}