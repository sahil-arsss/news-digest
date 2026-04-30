# 🧠 AI-Powered Personalized News Digest System

This is a full-stack project I built to solve a simple problem:
**there’s too much news, and most of it isn’t relevant to us.**

So I created a system that:

* collects news from different sources
* uses AI to summarize it
* analyzes sentiment
* and sends personalized email digests based on user preferences

---

## 🚀 What this project does

Users can subscribe with their email, choose topics they care about, and select how often they want updates (daily/weekly).

On the backend:

* News is scraped from multiple sources
* Summaries are generated using AI
* Sentiment is analyzed
* Emails are automatically sent using cron jobs

On the frontend:

* Users can subscribe
* Browse summarized articles
* Update preferences
* Unsubscribe anytime using a secure link

---

## ✨ Features

### Backend

* News scraping (Axios + Cheerio)
* AI summarization (Gemini API)
* Sentiment analysis
* Email delivery using Nodemailer
* Scheduled automation using node-cron
* Subscription + preference management
* Token-based unsubscribe system

### Frontend

* Clean UI built with React + Tailwind
* Subscription form with validation
* News dashboard with filtering
* Sentiment-based color indicators
* Preferences update page
* Unsubscribe flow via URL token
* Loading states and toast notifications

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS
* Axios
* React Router

**Backend**

* Node.js
* Express
* MongoDB
* Axios + Cheerio
* Gemini API
* Nodemailer
* node-cron

---

## 📁 Project Structure

### Frontend

```
src/
├── components/
├── pages/
├── services/
├── hooks/
├── utils/
├── App.jsx
```

### Backend

```
backend/
├── controllers/
├── routes/
├── models/
├── services/
├── cron/
├── server.js
```

---

## 🔗 API Endpoints

Base URL:

```
http://localhost:5000/api
```

**User**

* POST `/users/subscribe`
* PATCH `/preferences`
* GET `/unsubscribe/:token`

**Articles**

* GET `/articles?topic=tech&limit=10`

---

## ⚙️ How to run locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/news-digest.git
cd news-digest
```

---

### 2. Setup backend

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
AI_API_KEY=your_key

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Run backend:

```bash
npm start
```

---

### 3. Setup frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔄 How it works (simple flow)

1. User subscribes with email + topics
2. News gets scraped periodically
3. AI generates summaries + sentiment or (you can direct call end points for this for quick review) 
4. Data is stored in database
5. Email digest is sent automatically 
6. User can update preferences or unsubscribe


##for quick review these you can do these task using endpoints given in backend 


```
Base URL: http://localhost:5000/api
```
* GET `/users/scrape`
* GET `/users/summarize`
* GET `/users/sentiment`    
* GET `/users/send-digest` for sending mail to all subscribed user
---

## 🧠 What I learned

* How to structure a full-stack project properly
* Integrating AI into a real use case
* Handling async workflows (scraping → processing → emailing)
* Building a clean and scalable React frontend
* Designing APIs that actually make sense

---

## 🚧 Things I Will improve Later

* Add authentication (JWT)
* Add search + bookmarking
* Use React Query for caching
* Improve UI with animations / dark mode

---

## ⭐ If you liked it

Feel free to star the repo or suggest improvements!
