import { db } from "./server/db";
import { sql } from "drizzle-orm";

async function check() {
    try {
        const result = await db.execute(sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'inquiries'
    `);
        console.log("Columns in 'inquiries':", result);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

check();
