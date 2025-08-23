import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  varchar,
} from "drizzle-orm/pg-core";

// Auth tables for Better Auth

export const users = pgTable("users", {
  // TODO: add stripe data
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

// Plaid tables
export const plaidItems = pgTable("plaid_items", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  itemId: text("item_id").notNull(),
  accessToken: text("access_token").notNull(),
  institutionId: text("institution_id").notNull(),
  institutionName: varchar("institution_name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const holdings = pgTable("holdings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  plaidItemId: text("plaid_item_id")
    .notNull()
    .references(() => plaidItems.id),
  accountId: text("account_id")
    .notNull()
    .references(() => accounts.id),
  plaidAccountId: integer().notNull(),
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

export const transactions = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  accountId: text("account_id")
    .notNull()
    .references(() => accounts.id),
  plaidItemId: text("plaid_item_id")
    .notNull()
    .references(() => plaidItems.id),
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

// TODO: add internal schema tables for possessions, budgeting, custom holdings, AI chats, and plans
