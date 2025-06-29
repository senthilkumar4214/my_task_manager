📘 Project Documentation – Task Management Application
🧾 Overview
This is a full-stack Task Management Application that allows users to:

Create, update, delete (soft delete) tasks

Filter by status and priority

Search tasks by title

Use responsive UI with Bootstrap

Perform CRUD operations via RESTful APIs

⚙️ Setup Instructions
1️⃣ Clone the Project
bash
Copy
Edit
git clone https://github.com/<your-username>/task_management_assessment.git
cd task_management_assessment
2️⃣ Backend Setup (/server)
bash
Copy
Edit
cd server
npm install
Create a .env file in the root of /server:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=task_manager
PORT=5000
Run DB setup:

bash
Copy
Edit
npx sequelize db:create
npx sequelize db:migrate
Start backend server:

bash
Copy
Edit
npm start
3️⃣ Frontend Setup (/client or /frontend)
bash
Copy
Edit
cd ../client
npm install
npm start
The frontend will be available at: http://localhost:3000

📡 API Endpoints
Base URL: http://localhost:5000/api/tasks

Method	Endpoint	Description
GET	/tasks	Fetch all tasks
GET	/tasks/:id	Get task by ID
POST	/tasks	Create a new task
PUT	/tasks/:id	Update task by ID
DELETE	/tasks/:id	Soft delete a task

Request Body (POST/PUT)
json
Copy
Edit
{
  "taskTitle": "Sample Task",
  "taskDescription": "Description of task",
  "taskStatus": "pending",         // or "in_progress", "completed"
  "taskPriority": "medium",        // or "low", "high"
  "taskDueDate": "2025-07-01"
}
Sample Response
json
Copy
Edit
{
  "taskId": 1,
  "taskTitle": "Sample Task",
  "taskDescription": "Details...",
  "taskStatus": "pending",
  "taskPriority": "medium",
  "taskDueDate": "2025-07-01"
}
🧩 Features
✅ Functional Highlights
Responsive layout (Bootstrap)

Task creation/edit form in offcanvas

Confirmation modal before delete

Tasks filtered by:

Status: All, Pending, In Progress, Completed

Priority: Low, Medium, High

Search: by title

🔍 Filter Behavior
Tabs: Filter by task status

Dropdown: Filter by priority

Search Input: Filters task titles

All filters can work together

🔐 Validation Rules
All fields required

taskDueDate: must be a valid date

taskTitle and taskDescription: cannot be empty

Form validates on blur and submit

📁 Folder Structure
bash
Copy
Edit
task_management_assessment/
├── client/                # React frontend
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── utils/
│   └── App.js
├── server/                # Express backend
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
👨‍💻 Author
Senthilkumar Srinivasan
📧 senthilhume4214@gmail.com
🔗 LinkedIn
