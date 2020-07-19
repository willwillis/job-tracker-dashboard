import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.executeRaw('DROP SCHEMA public CASCADE;');
}

main();
