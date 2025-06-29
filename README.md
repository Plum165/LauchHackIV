# LauchHack IV
# AI-Powered Triage System – LaunchHack IV

This project is a smart, AI-assisted triage system that helps users assess the urgency of their symptoms and suggests the next best steps — including local clinics or hospitals — based on their township and symptom description. Built for LaunchHack IV, this project combines a simple web UI, the OpenAI API, and optional backend integration using Java.

# Features
- Symptom Input Form – Users describe their condition and enter their location (township).

- AI-Powered Triage – OpenAI's GPT analyzes symptoms and categorizes urgency: Critical, Urgent, or Non-Urgent.

- Location Awareness – Based on the user’s township, the system can suggest nearby clinics or hospitals.

- Modular Architecture – JavaScript for frontend + optional Java backend for storage or advanced logic.

- Works in the Browser – Easy to deploy, easy to test.

# Tech Stack
Layer	Technology	Purpose
Frontend	HTML, CSS, JS	User input + OpenAI interaction
AI Engine	OpenAI GPT-4	Triage classification + advice
Backend ⚙️ (Optional)	Java (Spring Boot)	Database logging, hospital data
Location (Optional)	Google Maps API	Nearby doctors/hospitals by area
Hosting	Local / Replit / Netlify	Easy deploy options

# How It Works
User inputs symptoms and current township.

A prompt is sent to OpenAI's API with their input.

GPT-4 classifies the urgency level and suggests next actions.

The frontend displays AI's advice (e.g., visit clinic, call emergency services).

(Optional) Java backend stores data or returns local facility info.

# File Structure
```
bash
Copy
Edit
triage-ai-web/
├── index.html       # Web UI
├── style.css        # Basic styling
├── script.js        # OpenAI logic + input handling
├── backend/         # (Optional) Java backend folder
└── README.md        # Project description
```

# Setup Instructions
1. Clone the Repo
bash
Copy
Edit
```
git clone https://github.com/yourusername/triage-ai-web.git
```
```
cd triage-ai-web
```
3. Add OpenAI API Key
Edit script.js and replace this line:

js
Copy
Edit
'Authorization': 'Bearer YOUR_API_KEY_HERE'
With your actual OpenAI API key.

3. Run the App Locally
You can open index.html directly in a browser, or use a local server:

bash
Copy
Edit
npm install -g serve
serve .
Visit: http://localhost:3000

✅ Example Prompt Sent to OpenAI
txt
Copy
Edit
A patient in Khayelitsha reports the following symptoms: severe chest pain, shortness of breath, and dizziness.
Classify the urgency (triage) as: Critical, Urgent, or Non-Urgent.
Suggest the best action and recommend a nearby clinic if possible.
💡 Ideas for Future Features
🔒 Add authentication for secure access

🌍 Use Maps API for real-time clinic finder

📊 Visualize triage stats over time

📱 USSD/SMS integration for low-data access

🏁 Team & Credits
Built with ❤️ during LaunchHack IV by [Your Name], powered by:

OpenAI

Google Maps API

Java, JavaScript, HTML/CSS

📜 License
MIT License
