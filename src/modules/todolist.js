export default class TodoList {

    constructor() {
        this.projects = []
    }

    setProjects (projects) {
        this.projects = projects
    };
    
    returnProjects() {
        return this.projects
    };
    
    returnProject(projectName) {
        return this.projects.find((project) => project.returnTitle() === projectName)
    }
    
    contains(projectName) {
        return this.projects.some((project) => project.returnTitle() === projectName)
    }
    
    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
        return this.projects.push(newProject)
    }
    
    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }

}