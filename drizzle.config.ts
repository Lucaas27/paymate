import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv"

let envFile: string

switch (process.env.NODE_ENV as string) {
  case "development":
    envFile = ".env.development"
    break
  case "production":
    envFile = ".env.production"
    break
  case "local":
    envFile = ".env.local"
    break
  default:
    throw new Error(`Environment ${process.env.NODE_ENV} is not supported`)
}

dotenv.config({ path: `environments/${envFile}` })

if (!process.env.DATABASE_URL || typeof process.env.DATABASE_URL !== "string") {
  throw new Error("DATABASE_URL is not defined or is not a string")
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/*",
  out: "src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  breakpoints: true,
})
