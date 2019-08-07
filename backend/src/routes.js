const { Router } = require('express');
const routes = new Router();

const auth = require('./app/middlewares/auth');
const UserController = require('./app/controllers/UserController');
const TodoController = require('./app/controllers/TodoController');
const SessionController = require('./app/controllers/SessionController');

routes.post('/users', UserController.store);

routes.post('/users/auth', SessionController.store);

routes.use(auth);

routes.get('/users/:user/todo', TodoController.index);
routes.post('/users/:user/todo', TodoController.store);
routes.put('/users/:user/todo/:todo', TodoController.update);
routes.delete('/users/:user/todo/:todo', TodoController.delete);

module.exports = routes;
