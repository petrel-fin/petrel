import {
  integer,
  pgTable,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const accountsTable = pgTable("accounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id),
  plaidAccountId: integer().notNull(),
  plaidItemId: integer().notNull(),
  // accessToken? Separate 'tokens' table?
  accountName: varchar({ length: 255 }).notNull(),
  accountType: varchar({ length: 255 }).notNull(),
  accountNumber: integer().notNull(), // accountNumber will always be masked, i.e. "********1234"
  routingNumber: integer().notNull(),
  institutionName: varchar({ length: 255 }).notNull(),
  currentBalance: integer().notNull(),
  availableBalance: integer().notNull(),
  currency: varchar({ length: 255 }).default("USD").notNull(),
  accountStatus: varchar({ length: 50 }).default("active").notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const transactionsTable = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  accountId: integer()
    .notNull()
    .references(() => accountsTable.id),
  plaidTransactionId: integer().notNull(),
  amount: integer(),
  date: integer(), // Needs updating to take plaid transaction date
  description: varchar({ length: 255 }),
  merchantName: varchar({ length: 255 }),
  plaidCategoryId: integer().notNull(),
  primaryCategory: varchar({ length: 255 }).notNull(),
  detailedCategory: varchar({ length: 255 }).notNull(),
  userCategory: varchar({ length: 255 }), // Can remove?
  transactionType: varchar({ length: 50 }), // Debit/Credit types?
  pending: boolean().notNull().default(false),
  currency: varchar({ length: 255 }).default("USD").notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
