Student Job Tracker - MERN Stack Web App
A modern and responsive job application tracker built with the MERN Stack (MongoDB, Express, React, Node.js). This app allows students and job seekers to manage their job applications with features like adding, updating, filtering, and deleting applications.

🚀 Live Demo
[Optional:https://job-traker-seven.vercel.app/ (frontend) https://job-traker-vitt.onrender.com  (backend)]

📦 Tech Stack
Layer	Technology
Frontend -	React, Material UI, Axios
Backend -	Node.js, Express.js
Database -	MongoDB (MongoDB Atlas)
Styling -	Material UI, Custom CSS, Framer Motion
Deployment - Vercel (Frontend), Render(Backend)


Features :- 

📝 Job Application Management
Add a job with:

Company

Role

Status (Applied, Interview, Offer, Rejected)

Application Date

Application Link

View all jobs in a clean table format.

Filter jobs by status (Applied, Interview, etc.).

Update job status and applied date inline.

Delete a job application.

✨ UI/UX
Responsive and modern layout.

Smooth entry animations using Framer Motion.

Vertical scrolling inside the table container.

Material UI components for consistency and accessibility.


📁 Folder Structure :- 

job-tracker/
├── job-tracker-backend/    

│   ├── config/
│   │   └── db.js   

│   ├── controllers/
│   │   └── jobController.js 

│   ├── models/
│   │   └── Job.js 

│   ├── routes/
│   │   └── jobRoutes.js

│   ├── .env   

│   ├── package.json

│   ├── package-lock.json

│   └── server.js                  




├── job-tracker-frontend/  

│   ├── node_modules/

│   ├── public/

│   ├── src/

│   │   ├── components/  
│   │   │   ├── AddJob.js  

│   │   │   ├── JobList.js 

│   │   │   └── Navbar.js   

│   │   ├── App.js    

│   │   ├── App.css 

│   │   ├── index.js   

│   │   ├── index.css   

│   │   ├── logo.svg

│   │   ├── reportWebVitals.js

│   │   └── setupTests.js

│   ├── package.json

│   ├── package-lock.json

├── .gitignore

└── README.md


🔧 Installation & Setup
Prerequisites
Node.js & npm

MongoDB Atlas account

1. Clone the Repository
bash
git clone https://github.com/prem01kr/job-tracker.git
cd job-tracker

2. Backend Setup
bash
cd server
npm install
Create a .env file:
.env

PORT=5000
MONGO_URI=mongodb+srv://premkm016:ovLGHXdSLHfs9IMG@cluster1.00dla.mongodb.net/auth_db?retryWrites=true&w=majority&appName=Cluster1

Start the server:
bash
npm start

3. Frontend Setup

bash

cd job-tracker-fron
npm install


Start React app:
bash
npm start
App runs at http://localhost:3000

📡 API Endpoints
Method  	Route	    Description
POST	 /api/jobs	    Add new job
GET	    /api/jobs	    Get all jobs
PUT	   /api/jobs/:id	Update job status/date
DELETE	/api/jobs/:id	Delete job

💻 Deployment
Frontend (Vercel)
Connect your repo to Vercel.
Set frontend build directory: ./build

Add environment variable:

REACT_APP_BACKEND_URL=https://job-traker-vitt.onrender.com
Backend (Render)
Deploy server/ directory to Render.


🙌 Acknowledgements
Material UI

Framer Motion

MongoDB Atlas

Render

Vercel

📬 Contact
Made by Prem Kumar
https://pk-portfoliosite.netlify.app/


** screenshot**
1. ![add job page](<Screenshot/addjob page.jpg>)
3. ![job list](<Screenshot/job list.jpg>)
4. ![filtered job list](<Screenshot/job list filter1.jpg>)
6. ![filtered job list 2](<Screenshot/job list filter 2.jpg>)


