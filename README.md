
For scrapping 
Topic	    Source
Tech	    TechCrunch
AI	        MIT Technology Review
Finance	    CNBC
Sports	    ESPN





Get all articles
GET http://localhost:5000/api/articles

Get tech articles only
GET http://localhost:5000/api/articles?topic=tech

Limit articles
GET http://localhost:5000/api/articles?topic=tech&limit=5


Test AI Summarization

GET /api/scrape
GET /api/summarize