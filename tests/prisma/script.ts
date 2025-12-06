import { prisma } from '../../lib/prisma';

async function script(){
  const users = await prisma.user.create({
    data: {
      username: 'test01',
      email: 'test01@gmail.com',
      password_hash: 'password01'
    }
  })
  console.log('[create user data]: ', users)

  const allUsers = await prisma.user.findMany()
  console.log('[All users]: ', JSON.stringify(allUsers, null, 2))
}

script()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
