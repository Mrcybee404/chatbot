const jwt = require('jsonwebtoken');

// Your secret key (same one used in server.js)
const SECRET_KEY = 'mySuperSecretKey123!@#'; //Example SECRET_KEY

// Function to generate a token
function generateToken(clientId) {
  const token = jwt.sign(
    { clientId },           // Payload: What you store inside the token
    SECRET_KEY,             // Secret key
    { expiresIn: '7d' }      // Optional: Token expires in 7 days
  );
  return token;
}

// Example usage:
const myClientId = '6809b3a1523186af0b2c9933'; // Change to your client's ID
const token = generateToken(myClientId);

console.log('Generated Token:', token);
