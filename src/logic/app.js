const Project = require('./project')

class App {
    constructor() {
        this.projects = [];
        this.activeProjectId = null;

        // create default project
        const defaultProject = new Project('Default', true);
        this.addProject(defaultProject);
        this.setActiveProject(defaultProject.id)
    }

    getProject(id) {
        return this.projects.find(project => project.id === id);
    }

    addProject(project) {
        this.projects.splice(1, 0, project);
    }

    deleteProject(id) {
        const index = this.projects.findIndex(project => project.id === id)
        if (index === -1) return;

        const project = this.projects[index];
        if (project.isDefault) return;

        this.projects.splice(index, 1)
    }

    getActiveProject() {
        return this.getProject(this.activeProjectId);
    }

    setActiveProject(id) {
        const project = this.getProject(id);
        if (!project) return;
        
        this.activeProjectId = id;

    }

}

module.exports = App;
