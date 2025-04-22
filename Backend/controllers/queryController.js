const Query = require('../models/Query');
const { generateResponse } = require('../services/gemini/geminiService');

exports.processQuery = async (req, res) => {
  const { query, board } = req.body;
  const user = req.user;

  try {
    const { text, visual } = await generateResponse(query, board);

    const newQuery = new Query({
      user: user.userId,
      board,
      query,
      response: text,
      visual,
    });
    await newQuery.save();

    res.json({ text, visual });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process query' });
  }
};