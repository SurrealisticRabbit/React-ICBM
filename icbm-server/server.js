const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const JWT_SECRET = "a-very-secret-and-long-key-for-jwt";

const users = [];
let nextUserId = 1;

// ROUTES HERE

app.post("/api/authenticate", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    let user = users.find((user) => user.username === username);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      console.log("User authenticated successfully: ", user.username);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = {
        id: nextUserId++,
        username,
        password: hashedPassword,
      };
      users.push(user);
      console.log("New user registered: ", user.username);
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const buildPath = path.resolve(__dirname, "..", "icbm-web", "dist");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
