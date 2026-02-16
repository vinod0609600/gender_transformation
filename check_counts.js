import "dotenv/config";
import postgres from "postgres";

async function run() {
    const client = postgres(process.env.DATABASE_URL);
    try {
        const res = await client`SELECT COUNT(*) FROM inquiries`;
        console.log("Current inquiries count:", res[0].count);
        const maxId = await client`SELECT MAX(id) FROM inquiries`;
        console.log("Current max ID:", maxId[0].max);
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
}

run();
