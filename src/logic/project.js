class Project {
    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.todos = [];
    }

    update({name}){
        if(name !== undefined) this.name = name;
    }

    addTodo(todo){
        this.todos.unshift(todo);
    }

    getTodo(id){
        return this.todos.find(todo => todo.id === id);
    }

    deleteTodo(id){
        const index = this.todos.findIndex(todo => todo.id === id);

        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    updateTodo(id, updates){
        const todo = this.getTodo(id);

        if (todo){
            todo.update(updates)
        }
    }

}

module.exports = Project;
