import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyApiKey, unauthorizedResponse } from '@/lib/auth';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Updated type
) {
  const { id } = await params; 
  
  if (!verifyApiKey(request)) return unauthorizedResponse();

  try {
    const body = await request.json();
    const { status } = body;

    const updatedRequest = await prisma.demoRequest.update({
      where: { id: id },
      data: { status },
    });

    return NextResponse.json({ data: updatedRequest }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update request status' }, { status: 422 });
  }
}