import { db } from "./server/db";
import { sql } from "drizzle-orm";

async function run() {
    try {
        console.log("Adding 'phone' column if it doesn't exist...");
        await db.execute(sql`
      ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS phone TEXT;
    `);

        console.log("Resetting ID sequence...");
        // This will make the next record ID = (current max ID + 1) or 1 if empty
        await db.execute(sql`
      SELECT setval('inquiries_id_seq', COALESCE((SELECT MAX(id) FROM inquiries), 0) + 1, false);
    `);

        console.log("Database updated successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error updating database:", err);
        process.exit(1);
    }
}

run();
