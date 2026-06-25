import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const whereClause: any = {};

    if (category) {
      whereClause.category = category;
    }

    if (search) {
      whereClause.OR = [
        { name: { contains: search } },
        { description: { contains: search } }
      ];
    }

    const modules = await prisma.module.findMany({
      where: whereClause,
    });

    return NextResponse.json({ data: modules });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 });
  }
}