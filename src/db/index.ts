import { Invoices } from "@/db/schema/invoices"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Set the maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
})

const db = drizzle(pool, {
  schema: {
    Invoices,
  },
})
export default db
