import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyApiKey, unauthorizedResponse } from '@/lib/auth';

// Helper to map the dynamic URL entity segment to the correct Prisma model
function getPrismaDelegate(entity: string) {
  switch (entity) {
    case 'modules': return prisma.module;
    case 'plans': return prisma.plan;
    case 'testimonials': return prisma.testimonial;
    case 'faqs': return prisma.faq;
    default: return null;
  }
}

export async function POST(
  request: Request,
  { params }: { params: { entity: string; id: string } }
) {
  // 1. Check API Key
  if (!verifyApiKey(request)) return unauthorizedResponse();

  // 2. Validate URL Entity
  const delegate = getPrismaDelegate(params.entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    const body = await request.json();
    
    // 3. Create Record (passing the ID from the URL)
    const created = await (delegate as any).create({
      data: { id: params.id, ...body }
    });
    
    // Return 201 Created
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to create record. Validation failed or ID already exists.' }, 
      { status: 422 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { entity: string; id: string } }
) {
  if (!verifyApiKey(request)) return unauthorizedResponse();
  
  const delegate = getPrismaDelegate(params.entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    const body = await request.json();
    
    const updated = await (delegate as any).update({
      where: { id: params.id },
      data: body,
    });
    
    return NextResponse.json({ data: updated }, { status: 200 });
  } catch (error: any) {
    // Prisma error P2025 specifically means the record to update was not found
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { entity: string; id: string } }
) {
  if (!verifyApiKey(request)) return unauthorizedResponse();
  
  const delegate = getPrismaDelegate(params.entity);
  if (!delegate) return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });

  try {
    await (delegate as any).delete({
      where: { id: params.id }
    });
    
    return NextResponse.json({ success: true, message: 'Deleted successfully' }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}