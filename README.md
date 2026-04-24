#Welcome to this PostgreSQL + TS + Prisma Project Tutorial

this is a boilerplate backend app for any future project, involving REST API and a postgreSQL database.

I followed Alex Rusin's tutorial (https://www.youtube.com/watch?v=1EQ9RD8NonE), but added a few changes to the tsconfig.json and package.json files to ensure high compatibility of the code with the versions of Node.js and TypeScript I have:
node v: 24.14.0, ts v: 5.9.3, and npx v: 11.9.0

To run the project in Docker (recommended), execute the commands below:

1. `docker compose up --build` (builds image for the first time)

File-specific execution:

`docker compose -f docker-compose.dev.yml up -d` Run this to test app locally and db in Docker

`docker compose -f docker-compose.test.yml up -d` Run this to run backend app and db in Docker

Next, get inside the app container and run `npx prisma migrate dev`.

2. `docker compose down` to stop containers (add -v to wipe the DB volume)

3. `docker compose up -d --force-recreate app`

You can replicate this project by creating a new folder, cd-into the folder and run the commands below:

1. `npm init -y` this command creates a basic package.json, or the equivalent of a pom.xml file used in Java projects, which is enriched with libraries, dependencies, and scripts.

2. `npm install typescript tsx @types/node --save-dev` this command installs and saves typescript libraries (like the typescript CLI) inside the package.json file

3. `npx tsc --init` this command initializes the typescript project, creating the tsconfig.json file (which is essentially what structures the typescript compiler).

--------------------Project-specific dependencies & commands----------------------------------------
4. `npm install prisma @types/pg --save-dev` this adds prisma CLI to the project, which we use for migration and generation of SQL-compatible code, schemas, etc for a postgreSQL project.

5. `npx prisma init` this command initializes prisma, creating a schema.prisma (which we'll use to define tables and users/records), prisma configuration, .env, and .gitignore files.

6. `npx prisma migrate dev --name initial_migration` this commands creates tables and nodes defined in the schema.prisma file, creating SQL-equivalents of TS-defined objects.

7. `npx prisma generate` creates prisma client interface to interact with the database from the web

8. `npm install express cors morgan` install additional libraries to set up backend api

8. `npx tsx tsc/index.ts` to test project