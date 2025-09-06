let prisma;
try {
  // Intentar cargar Prisma real si está instalado
  const { PrismaClient } = require("@prisma/client");
  const prismaClientSingleton = () => new PrismaClient();
  const globalForPrisma = globalThis || global;
  prisma = globalForPrisma.prismaGlobal || prismaClientSingleton();
  if (process.env.NODE_ENV !== "production") globalForPrisma.prismaGlobal = prisma;
} catch (e) {
  // Fallback: stub mínimo para compilar/ejecutar sin DB
  const mem = new Map();
  const table = {
    async findUnique({ where: { email } }) {
      return mem.get(email) || null;
    },
    async create({ data }) {
      mem.set(data.email, { id: mem.size + 1, ...data });
      return mem.get(data.email);
    },
  };
  prisma = { usuarios: table };
}

module.exports = prisma;
