import { getSentimentColor } from "../utils/sentimentColor";

function ArticleCard({ article }) {
  return (
  <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300">
      
      {/* Title */}
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {article.title}
      </a>

      {/* Summary */}
      <p className="text-gray-600 mt-2">
        {article.summary || "No summary available"}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        
        {/* Topic */}
        <span className="text-sm text-gray-500">
          #{article.topic}
        </span>

        {/* Sentiment Badge */}
        <span
          className={`px-2 py-1 text-xs rounded-full ${getSentimentColor(
            article.sentiment
          )}`}
        >
          {article.sentiment || "Unknown"}
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;