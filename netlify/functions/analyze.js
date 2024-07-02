const Sentiment = require("sentiment");

const sentiment = new Sentiment();

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    // Handle preflight request
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }

  try {
    const { text } = JSON.parse(event.body);
    const result = sentiment.analyze(text);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }
};
