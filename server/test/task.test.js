// test/task.test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import { sequelize } from '../config/dbConnection.js';
import app from '../app.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Task API', () => {
    let createdTaskId;
    let testServer;

    before(async () => {
        // Sync database and start test server
        await sequelize.sync({ force: true });
        testServer = app.listen(5001); // Use different port for tests
    });

    after(async () => {
        // Close server and database connection
        await testServer.close();
        await sequelize.close();
    });

    describe('POST /api/tasks', () => {
        it('should create a new task', async () => {
            const testTask = {
                taskTitle: 'Test Task',
                taskDescription: 'Testing the POST endpoint',
                taskStatus: 'pending',
                taskPriority: 'high',
                taskDueDate: '2025-12-31'
            };

            const res = await chai.request(app)
                .post('/api/tasks')
                .send(testTask);

            expect(res).to.have.status(201);
            expect(res.body).to.include({
                taskTitle: testTask.taskTitle,
                taskStatus: testTask.taskStatus,
                taskPriority: testTask.taskPriority
            });
            expect(res.body).to.have.property('taskId');
            expect(res.body.taskDueDate).to.exist;

            createdTaskId = res.body.taskId;
        });

        it('should return 400 for missing required fields', async () => {
            const res = await chai.request(app)
                .post('/api/tasks')
                .send({
                    taskDescription: 'Missing title and due date'
                });

            expect(res).to.have.status(400);
            expect(res.body).to.have.property('message');
        });

        it('should return 400 for invalid status', async () => {
            const res = await chai.request(app)
                .post('/api/tasks')
                .send({
                    taskTitle: 'Invalid Task',
                    taskStatus: 'invalid_status',
                    taskDueDate: '2025-12-31'
                });

            expect(res).to.have.status(400);
        });
    });

    describe('GET /api/tasks', () => {
        it('should fetch all tasks', async () => {
            const res = await chai.request(app)
                .get('/api/tasks');

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.greaterThan(0);
            expect(res.body[0]).to.have.all.keys([
                'taskId',
                'taskTitle',
                'taskDescription',
                'taskStatus',
                'taskPriority',
                'taskDueDate',
                'createdAt',
                'updatedAt'
            ]);
        });

        it('should filter tasks by status', async () => {
            const res = await chai.request(app)
                .get('/api/tasks?status=pending');

            expect(res).to.have.status(200);
            expect(res.body.every(task => task.taskStatus === 'pending')).to.be.true;
        });
    });

    describe('GET /api/tasks/:id', () => {
        it('should fetch task by ID', async () => {
            const res = await chai.request(app)
                .get(`/api/tasks/${createdTaskId}`);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('taskId', createdTaskId);
        });

        it('should return 404 for non-existent task', async () => {
            const res = await chai.request(app)
                .get('/api/tasks/999999');

            expect(res).to.have.status(404);
        });
    });

    describe('PUT /api/tasks/:id', () => {
        it('should update the task', async () => {
            const updates = {
                taskTitle: 'Updated Task Title',
                taskStatus: 'completed'
            };

            const res = await chai.request(app)
                .put(`/api/tasks/${createdTaskId}`)
                .send(updates);

            expect(res).to.have.status(200);
            expect(res.body).to.include(updates);
        });

        it('should return 404 for non-existent task', async () => {
            const res = await chai.request(app)
                .put('/api/tasks/999999')
                .send({ taskTitle: 'Update' });

            expect(res).to.have.status(404);
        });
    });

    describe('DELETE /api/tasks/:id', () => {
        it('should soft delete the task', async () => {
            const res = await chai.request(app)
                .delete(`/api/tasks/${createdTaskId}`);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Task deleted (soft delete)');
        });

        it('should not return deleted task in GET /api/tasks', async () => {
            const res = await chai.request(app)
                .get('/api/tasks');

            const deletedTask = res.body.find(t => t.taskId === createdTaskId);
            expect(deletedTask).to.be.undefined;
        });

        it('should return 404 when deleting already deleted task', async () => {
            const res = await chai.request(app)
                .delete(`/api/tasks/${createdTaskId}`);

            expect(res).to.have.status(404);
        });
    });
});