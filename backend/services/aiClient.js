const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

const summarizeText = async (text) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Summarize this news in 2 lines:\n${text}`
    });
    
    return response.text?.trim?.() || 
       response.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
  } catch (error) {
    console.error("AI summarization failed:", error.message);
    return "";
  }
};
 
module.exports = { summarizeText };   