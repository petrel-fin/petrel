# Link
Link to docs: https://plaid.com/docs/

## Overview

See Plaid Dashboard for two API keys in three environments:
- Environments:
  - Sandbox: Fake data, no cost, all for testing. Test credentials provided
  - Development: Limited data (a few users, likely us) to test in development. Free for development
  - Production: Full data from users financial institutions. Has pricing (future issue), but includes unlimited live credentials
- API Keys:
  - client_id: Private identifier for the team
  - secret: Private key, one for each of the three environments

### Protocols
Basic format is JSON over HTTP. Requests are POST. All requests must include a `Content-Type` of `application/json` and the body must be valid JSON.

All `Endpoints` require a `client_id` and `secret` (listed on the Dashboard; Spencer has link). Can be sent either in the request body or in the headers.

Every API response includes `request_id`, either in the body or in the response headers. For faster support when we have an issue, we should include the `request_id` when contacting them.

### Status
We need to ensure our app is running in tandem with API system uptime. Link to that page:
https://status.plaid.com/

#### Status and Incident endpoints (JSON)
- https://status.plaid.com/api/v2/status.json (current status)
- https://status.plaid.com/api/v2/incidents.json (current/historical incidents)

### Store API Data
Any token returned by the API is sensitive and should be stored securely. Especially consumer data.

