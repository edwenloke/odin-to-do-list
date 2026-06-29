class Project {
    constructor(name, isDefault = false){
        this.id = crypto.randomUUID();
        this.name = name;
        this.isDefault = isDefault;
        this.todos = [];
    }

    rename(name){
        this.name = name;
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

}

module.exports = Project;
