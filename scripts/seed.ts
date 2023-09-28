const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "JavaScript"},
        { name: "TypeScript"},
        { name: "React.js"},
        { name: "NodeJS"},
        { name: "Prisma"},
        { name: "Next.js"},
        { name: "PostgreSQL"},
        { name: "Tailwind"},
      ],
    });
    console.log("Success")
  } catch (err) {
    console.log("Error seeding database categories")
  } finally {
    await database.$disconnect();
  }
}

main();
