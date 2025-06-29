# Task Management Application

This repository contains a full-stack Task Management Application developed as part of a Full-Stack Developer Assessment. The application allows users to create, read, update, delete, and filter tasks, with a responsive frontend built using React and Bootstrap, and a backend built with Node.js, Express, and MySQL (using Sequelize). The implementation includes all required features: task list, task form with validation, status filters, task details, and state management, along with a bonus feature for task priorities.

## Project Structure

task-management-assessment/├── backend/│   ├── config/│   │   └── dbConnection.js│   ├── models/│   │   └── Task.js│   ├── routes/│   │   └── tasks.js│   ├── package.json│   ├── server.js│   └── README.md├── frontend/│   ├── public/│   │   ├── index.html│   │   └── favicon.ico│   ├── src/│   │   ├── components/│   │   │   ├── Layout.jsx│   │   │   ├── TaskList.jsx│   │   │   ├── TaskForm.jsx│   │   │   ├── TaskDetails.jsx│   │   │   └── TaskFilters.jsx│   │   ├── context/│   │   │   └── TaskContext.jsx│   │   ├── utils/│   │   │   └── api.js│   │   ├── App.jsx│   │   ├── index.jsx│   │   └── index.css│   ├── tests/│   │   ├── TaskList.test.jsx│   │   └── TaskForm.test.jsx│   ├── .env│   ├── package.json│   └── README.md└── README.md

## Features

### Frontend (React with Bootstrap)
- **Task List**: Displays tasks in a responsive grid with title, description, due date, status, and priority.
- **Task Form**: Allows creating/editing tasks with client-side validation for title (non-empty) and due date (valid, not in the past).
- **Filters**: Filter tasks by status (All, Pending, In Progress, Completed).
- **Task Details**: View full task details with options to edit or delete.
- **State Management**: Uses React Context API for global task data management.
- **Responsive Design**: Built with Bootstrap 5 for mobile and desktop compatibility.
- **Bonus Feature**: Task priorities (High, Medium, Low) included in the form and list.

### Backend (Node.js with Express and MySQL)
- **API Routes**:
  - `POST /api/tasks`: Create a new task.
  - `GET /api/tasks`: Fetch all tasks, filterable by status (`?status=pending`).
  - `GET /api/tasks/:id`: Fetch task details.
  - `PUT /api/tasks/:id`: Update a task.
  - `DELETE /api/tasks/:id`: Delete a task.
- **Database**: MySQL with a `tasks` table (columns: `id`, `taskTitle`, `taskDescription`, `taskStatus`, `taskPriority`, `taskDueDate`, `isDeleted`, `created_at`, `updated_at`).
- **Validation**: Ensures non-empty title and valid due date on the server side.

## Prerequisites
- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **MySQL**: v8 or higher
- **Git**: For cloning the repository

## Setup Instructions

### Backend Setup
1. **Navigate to the backend directory**:
   ```bash
   cd backend


Install dependencies:npm install


Configure MySQL:
Create a MySQL database (e.g., task_management).
Update backend/config/dbConnection.js with your MySQL credentials:import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('task_management', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});




Sync the database:
The Sequelize model (backend/models/Task.js) will automatically create the tasks table when the server starts.


Start the backend server:node server.js


The server runs at http://localhost:3000.



Frontend Setup

Navigate to the frontend directory:cd frontend


Install dependencies:npm install


Configure environment variables:
Create a .env file in frontend/:REACT_APP_API_URL=http://localhost:3000/api




Start the frontend server:npm start


The app will be available at http://localhost:3000.



Running Tests

Frontend Tests:cd frontend
npm test


Tests cover TaskList and TaskForm components using Jest.


Backend Tests (if implemented):cd backend
npm test


Note: Backend tests are not included in this README but can be added using Mocha/Chai.



API Documentation
Endpoints

POST /api/tasks
Body: { taskTitle: string, taskDescription: string, taskStatus: "pending" | "in_progress" | "completed", taskPriority: "low" | "medium" | "high", taskDueDate: string (YYYY-MM-DD) }
Response: 201 Created with task object or 400 Bad Request if validation fails.


GET /api/tasks
Query: ?status=pending|in_progress|completed (optional)
Response: 200 OK with array of tasks.


GET /api/tasks/:id
Response: 200 OK with task object or 404 Not Found.


PUT /api/tasks/:id
Body: Same as POST.
Response: 200 OK with updated task or 404 Not Found.


DELETE /api/tasks/:id
Response: 204 No Content or 404 Not Found.



Example Request
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"taskTitle":"Complete Assessment","taskDescription":"Finish coding","taskStatus":"pending","taskPriority":"high","taskDueDate":"2025-07-01"}'

Usage Guidelines

Access the App:
Open http://localhost:3000 in your browser.
The homepage displays the task list with filtering options.


Create a Task:
Click "Add Task" in the navbar to access the task form.
Enter title, description, status, priority, and due date (title and due date are required).


Filter Tasks:
Use the status dropdown to filter tasks by "All", "Pending", "In Progress", or "Completed".


View/Edit/Delete:
Click "View Details" on a task to see its full details.
From the details page, click "Edit" to modify or "Delete" to remove the task.



Responsive Design

The frontend uses Bootstrap 5’s grid system and components for responsiveness:
Task list displays as 1 column on mobile, 2 on medium screens, and 3 on large screens.
Navbar collapses into a hamburger menu on smaller screens.
Forms and task details are centered with a maximum width for readability.



Bonus Features

Task Priorities: Tasks can be assigned a priority (High, Medium, Low) via the task form, displayed in the task list.
Note: Priority filtering is not implemented in the UI but can be added by extending the TaskFilters component and backend GET /api/tasks endpoint with a ?priority= query parameter.

Testing

Frontend: Unit tests for TaskList and TaskForm components verify rendering and validation logic.
Run: npm test in frontend/.


Backend: Tests are not included but can be implemented using Mocha/Chai for API routes.

Notes

Ensure the backend server is running before starting the frontend to avoid API errors.
The backend assumes a MySQL database is configured and accessible.
Commit history is maintained with meaningful messages (e.g., "Add task list component", "Switch to Bootstrap for styling").
The frontend uses react-bootstrap for seamless integration with React, avoiding issues with traditional Bootstrap’s jQuery dependency.

Troubleshooting

Backend Errors: Check MySQL connection settings in dbConnection.js and ensure the database is running.
Frontend Errors: Verify REACT_APP_API_URL matches the backend URL. Check browser console for API or rendering issues.
Styling Issues: Ensure bootstrap/dist/css/bootstrap.min.css is imported in index.jsx.


