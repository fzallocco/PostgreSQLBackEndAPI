import "dotenv/config";
import app from "./server.js";
/*import { prisma } from './lib/prisma'*/

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});

/*initially we run npx tsx src/index.ts to populate the database with mock data*/

/*async function main() {
    //Create a new user with a post
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: {
                    title: 'Hello World',
                    content: 'This is my first post!',
                    published: true,
                },
            },
        },
        include: {
            posts: true,
        },
    })
    console.log('Created user:', user)

    //fetch all users with their posts
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.log('All users:', JSON.stringify(allUsers, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/