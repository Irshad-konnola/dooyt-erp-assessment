import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyApiKey, unauthorizedResponse } from '@/lib/auth';

function getPrismaDelegate(entity: string) {
  switch (entity) {
    case 'modules': return prisma.module;
    case 'plans': return prisma.plan;
    case 'testimonials': return prisma.testimonial;
    case 'faqs': return prisma.faq;
    default: return null;
  }
}

// Updated handler to await params
export async function POST(
  request: Request,
  { params }: { params: Promise<{ entity: string; id: string }> }
) {
  const { entity, id } = await params;
  
  if (!verifyApiKey(request)) return unauthorizedResponse();

  const delegate = getPrismaDelegate(entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    const body = await request.json();
    const created = await (delegate as any).create({
      data: { id: id, ...body }
    });
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create record.' }, { status: 422 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ entity: string; id: string }> }
) {
  const { entity, id } = await params; 
  
  if (!verifyApiKey(request)) return unauthorizedResponse();
  
  const delegate = getPrismaDelegate(entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    const body = await request.json();
    const updated = await (delegate as any).update({
      where: { id: id },
      data: body,
    });
    return NextResponse.json({ data: updated }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2025') return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ entity: string; id: string }> }
) {
  const { entity, id } = await params; 
  
  if (!verifyApiKey(request)) return unauthorizedResponse();
  
  const delegate = getPrismaDelegate(entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    await (delegate as any).delete({ where: { id: id } });
    return NextResponse.json({ success: true, message: 'Deleted successfully' }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2025') return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}