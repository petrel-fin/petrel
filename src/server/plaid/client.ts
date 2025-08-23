import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

// Ensure PLAID_CLIENT_ID and PLAID_SECRET are set in .env
// And that accessing environment variables is a secure method
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;

// Can change environment to 'production' or 'development' when needed
const PLAID_ENV = PlaidEnvironments.sandbox;

const config = new Configuration({
  basePath: PLAID_ENV,
  baseOptions: {
    headers: {
      PLAID_CLIENT_ID: PLAID_CLIENT_ID,
      PLAID_SECRET: PLAID_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(config);
