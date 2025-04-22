const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateResponse(query, board) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `You are an AI tutor for ${board} students. Provide a detailed, step-by-step explanation for the following question: ${query}. Include relevant diagrams or visuals if applicable.`;
  const result = await model.generateContent(prompt);
  return {
    text: result.response.text(),
    visual: result.response.candidates[0].content.parts.find(part => part.fileData)?.fileData?.uri || 'https://via.placeholder.com/400x300?text=Diagram',
  };
}

module.exports = { generateResponse };