import { useState } from "react";
import API from "../services/api";

const TOPICS = ["tech", "ai", "finance", "sports", "health"];

function Subscribe() {
    const [email, setEmail] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [frequency, setFrequency] = useState("daily");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleTopicChange = (topic) => {
        setSelectedTopics((prev) =>
            prev.includes(topic)
                ? prev.filter((t) => t !== topic)
                : [...prev, topic]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || selectedTopics.length === 0) {
            setMessage("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const res = await API.post("/users/subscribe", {
                email,
                topics: selectedTopics,
                frequency,
            });

            setMessage("✅ Subscription successful!");
            setEmail("");
            setSelectedTopics([]);
            setFrequency("daily");

        } catch (error) {
            setMessage("❌ Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow mt-10">

            <h2 className="text-2xl font-bold mb-4 text-center">
                Subscribe to News Digest
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Email */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Topics */}
                <div>
                    <p className="font-medium mb-2">Select Topics:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {TOPICS.map((topic) => (
                            <label key={topic} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedTopics.includes(topic)}
                                    onChange={() => handleTopicChange(topic)}
                                />
                                <span>{topic}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Frequency */}
                <div>
                    <p className="font-medium mb-2">Frequency:</p>
                    <select
                        className="w-full p-2 border rounded"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Submitting..." : "Subscribe"}
                </button>
            </form>

            {/* Message */}
            {message && (
                <p
                    className={`mt-4 text-center text-sm ${message.includes("successful") ? "text-green-600" : "text-red-500"
                        }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}

export default Subscribe;