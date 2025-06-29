🗂️ Task Management Application
A full-stack Task Management App built with React (ES6), Bootstrap (no React-Bootstrap) on the frontend and Node.js + Express + MySQL on the backend.

📌 Features include task creation, editing, deletion (soft delete), status filtering, priority filtering, search, offcanvas form, and more.

🛠️ Tech Stack
Frontend	Backend	Database
React.js (ES6)	Node.js + Express	MySQL
Bootstrap (no CSS overrides)	Sequelize ORM	Sequelize Migrations
Context API	CORS, body-parser	dotenv
Axios	Jest (optional for testing)	

✨ Features
✅ Core Functionalities:
List tasks with filters:

By Status: All, Pending, In Progress, Completed

By Priority: Low, Medium, High

By Search

Add / Edit Task using Offcanvas Panel

Delete Task with confirmation modal

Form validation with error messages on onBlur

Fully responsive & clean Bootstrap UI

React Context API for state management

Soft delete logic handled in backend

🔧 Project Structure
csharp
Copy
Edit
task_management_assessment/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # UI components (offcanvas, modals, etc.)
│   │   ├── context/     # TaskContext.js
│   │   ├── pages/       # Page-level components
│   │   ├── utils/       # API functions (taskApi.js)
│   │   └── App.js
│   ├── package.json
│   └── ...
├── server/              # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/task_management_assessment.git
cd task_management_assessment
2. Backend Setup (/server)
bash
Copy
Edit
cd server
npm install
🔐 Create .env file
ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
PORT=5000
🔄 Setup DB
bash
Copy
Edit
npx sequelize db:create
npx sequelize db:migrate
▶ Start the backend
bash
Copy
Edit
npm start
3. Frontend Setup (/client or /frontend)
bash
Copy
Edit
cd ../client
npm install
▶ Start the frontend
bash
Copy
Edit
npm start
App runs on http://localhost:3000

📸 Screenshots
Home View	Offcanvas Form	Delete Modal

🧪 Testing (Optional)
Run Jest for Backend
bash
Copy
Edit
npm test
📁 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	List all tasks
GET	/api/tasks/:id	Get task by ID
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Soft delete task

📄 License
This project is licensed under the MIT License.

🙋 Author
Senthilkumar Srinivasan
📧 senthilhume4214@gmail.com
🔗 LinkedIn
