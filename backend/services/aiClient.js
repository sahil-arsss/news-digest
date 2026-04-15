const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.AI_API_KEY
});

const summarizeText = async (text) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Summarize this news in 2 lines:\n${text}`
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("AI summarization failed:", error.message);
    return "";
  }
};
 
module.exports = { summarizeText };   