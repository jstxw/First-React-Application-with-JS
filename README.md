<div align="center">
  <a href="https://shipwrecked.hackclub.com/?t=ghrm" target="_blank">
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/739361f1d440b17fc9e2f74e49fc185d86cbec14_badge.png" 
         alt="This project is part of Shipwrecked, the world's first hackathon on an island!" 
         style="width: 35%;">
  </a>
</div>

# NoMovieFOMO

**NoMovieFOMO** is a modern web app for movie and TV show enthusiasts to discover trending content, keep track of favorites, and join live discussions with others. Built as part of Shipwrecked 2025, it aims to help users stay up-to-date with the latest releases and connect with fellow fans.

## Features

- 🎬 **Browse Popular Movies & TV Shows**: Powered by [TMDB API](https://www.themoviedb.org/documentation/api)
- 🔍 **Search** for movies and TV shows
- ⭐ **Favorites**: Save your favorite movies and shows (with local persistence)
- 🗨️ **Live Forum Chat**: Real-time chat using Firebase
- 🔒 **Google Authentication**: Secure sign-in for chat
- 📅 **Upcoming Releases**: See what's coming soon
- ✨ **Animated, Responsive UI**: Netflix-inspired landing page with interactive backgrounds

## Tech Stack

- **Frontend**: React, Vite, React Router, Context API, CSS Modules
- **Backend**: Node.js, Express, CORS
- **APIs**: TMDB (The Movie Database)
- **Realtime & Auth**: Firebase (Firestore, Auth)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd NoMovieFOMO
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Running the App

#### Start the Backend

```bash
cd backend
node index.js
```

By default, the backend runs on `http://localhost:8000`.

#### Start the Frontend

```bash
cd ../frontend
npm run dev
```

The frontend runs on `http://localhost:5173` (or as specified by Vite).

### 4. Environment Variables

- The project uses a public TMDB API key and Firebase config (see `frontend/src/services/api.js` and `frontend/src/services/firebaseconfig.js`).
- For production, consider securing API keys and using environment variables.

## Project Structure

```
NoMovieFOMO/
  frontend/    # React app (UI, pages, services)
  backend/     # Node.js/Express API/Firebase (template)
```

## Credits

- **Developer:** Justin Wang
- **APIs:** [TMDB](https://www.themoviedb.org/), [Firebase](https://firebase.google.com/)
- **Hackathon:** [Shipwrecked 2025](https://shipwrecked.hackclub.com/)

## License

This project is for educational and hackathon use. See individual files for details.
