const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'mySuperSecretKey123!@#'; //  IMPORTANT: Change this secret to something unique

app.use(cors());
app.use(bodyParser.json());

// Mock database: List of active clients
const clients = {
  'client-abc123': { active: true },
  'client-def456': { active: false }, 
};

// Validate token endpoint
app.post('/validate-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ status: 'error', message: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    const client = clients[decoded.clientId];

    if (client && client.active) {
      return res.json({ status: 'valid', message: 'Token is valid' });
    } else {
      return res.json({ status: 'invalid', message: 'Access denied' });
    }
  } catch (error) {
    return res.status(401).json({ status: 'error', message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
