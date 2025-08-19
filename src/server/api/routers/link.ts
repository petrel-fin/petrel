import { PlaidApi, PlaidEnvironments } from "plaid";
import { plaidClient } from "~/server/plaid/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Example API endpoint handler
const createLinkToken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: {
        // Need to generate unique ID for user and pass here
        client_user_id: "user_id_from_db",
      },
      client_name: "Petrel",
      products: ["auth", "transactions"],
      country_codes: ["US"],
      language: "en",

      // Mandatory redirect URI for OAuth
      // Set to URI where we redirect user after linking account
      // For now, placeholder
      redirect_uri: "http://localhost:3000",
    });

    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create link token" });
  }
};
