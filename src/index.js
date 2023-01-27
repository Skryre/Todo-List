import TodoList from './modules/todolist'
import Project from './modules/project'
import Task from './modules/task'

const nav2 = document.querySelector(".nav2")
const burger = document.querySelector(".burger")
const color = document.querySelector('input[type=checkbox]')

burger.addEventListener("click", ()=> {
    burger.classList.toggle("change");
});

color.addEventListener("click", ()=> {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
});

function createNewProject (x){
    const projectName = x
    if (projectName == null || projectName == '') return;
    const project = new Project(projectName)
    theTodo.addProject(project)
    renderProject()
}

function renderProject(){
    theTodo.projects.forEach(project =>{
        const element = document.createElement('li')
        element.classList.add("listOfProject")
        element.innerText = project.title
        nav2.appendChild(element)
    })
}

function bro(x){
    console.log(x)
}

let abc = new Task("abc", "abc", "abc", "abc")

let dudu = new Task("dudu", "dudu", "dudu", "dudu")

let cba = new Project("cba")

let ruru = new Project("ruru")

let ghjh = new Project("ghjh")

let theTodo = new TodoList("chachaslide")

cba.addTask(abc)

cba.addTask(dudu)

theTodo.addProject(cba)

theTodo.addProject(ruru)

theTodo.addProject(ghjh)

createNewProject("broly")

renderProject()

bro(theTodo)

bro(cba)