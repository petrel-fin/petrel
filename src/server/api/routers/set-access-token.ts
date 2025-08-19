import { PlaidApi, PlaidEnvironments, PlaidErrorType } from "plaid";
import { plaidClient } from "~/server/plaid/client";
import { plaidItems } from "~/server/db/schema";
import type { NextApiRequest, NextApiResponse } from "next";

type ExchangePublicTokenBody = {
  public_token: string;
  institution_id: string;
  institution_name: string;
};

const exchangePublicToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { public_token, institution_id, institution_name } =
    req.body as ExchangePublicTokenBody;

  if (!public_token) {
    return res.status(400).json({ error: "Public token is required" });
  }

  try {
    // Exchange public token for access token
    const tokenResponse = await plaidClient.itemPublicTokenExchange({
      public_token,
    });
    const accessToken = tokenResponse.data.access_token;
    const itemId = tokenResponse.data.item_id;

    // TODO: Save itemId, accessToken, institution_id, and institution_name to database
    // Example:
    /*
    await db.insert(plaidItems).values({
          id: itemId, // Use itemId as the primary key
          userId: req.user.id, // Get the user ID from your session or authentication
          itemId: itemId,
          accessToken: accessToken,
          institutionId: institution_id,
          institutionName: institution_name,
          createdAt: new Date(),
          updatedAt: new Date()
        });
    */

    res.json({ success: true, itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to exchange public token" });
  }
};
