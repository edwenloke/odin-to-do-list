class Project {
    constructor({name, isDefault = false, id = crypto.randomUUID()}){
        this.id = id;
        this.name = name;
        this.isDefault = isDefault;
        this.todos = [];
    }

    rename(name){
        this.name = name;
    }

    addTodo(todo){
        this.todos.push(todo);
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

}

module.exports = Project;
