const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = 4000;
const JWT_SECRET = 'your-super-secret-key-that-is-long-and-secure'; // IMPORTANT: Use an environment variable for this in production

// In-memory "database" for users
const users = [];
let nextUserId = 1;

// Middleware
app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// Authenticate (Register or Login) a user
app.post('/api/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    let user = users.find(u => u.username === username);

    // If user exists, check password
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      console.log('User logged in:', user.username);
    } else {
      // If user does not exist, create a new one
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: nextUserId++,
        username,
        password: hashedPassword,
      };
      users.push(newUser);
      user = newUser;
      console.log('User registered:', user.username);
    }

    // Generate and send JWT for both login and new registration
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during authentication' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
