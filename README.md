# 📝 Task Management Application

A full-stack web application that allows users to manage tasks efficiently. Users can create, edit, delete (soft delete), and filter tasks based on status, priority, and search input. Designed with a clean UI using **React (ES6)** and **Bootstrap**, and powered by **Node.js**, **Express**, and **MySQL** on the backend.

---

## 📌 What is this project?

This is a **Task Management System** where you can:

- Add tasks with details like title, description, status, priority, and due date
- Update or delete tasks (soft delete)
- Filter tasks by **status**, **priority**, and **search**
- Use an **offcanvas form** for adding/updating tasks
- See delete confirmations via a **modal**
- Everything is responsive and built using **pure Bootstrap** without any external UI libraries like React-Bootstrap

---

## 🚀 How to Run the Project

### 📁 Step 1: Clone the repository

```bash
git clone https://github.com/<your-username>/task_management_assessment.git
cd task_management_assessment
⚙️ Step 2: Setup the Backend
bash
Copy
Edit
cd server
npm install
🔐 Create a .env file inside /server:
env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=task_manager
PORT=5000
⚡ Run migrations:
bash
Copy
Edit
npx sequelize db:create
npx sequelize db:migrate
▶ Start the server:
bash
Copy
Edit
npm start
💻 Step 3: Setup the Frontend
bash
Copy
Edit
cd ../client
npm install
▶ Start the React app:
bash
Copy
Edit
npm start
App will run at: http://localhost:3000

🛠️ Tech Stack Used
Frontend	Backend	Database
React.js (ES6)	Node.js + Express	MySQL
Context API	Sequelize ORM	Sequelize CLI
Axios	CORS, dotenv	
Bootstrap CSS	Jest (optional)	

📚 Folder Structure
graphql
Copy
Edit
task_management_assessment/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── context/     # Context API for tasks
│   │   ├── pages/       # Route-level components
│   │   ├── utils/       # API helpers
│   │   └── App.js
│   └── package.json
├── server/              # Node backend
│   ├── config/          # DB config
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	List all tasks
GET	/api/tasks/:id	Get task by ID
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update task by ID
DELETE	/api/tasks/:id	Soft delete a task

🧪 Backend Testing (Optional)
If you added Jest tests in the /server folder, run:

bash
Copy
Edit
npm test
📸 Screenshots
Add screenshots here (optional):

scss
Copy
Edit
![](screenshots/dashboard.png)
![](screenshots/form.png)
![](screenshots/modal.png)
👨‍💻 Author
Senthilkumar Srinivasan
📧 senthilhume4214@gmail.com
🔗 LinkedIn

📄 License
This project is licensed under the MIT License.
