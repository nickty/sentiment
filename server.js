const express = require("express");
const Sentiment = require("sentiment");
const cors = require("cors");

const app = express();
const port = 5000;

// Configure CORS to allow requests from all origins
app.use(cors({ origin: "*" }));
app.use(express.json());

const sentiment = new Sentiment();

app.post("/analyze", (req, res) => {
  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
