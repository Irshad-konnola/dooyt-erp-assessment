import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyApiKey, unauthorizedResponse } from '@/lib/auth';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { status } = body;

    // Validate incoming status value
    const validStatuses = ['new', 'contacted', 'closed'];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be new, contacted, or closed.' },
        { status: 422 }
      );
    }

    // Check if record exists
    const existing = await prisma.demoRequest.findUnique({
      where: { id: params.id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Demo request not found' }, { status: 404 });
    }

    const updatedRequest = await prisma.demoRequest.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json({ data: updatedRequest }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update request status' }, { status: 500 });
  }
}