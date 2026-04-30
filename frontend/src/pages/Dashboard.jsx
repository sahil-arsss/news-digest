import { useEffect, useState } from "react";
import API from "../services/api";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

const TOPICS = ["all", "tech", "ai", "finance", "sports", "health"];

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("all");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const query =
        topic === "all"
          ? `/articles?limit=${limit}`
          : `/articles?topic=${topic}&limit=${limit}`;

      const res = await API.get(query);

      setArticles(res.data.articles || []);
    } catch (err) {
      console.error("Error fetching articles", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [topic, limit]);

  return (
    <div>
      
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">News Dashboard 📰</h2>

      {/* Topic Filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {TOPICS.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTopic(t);
              setLimit(10);
            }}
            className={`px-3 py-1 rounded-full border ${
              topic === t
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Loader */}
      {loading && <Loader />}
          {/* Empty State */}
          {!loading && articles.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                  No articles found.
              </p>
          )}

      {/* Articles Grid */}
          {articles.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {articles.map((article, index) => (
                      <ArticleCard key={index} article={article} />
                  ))}
              </div>
          )}
        
      {/* Load More */}
      <div className="text-center mt-6">
        <button
          onClick={() => setLimit((prev) => prev + 5)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Dashboard;