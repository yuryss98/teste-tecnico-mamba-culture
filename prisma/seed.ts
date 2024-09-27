import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  await prisma.categories.createMany({
    data: [
      {
        name: 'Marketing',
      },
      {
        name: 'Conscientização',
      },
      {
        name: 'Vendas',
      },
    ]
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })