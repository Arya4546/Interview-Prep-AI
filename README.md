# Interview-Prep-AI
📚 Interview Prep AI
Interview Prep AI is an intelligent web application that helps job seekers prepare for interviews by generating tailored questions and answers based on their chosen role and experience.
Users can securely sign up, create multiple prep sessions, pin important questions, and get AI-powered explanations — all in a clean, modern interface.

🔗 Live Demo: https://interview-prep-snowy.vercel.app/

✨ Features
✅ User Authentication

Register and log in securely using JWT-based authentication.

Upload a profile image during signup.

✅ Role-Based Interview Sessions

Create customized sessions by entering your job role, years of experience, focus topics, and descriptions.

Manage multiple sessions for different job goals.

✅ AI-Powered Q&A

Automatically generate high-quality interview questions and answers using the Gemini API.

✅ Accordion Learning UI

Clean, expandable Q&A interface for easy learning and focus.

✅ Dynamic AI Explanations

Get detailed explanations for complex concepts — generated on-demand by AI.

✅ Pin Important Questions

Pin any question for quick reference during study.

✅ Session Management

Create new sessions anytime.

Load more questions when needed.

Delete sessions when no longer needed.

✅ Modern Tech Stack

MongoDB for secure storage of sessions and pinned questions.

Tailwind CSS for a responsive, sleek frontend.

Node.js, Express, JWT, and Mongoose for a robust backend.

⚙️ Tech Stack
Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT

AI: Gemini API

📂 Project Structure

interview-prep-ai/

 ├── client/ 
 
 ├── server/ 
 
 ├── README.md

📌 Example .env (Backend)
MONGO_URI=Your Mongo DB connection string
JWT_SECRET=you jwt secret
GEMINI_API_KEY=Your gemini api key
PORT=8000

🚀 Getting Started Locally

1️⃣ Clone the repo
git clone https://github.com/Arya4546/interview-prep-ai.git
cd interview-prep-ai

2️⃣ Install dependencies

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

3️⃣ Create a .env file in server/ and add your keys as shown above.


4️⃣ Run backend
cd server
npm run dev

5️⃣ Run frontend
cd ../client
npm start

6️⃣ Open http://localhost:5173 in your browser and start prepping!

🙌 Contributing
Contributions are welcome!
If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.

💡 Author
Made with ❤️ by Arya Deep Singh
