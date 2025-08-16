import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  debug: true,
  emailAndPassword: {
    enabled: true,
  },
  // TODO: move client side auth to server for login and logout
  plugins: [nextCookies()],
});
