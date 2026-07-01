const App = require('./app');
const Project = require('./project');
const Todo = require('./todo');

function saveApp(app) {

    localStorage.setItem('todo-app', JSON.stringify(app));
}

function loadApp() {
    const savedData = localStorage.getItem('todo-app');

    if (!savedData) return null;

    const data = JSON.parse(savedData);

    const app = new App(false)

    data.projects.forEach(p => {
        // restore projects
        const project = new Project(p);
        
        // restore todos
        p.todos.forEach(t => {
            const todo = new Todo(t);
            project.addTodo(todo);
        })
        
        app.addProject(project);
    });

    // set active project
    app.setActiveProject(data.activeProjectId)

    return app;
}

module.exports = { saveApp, loadApp };