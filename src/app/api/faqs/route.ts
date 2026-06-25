import { NextResponse } from 'next/server';
    import { prisma } from '@/lib/db';
    export async function GET() {
      const data = await prisma.faq.findMany({ orderBy: { order: 'asc' } });
      return NextResponse.json({ data });
    }