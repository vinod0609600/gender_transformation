import "dotenv/config";
import postgres from "postgres";

async function run() {
    const client = postgres(process.env.DATABASE_URL);
    try {
        console.log("Adding 'phone' column if it doesn't exist...");
        await client`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS phone TEXT`;

        console.log("Resetting ID sequence...");
        await client`SELECT setval('inquiries_id_seq', COALESCE((SELECT MAX(id) FROM inquiries), 0) + 1, false)`;

        console.log("Database updated successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error updating database:", err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

run();
