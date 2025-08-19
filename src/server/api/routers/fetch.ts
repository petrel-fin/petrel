import { PlaidApi, PlaidEnvironments } from "plaid";
import { plaidClient } from "~/server/plaid/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Get access token and item ID from db
const accessToken = "accessToken_from_db";

// Fetch account and balance data
const getAccounts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await plaidClient.accountsGet({
      access_token: accessToken,
    });
    const accounts = response.data.accounts;

    // TODO: Save or update accounts data in 'accounts' Drizzle table
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch accounts" });
  }
};

// Fetch transaction data for specific account
const getTransactions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await plaidClient.transactionsSync({
      access_token: accessToken,
    });
    const transactions = response.data.added;

    // TODO: Save transaction data to 'transactions' Drizzle table
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

// Fetch holdings data
const getHoldings = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await plaidClient.investmentsHoldingsGet({
      access_token: accessToken,
    });
    const holdings = response.data.holdings;

    // TODO: Save holdings data to 'holdings' Drizzle table
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch holdings " });
  }
};
