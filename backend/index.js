const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load .env

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB and set up routes
connectToMongo().then(() => {
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/notes", require("./routes/notes"));

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
