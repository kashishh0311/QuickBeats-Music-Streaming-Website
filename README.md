🎵 QuickBeats - Music Streaming Website
QuickBeats is a vibrant full-stack music streaming platform delivering catchy tunes and artist vibes with lightning-fast convenience. 🎸 Explore songs, albums, and artists, create playlists, and enjoy seamless playback in a bold orange-and-gray interface that’s as lively as your favorite beats. 🎧
🌟 Key Features

🎶 Curated Music Library: Discover songs, albums, and artists with fresh, dynamic content.
🔒 Secure Sign-Up & Login: Safe access for personalized playlists and listening history.
🔍 Music Discovery: Browse with filters and music emojis (🎵🎸🎧) for songs, albums, or artists.
▶️ Interactive Player: Stream music with smooth playback controls and queue management.
🛒 Playlist Creation: Add or tweak tracks in custom playlists effortlessly.
💸 Fast Subscriptions: Quick and secure checkout for premium features (if applicable).
📊 Listening Insights: Track recently played tracks and favorite artists.
📝 Feedback Option: Share thoughts on the platform to shape our music catalog.
🖥️ Dedicated Panels:
Client_Frontend: Your hub for streaming, browsing, and playlist management.
Admin_Frontend: Oversight for music catalog, user feedback, and platform ops.

📱 Responsive Design: Looks stunning on mobile, tablet, or desktop.

🧰 Built With

Frontend: React.js, Tailwind CSS, React Router, Axios
Backend: Node.js, Express.js
Database: MySQL
Authentication: JWT-based

🔧 Setup Steps

Clone the Project
git clone https://github.com/your-username/QuickBeats-Music-Website.git
cd quickbeats

Install DependenciesBackend:
cd Backend
npm install

Client frontend:
cd ../Client_Frontend
npm install

Admin frontend:
cd ../Admin_Frontend
npm install

Set Up EnvironmentIn Backend, create a .env file:
MYSQL_HOST=localhost
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=quickbeats_db
JWT_SECRET=your_jwt_secret_key
PORT=5000

In Client_Frontend and Admin_Frontend, create a .env file:
VITE_API_URL=http://localhost:5000/api

Configure MySQL

Install MySQL locally or use a cloud service (e.g., XAMPP, MySQL Workbench).
Create a database named quickbeats_db.
Import the provided quickbeats.sql file (in Backend/db/) to set up tables for songs, albums, artists, users, and playlists.

Start the PlatformBackend:
cd Backend
npm run dev

Client frontend:
cd Client_Frontend
npm run dev

Admin frontend:
cd Admin_Frontend
npm run dev

Visit:

Client_Frontend: http://localhost:3000
Admin_Frontend: http://localhost:3002

🎶 How It Works

🖱️ Go to http://localhost:3000 to start as a user.
🎵 Sign up, explore the emoji-rich music catalog, and add tracks to playlists.
▶️ Stream songs, manage your queue, and view listening history.
⭐ Submit feedback to improve the platform.
👨‍💼 Admins manage songs, albums, artists, and user feedback at http://localhost:3002.

📁 Structure
├── Backend/ # API for auth, music, playlists, and feedback
├── Client_Frontend/ # User streaming and browsing interface
├── Admin_Frontend/ # Music catalog and platform administration
