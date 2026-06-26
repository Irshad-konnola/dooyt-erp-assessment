import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

// Define the exact payload shape and validation rules
const demoRequestSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  planId: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate incoming data structure
    const parsed = demoRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.format() },
        { status: 422 }
      );
    }

    const { fullName, email, planId } = parsed.data;

    // 2. Validate plan existence (if planId is provided)
    if (planId) {
      const planExists = await prisma.plan.findUnique({
        where: { id: planId },
      });
      
      if (!planExists) {
        return NextResponse.json(
          { error: 'Unknown plan' },
          { status: 422 }
        );
      }
    }

    // 3. Create the lead in the database
    const demoRequest = await prisma.demoRequest.create({
      data: {
        fullName,
        email,
        planId,
        status: 'new', // Defaults to 'new' as per our schema
      },
    });

    // 4. Return exact 201 Created status as requested
    return NextResponse.json({ data: demoRequest }, { status: 201 });
    
  } catch (error) {
    console.error("Error creating demo request:", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}