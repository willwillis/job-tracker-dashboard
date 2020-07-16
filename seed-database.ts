import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  charactersLength = 0;
  return result;
}

// A `main` function so that you can use async/await
async function main() {
  // const user = await prisma.user.findMany(
  //     {include: {group: true}}
  // );
  // console.log(user)

  const range: number[] = [1, 1, 1, 1, 19, 10, 11, 12, 22, 30];

  for (const i of range) {
    await prisma.job.create({
      data: {
        name: makeid(i) + makeid(3) + ' job',
        jobType: 'AUTOSYS',
      },
    });

    //   const dashboard = await prisma.dashboard.create({
    //     data: {
    //       name: makeid(7) + ' Dashboard',
    //       sections: {
    //         create: { name: 'Section ' + makeid(4) },
    //       },
    //     },
    //   });

    const dashboardCount = await prisma.dashboard.count();
    console.log('Dashboard Count:' + dashboardCount);
  }

  const jobCount = await prisma.job.count();

  const sectionIds: number[] = [1, 2, 3, 4, 5, 6];

  for (const i of sectionIds) {
    console.log(i);
    await prisma.step.create({
      data: {
        section: {
          connect: {
            id: 2,
          },
        },
        name: 'Step ' + makeid(3) + makeid(4),
        job: {
          connect: {
            id: Math.floor(Math.random() * jobCount),
          },
        },
      },
    });
  }
  // console.log(dashboard);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
