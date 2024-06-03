const { PrismaClient } = require('@prisma/client');
const { avslutade_kurser } = require('../app/lib/placeholder-data.js');

const prisma = new PrismaClient();

async function seedKurser() {
  try {
    const insertedKurser = await Promise.all(
      avslutade_kurser.map(async (kurser) => {
        const dateISO = new Date(kurser.datum).toISOString();
        const kurserWithISODate = { ...kurser, datum: dateISO };
        return prisma.avslutade_kurser.createMany({
          data: kurserWithISODate
        });
      })
    );

    console.log(`Seeded ${insertedKurser.length} kurser`);
  } catch (error) {
    console.error('Error seeding kurser:', error);
    throw error;
  }
}

async function main() {
  try {
    await seedKurser();
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error('An error occurred while attempting to seed the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
