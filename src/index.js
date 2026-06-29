const App = require('./logic/app')
const Project = require('./logic/project');
const Todo = require('./logic/todo');



const app = new App();
const project = new Project('Test');
app.addProject(project);

const todo = new Todo('todo1');
project.addTodo(todo);

console.log(app.projects);
console.log(project.todos);
console.log(todo);
console.log(todo.completed);
