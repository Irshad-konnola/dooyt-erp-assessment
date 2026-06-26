import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  // Read the seed data from the root directory
  const seedFilePath = path.join(process.cwd(), 'seed.json');
  const seedData = JSON.parse(fs.readFileSync(seedFilePath, 'utf-8'));

  console.log('Seeding Modules...');
  for (const mod of seedData.modules) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: mod,
    });
  }

  console.log('Seeding Industries...');
  for (const ind of seedData.industries) {
    await prisma.industry.upsert({
      where: { id: ind.id },
      update: {},
      create: ind,
    });
  }

  console.log('Seeding Plans...');
  for (const plan of seedData.plans) {
    await prisma.plan.upsert({
      where: { id: plan.id },
      update: {},
      create: {
        ...plan,
        features: JSON.stringify(plan.features), // Handling SQLite array limitation
      },
    });
  }

  console.log('Seeding Testimonials...');
  for (const test of seedData.testimonials) {
    await prisma.testimonial.upsert({
      where: { id: test.id },
      update: {},
      create: test,
    });
  }

  console.log('Seeding FAQs...');
  for (const faq of seedData.faqs) {
    await prisma.faq.upsert({
      where: { id: faq.id },
      update: {},
      create: faq,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });