import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core"

export const invoicesStatusOptions = [
  "open",
  "sent",
  "paid",
  "overdue",
  "void",
] as const
export type InvoiceStatus = (typeof invoicesStatusOptions)[number]
export const invoicesStatusEnum = pgEnum("status", invoicesStatusOptions)

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  generationDate: date("generation_date").notNull(),
  dueDate: date("due_date").notNull(),
  description: text("description").notNull(),
  status: invoicesStatusEnum("status").notNull().default("open"),
  amount: integer("amount").notNull(),
})
