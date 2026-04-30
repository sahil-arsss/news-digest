export const getSentimentColor = (sentiment) => {
  switch (sentiment?.toLowerCase()) {
    case "positive":
      return "bg-green-100 text-green-700";
    case "neutral":
      return "bg-yellow-100 text-yellow-700";
    case "negative":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};