Some less sensitive identifiers (which don't contain consumer data and are not keys or tokens):
- `account_id`
- `item_id`
- `link_session_id`
- `request_id`

#### Field formats
- Strings: No maximum length unit, as Plaid returns the strings given by the financial institution. Field lengths of 280 are generally adequate, but no guarantee
- Numbers/Money: Plaid returns all currency values as decimal values in dollars (or equivalent currency), rather than as integers. Some cases, Plaid API returns money values that have more than two digits; i.e. crypto. (Definitely something we should consider!)

## Auth
Retrieving bank account information. Useful for looking at ACH payments in US, EFT in Canada, etc.

Full docs:
Link: https://plaid.com/docs/auth/

### Endpoints
#### /auth/get
Returns bank account and bank identification numbers (i.e. routing numbers, etc.) associated with checking, savings, cash management accounts

**Request fields**:
- `client_id` (string): Required. Provided in header or part of request body
- `secret` (string): Required. Provided in header or part of request body
- `access_token` (string): Required. Associated with Item data is being requested for
- `options` (object): Optional object to filter /auth/get results
  - `account_ids` (string): List of account ids to retrieve for the Item

Sample:
```node
const request: AuthGetRequest = {
  access_token: accessToken,
};
try {
  const response = await plaidClient.authGet(request);
  const accountData = response.data.accounts;
  const numbers = response.data.numbers;
} catch (error) {
  // handle error
}
```

**Response fields**:
- `accounts` (object): Accounts for which numbers are being retrieved
  - `account_id` (string): Unique identifier for the account. Value will not change unless it can't be reconciled with data returned by finacial institution; i.e. in an account name change (a new account_id will be assigned then). Can also change if the `access_token` is deleted, and the same credentials generate a new `access_token`
  - `balances` (object): Set of fields describing balance of account. Can be cached, unless balance object was returned by /accounts/balance/get
    - `available` (nullable, number): Amount of funds available to be withdrawn
    - `current` (nullable, number): Total amount of funds in or owed by the account
    - `limit` (nullable, number): Represents credit limit
    - `iso_currency_code`: "USD", etc.

Others:
- `numbers` (object): Contains identifying numbers used for making transfers to and from accounts
- `item` (object): Metadata about an item
- `request_id` (string): Unique identifier for the request; useful for troubleshooting

Sample `accounts` object:
``` node
{
  "accounts": [
    {
      "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
      "balances": {
        "available": 100,
        "current": 110,
        "limit": null,
        "iso_currency_code": "USD",
        "unofficial_currency_code": null
      },
      "mask": "9606",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Checking",
      "subtype": "checking",
      "type": "depository"
    }
  ]
```

## Balance
Verify real-time account balances

Full docs:
Link: https://plaid.com/docs/balance/

### Endpoints
#### /accounts/balance/get/
Retrieving real-time balance data. As opposed to /accounts/get (which returns a balance object, cachable), /accounts/balance/get forces available and current balance fields to be refreshed rather than cached. Takes a little longer (typically less than 10 seconds still).

**Request fields**:
(Similar to Auth)
- `access_token`
- `secret`
- `client_id`
- `options`
  - `account_ids`
  - `min_last_updated_datetime`

Sample:
``` node
// Pull real-time balance information for each account associated
// with the Item
const request: AccountsGetRequest = {
  access_token: accessToken,
};
try {
  const response = await plaidClient.accountsBalanceGet(request);
  const accounts = response.data.accounts;
} catch (error) {
  // handle error
}
```
**Response fields**:
(Similar to Auth)
- `accounts`
  - `account_id`
  - `balances` (not cachable!)
    - `available`
    - `current`
    etc, etc.

Sample `accounts` object:
```node
{
  "accounts": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "balances": {
        "available": 100,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "holder_category": "personal",
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "subtype": "checking",
      "type": "depository"
    }
```
## Transactions
Retrieve and refresh up to 24 months of historical transaction data, including geolocation, merchant, category information, etc.

Full docs:
Link: https://plaid.com/docs/transactions/

### Endpoints

#### /transactions/sync
Retrieves transactions associated with an Item and can fetch updates using a cursor to track which updates have already been seen. Supports **credit**, **depository**, and some **loan-type** accounts (only those with account subtype `student`). For investments, use `/investments/transactions/get` instead.

**Request fields**
- `client_id`
- `access_token`
- `secret`
- `cursor` (string): Represents the last update requested. Providing it will cause the response to only return changes after this update. If omitted, the entire history of updates will be returned, starting with the first-added transactions on the Item. Also accepts the special value of "now", which is used to fast-forward cursor as part of migrating existing Item from `/transactions/get` to `/transactions/sync`. See docs for full explanation.
- `count` (integer): Number of transaction updates to fetch
- `options`

Sample:
```node
// Provide a cursor from your database if you've previously
// received one for the Item. Leave null if this is your
// first sync call for this Item. The first request will
// return a cursor.
let cursor = database.getLatestCursorOrNull(itemId);

// New transaction updates since "cursor"
let added: Array<Transaction> = [];
let modified: Array<Transaction> = [];
// Removed transaction ids
let removed: Array<RemovedTransaction> = [];
let hasMore = true;

// Iterate through each page of new transaction updates for item
while (hasMore) {
  const request: TransactionsSyncRequest = {
    access_token: accessToken,
    cursor: cursor,
  };
  const response = await client.transactionsSync(request);
  const data = response.data;

  // Add this page of results
  added = added.concat(data.added);
  modified = modified.concat(data.modified);
  removed = removed.concat(data.removed);

  hasMore = data.has_more;
```

**Response fields**:
- `transactions_update_status` (string): Description of the update status for transaction pulls of an Item. Field contains same info provided by transaction webhooks; may be helpful for webhook troubleshooting. Values:
  - TRANSACTIONS_UPDATE_STATUS_UNKNOWN: Unable to fetch
  - NOT_READY: Item is pending transaction pull
  - INITIAL_UPDATE_COMPLETE: Initial pull for Item is complete, historical pull is pending
  - HISTORICAL_UPDATE_COMPLETE: Both initial and historical pull for Item are complete
- `accounts`
  - `account_id`
  etc.
- `added` (object): Transactions that have been added to the item since cursor ordered by ascending last modified time
  - `account_id`
  etc.
- `modified` (object): Transactions that have been modified on the Item since cursor ordered by ascending last modified time
- `removed` (object): Transactions that have been removed from the Item since cursor ordered by ascending last modified time.
- `next_cursor` (string): Cursor used for fetching any future updates after the latest update provided in this response.
- `has_more` (boolean): Represents if more than requested count of transaction updates exist. If true, additional updates can be fetched by making an additional request with cursor set to `next_cursor`. Also important to pull all available pages, to make it less likely for underlying data changes to conflict with pagination.
- `request_id`

Sample:
```node
"added": [
   {
     "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
     "account_owner": null,
     "amount": 72.1,
     "iso_currency_code": "USD",
     "unofficial_currency_code": null,
     "check_number": null,
     "counterparties": [
       {
         "name": "Walmart",
         "type": "merchant",
         "logo_url": "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
         "website": "walmart.com",
         "entity_id": "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
         "confidence_level": "VERY_HIGH"
       }
     ],
     "date": "2023-09-24",
     "datetime": "2023-09-24T11:01:01Z",
     "authorized_date": "2023-09-22",
     "authorized_datetime": "2023-09-22T10:34:50Z",
     "location": {
       "address": "13425 Community Rd",
       "city": "Poway",
       "region": "CA",
       "postal_code": "92064",
       "country": "US",
       "lat": 32.959068,
       "lon": -117.037666,
       "store_number": "1700"
     },
     "name": "PURCHASE WM SUPERCENTER #1700",
     "merchant_name": "Walmart",
     "merchant_entity_id": "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
     "logo_url": "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
     "website": "walmart.com",
     "payment_meta": {
       "by_order_of": null,
       "payee": null,
       "payer": null,
       "payment_method": null,
       "payment_processor": null,
       "ppd_id": null,
       "reason": null,
       "reference_number": null
     },
     "payment_channel": "in store",
     "pending": false,
     "pending_transaction_id": "no86Eox18VHMvaOVL7gPUM9ap3aR1LsAVZ5nc",
     "personal_finance_category": {
       "primary": "GENERAL_MERCHANDISE",
       "detailed": "GENERAL_MERCHANDISE_SUPERSTORES",
       "confidence_level": "VERY_HIGH"
     },
     "personal_finance_category_icon_url": "https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png",
     "transaction_id": "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
     "transaction_code": null,
     "transaction_type": "place"
   }
 ]
```
##### /transaction/get
Available to use, but /transactions/sync provides the same functionality and improves developer ease-of-use for handling transaction updates

#### /transactions/recurring/get
Fetch recurring transaction streams. Allows devs to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings, or credit accounts. Also provides insights about each stream, including category, merchant, last amount, etc. Best used to manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments

Offered as an add-on to `Transactions`. Need to request access to this endpoint through https://dashboard.plaid.com/team/products

Can only be called on an Item that has already been initialized with `Transactions`; either during Link, by specifying it in `/link/token/create`, or after Link, by calling `/transactions/get` or `/transactions/sync`.

Ensure we use `days_requested` parameter, to request at least 180 days of history with initializing Items with `Transactions`. Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive streams. After initial call, can use `/transactions/recurring/get` to get updates.

**Request fields**
- `client_id`
- `access_token`
- `secret`
- `account_ids`

Sample:
```node
const request: TransactionsGetRequest = {
  access_token: accessToken,
  account_ids : accountIds
};
try {
  const response = await client.transactionsRecurringGet(request);
  let inflowStreams = response.data.inflowStreams;
  let outflowStreams = response.data.outflowStreams;
  }
} catch((err) => {
  // handle error
}
```

**Response fields**
- `inflow_streams` (object): An array of depository transaction streams
- `outflow_streams` (object): An array of expense transaction streams
- `updated_datetime` (string)
- `request_id`

#### Other endpoints:
- `/transactions/refresh`
- `/categories/get`

## Investments
For Investment data

Full docs:
Link: https://plaid.com/docs/investments/

### Endpoints
#### /investment/holdings/get
Allows devs to receive user-authorized stock position data for **investment-type** accounts

**Request fields**
- `client_id`
- `secret`
- `access_token`
- `options`

Sample:
```node
// Pull Holdings for an Item
const request: InvestmentsHoldingsGetRequest = {
  access_token: accessToken,
};
try {
  const response = await plaidClient.investmentsHoldingsGet(request);
  const holdings = response.data.holdings;
  const securities = response.data.securities;
} catch (error) {
  // handle error
}
```

**Response fields**
- `accounts`
- `holdings`: Holdings belonging to investment accounts associated with the Item. Details of securities in the holdings provided in the `securities` field
- `securities`: Objects describing the securities held in the accounts associated with the Item
- `item`: Metadata about the Item
- `request_id`
- `is_investments_fallback_item` (boolean): When true, indicates that the Item's portfolio was manually created with the Investments Fallback flow

#### /investments/transactions/get
Allows devs to retrieve up to 24 months of user-authorized transaction data for investment accounts
