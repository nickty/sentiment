const Sentiment = require("sentiment");

const sentiment = new Sentiment();

exports.handler = async (event, context) => {
  try {
    const { text } = JSON.parse(event.body);
    const result = sentiment.analyze(text);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }
};
