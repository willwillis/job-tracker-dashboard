import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.executeRaw('DROP SCHEMA public CASCADE;');
  //await prisma.executeRaw('CREATE SCHEMA public;');
  await prisma.executeRaw('GRANT ALL ON SCHEMA public TO postgres;');
  await prisma.executeRaw('GRANT ALL ON SCHEMA public TO public;');
  await prisma.executeRaw("COMMENT ON SCHEMA public IS 'standard public schema';");
}

main();
