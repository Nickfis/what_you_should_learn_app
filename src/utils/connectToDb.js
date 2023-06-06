import { Client } from "pg";

export default async function connectToDb() {
  "use server";
  const isProd = process.env.NODE_ENV === "production";

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: isProd ? { rejectUnauthorized: false } : false,
  });

  await client.connect();

  return client;
}
