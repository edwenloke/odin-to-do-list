class Todo {
    constructor({title, description, dueDate, priority, id = crypto.randomUUID(), completed = false}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    update({ title, description, dueDate, priority }) {
        if (title !== undefined) this.title = title;
        if (description !== undefined) this.description = description;
        if (dueDate !== undefined) this.dueDate = dueDate;
        if (priority !== undefined) this.priority = priority;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

module.exports = Todo;