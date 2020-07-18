import { PrismaClient, JobRunCreateArgs } from '@prisma/client';

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

// async function createUser(name: string, email: string, password: string) {
//   return await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//       password: password,
//     },
//   });
// }

const dashboards = [1, 2, 3, 4, 5, 6, 7, 8];

// A `main` function so that you can use async/await
async function main() {
  //createUser('will', 'will@will.com', '$2a$10$a60i6HKPyqSY9.prEz9Uju/1x6EZ0zkHTLikMWD9JVnYf6zgra69y');

  const user = await prisma.user.findMany({ include: { group: true } });
  console.log(user);

  const allJobs = await prisma.job.findMany();
  console.log(allJobs);

  for (const num of dashboards) {
    console.log('Creating Dashboard' + num);

    await prisma.dashboard.create({
      data: {
        name: makeid(7) + ' Dashboard',
        sections: {
          create: [
            {
              name: 'Section A' + makeid(4),
              order: 0,
              steps: {
                create: {
                  name: makeid(9) + 'Step',
                  job: {
                    create: {
                      name: makeid(9) + ' Job',
                    },
                  },
                },
              },
            },
            {
              name: 'Section B' + makeid(5),
              order: 1,
              steps: {
                create: {
                  name: makeid(9) + 'Step',
                  job: {
                    create: {
                      name: makeid(9) + ' Job',
                    },
                  },
                },
              },
            },
            {
              name: 'Section C' + makeid(6),
              order: 2,
              steps: {
                create: {
                  name: makeid(9) + 'Step',
                  job: {
                    create: {
                      name: makeid(9) + ' Job',
                    },
                  },
                },
              },
            },
            {
              name: 'Section D' + makeid(7),
              order: 3,
              steps: {
                create: {
                  name: makeid(9) + 'Step',
                  job: {
                    create: {
                      name: makeid(9) + ' Job',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    });
  }

  for (const job of allJobs) {
    const startDate: Date = new Date();

    const endDate: Date = new Date(startDate.getTime() + Math.floor(Math.random() * 300) * 60000);

    const runningJob: JobRunCreateArgs = {
      data: {
        startTime: startDate,
        status: 'RUNNING',
        job: {
          connect: {
            id: job.id,
          },
        },
      },
    };
    const failedJob: JobRunCreateArgs = {
      data: {
        startTime: startDate,
        status: 'TERMINATED',
        endTime: endDate,
        job: {
          connect: {
            id: job.id,
          },
        },
      },
    };
    const successfulJob: JobRunCreateArgs = {
      data: {
        startTime: startDate,
        endTime: endDate,
        status: 'SUCCESS',
        job: {
          connect: {
            id: job.id,
          },
        },
      },
    };
    const runStates = [runningJob, successfulJob, successfulJob, failedJob, runningJob];

    const randomRunState = runStates[Math.floor(Math.random() * runStates.length)];

    await prisma.jobRun.create(randomRunState);
    //const newJobRun2 = await prisma.jobRun.create(randomRunState);
  }
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
