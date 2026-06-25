import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const billing = searchParams.get('billing') || 'monthly';

    const dbPlans = await prisma.plan.findMany();

    const formattedPlans = dbPlans.map((plan: { features: string; monthlyPrice: number; }) => {
      const parsedFeatures = JSON.parse(plan.features);
      let price = plan.monthlyPrice;

      // Server-side calculation for annual discount
      if (billing === 'annual') {
        const annualTotalBeforeDiscount = plan.monthlyPrice * 12;
        const discountedTotal = annualTotalBeforeDiscount * 0.85;
        price = Math.round(discountedTotal / 12); // Average monthly cost under annual structure
      }

      return {
        ...plan,
        features: parsedFeatures,
        computedPrice: price,
      };
    });

    return NextResponse.json({ data: formattedPlans });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
  }
}