Getting Started
To run the API locally, follow these steps:

Clone this repository:

git clone <https://github.com/KingsIke/flutterBank>
Install the required dependencies:  npm install
Start the server:

npm run compile
npm run dev

Endpoints

1. Create a Bank Account
   Endpoint: POST /create-account
   Request Payload:
   Account holder name
   Account holder DOB
   Account type (Savings, Checking, etc.)
   Initial balance

   Example Request Body:
{
"accountHolderName": "John Doe",
"dob": "1990-01-15",
"accountType": "Savings",
"initialBalance": 1000.00
}

Response:

{
"accountNumber": "1234567890",
"accountHolderName": "John Doe",
"accountType": "Savings",
"initialBalance": 1000.00
}
 2. Resolve a Bank Account
Endpoint: GET /account/:accountNumber
Parameters:
accountNumber (10-digit)
Example Request:


GET /account/1234567890
Response:
Account details if found, or an error message if not found.
Example Response (Found):

{
"userId": "d587b15d-0c8d-4e48-9d08-1ebbc21b02b2",
"accountNumber": "1234567890",
"accountHolderName": "John Doe",
"dob": "1990-01-15T00:00:00.000Z",
"accountType": "Savings",
"initialBalance": 1000.00
}

{
"error": "Account not in database"
} 
3. Fetch All Bank Accounts
Endpoint: GET /allAccounts

Response:

An array containing all account details.
Example Response:


[
{
"userId": "d587b15d-0c8d-4e48-9d08-1ebbc21b02b2",
"accountNumber": "1234567890",
"accountHolderName": "John Doe",
"dob": "1990-01-15T00:00:00.000Z",
"accountType": "Savings",
"initialBalance": 1000.00
},
{
"userId": "a8d7e57f-30e0-4cc4-b27e-01b20814deeb",
"accountNumber": "9876543210",
"accountHolderName": "Jane Smith",
"dob": "1985-07-20T00:00:00.000Z",
"accountType": "Checking",
"initialBalance": 2500.00
}
]

Validation Handling
this is done with JOI
