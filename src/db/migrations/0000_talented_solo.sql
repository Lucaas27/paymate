CREATE TYPE "public"."status" AS ENUM('open', 'sent', 'paid', 'overdue', 'void');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"generation_date" date NOT NULL,
	"due_date" date NOT NULL,
	"description" text NOT NULL,
	"status" "status" DEFAULT 'open' NOT NULL,
	"amount" integer NOT NULL
);
