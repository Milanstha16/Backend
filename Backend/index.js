console.log("Welcome to Backend");

const express = require('express');
const connectDB = require('./db/db');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

connectDB();
app.use("/api/auth", require ("./routes/userRoutes"));
const PORT = process.env.PORT ;

app.get('/', (req, res) => {
  res.send('Milan Shrestha');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
