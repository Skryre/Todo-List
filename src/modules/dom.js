import TodoList from './TodoList'
import Project from './Project'
import Task from './Task'

export function changeBurger(x) {
    x.classList.toggle("change");
}

export function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}
