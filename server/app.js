import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

export default app;
