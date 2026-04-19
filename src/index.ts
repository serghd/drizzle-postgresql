import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, sql } from 'drizzle-orm';
import { usersTable } from './db/schema.js';

const db = drizzle(process.env.DATABASE_URL!);
async function main() {
   // // create item
   // const user: typeof usersTable.$inferInsert = {
   //    name: 'John',
   //    age: 30,
   //    email: 'john@example.com',
   // };
   // await db.insert(usersTable).values(user);
   // console.log('New user created!');

   // get items
   const users = await db.select().from(usersTable);
   console.log('Getting all users from the database: ', users);

   // get items (raw sql)
   let userId = users[0].id;
   const statement = sql`select * from ${usersTable} where ${usersTable.id} = ${userId}`;
   const res = await db.execute(statement);
   console.log('Getting user from the database (raw Sql): ', res.rows);

   //   // update item
   //   await db
   //     .update(usersTable)
   //     .set({
   //       age: 31,
   //     })
   //     .where(eq(usersTable.email, user.email));
   //   console.log('User info updated!')

   //   // remove item
   //   await db.delete(usersTable).where(eq(usersTable.email, user.email));
   //   console.log('User deleted!')
}
main();
