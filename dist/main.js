/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
class Projects {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    setTitle(title) {
        this.title = title
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }
    
    getTitle() {
        return this.title
    }
    
    getDate() {
        return this.dueDate
    }

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle)
      }
    
    contains(taskTitle) {
        return this.tasks.some((task) => task.getTitle() === taskTitle)
    }
    
    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.Title)) 
        return this.tasks.push(newTask)
    }
    
    deleteTask(taskTitle) {
        const taskDelete = this.tasks.find(
          (task) => task.returnTitle() === taskTitle
        )
        this.tasks.splice(this.tasks.indexOf(taskDelete), 1)
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, dueDate, note, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.note = note;
        this.priority = priority;
    }
    setTitle(title) {
        this.title = title
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    setNote(note){
        this.note = note
    }

    setPriority(priority){
        this.priority = priority
    }

    returnTitle() {
        return this.title
    }
    
    returnDate() {
        return this.dueDate
    }

    returnNotes() {
        return this.note
    }

    returnPriority() {
        return this.priority
    }
    
}

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todolist */ "./src/modules/todolist.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");




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
    const project = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName)
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

let abc = new _modules_task__WEBPACK_IMPORTED_MODULE_2__["default"]("abc", "abc", "abc", "abc")

let dudu = new _modules_task__WEBPACK_IMPORTED_MODULE_2__["default"]("dudu", "dudu", "dudu", "dudu")

let cba = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"]("cba")

let ruru = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"]("ruru")

let ghjh = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"]("ghjh")

let theTodo = new _modules_todolist__WEBPACK_IMPORTED_MODULE_0__["default"]("chachaslide")

cba.addTask(abc)

cba.addTask(dudu)

theTodo.addProject(cba)

theTodo.addProject(ruru)

theTodo.addProject(ghjh)

createNewProject("broly")

renderProject()

bro(theTodo)

bro(cba)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDRjtBQUNOOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHFEQUFJOztBQUVsQixlQUFlLHFEQUFJOztBQUVuQixjQUFjLHdEQUFPOztBQUVyQixlQUFlLHdEQUFPOztBQUV0QixlQUFlLHdEQUFPOztBQUV0QixrQkFBa0IseURBQVE7O0FBRTFCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG5cbiAgICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cbiAgICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG4gICAgXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKVxuICAgICAgfVxuICAgIFxuICAgIGNvbnRhaW5zKHRhc2tUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSlcbiAgICB9XG4gICAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gbmV3VGFzay5UaXRsZSkpIFxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSB0aGlzLnRhc2tzLmZpbmQoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2sucmV0dXJuVGl0bGUoKSA9PT0gdGFza1RpdGxlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2tEZWxldGUpLCAxKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0Tm90ZShub3RlKXtcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG4gICAgcmV0dXJuVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICAgIFxuICAgIHJldHVybkRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG5cbiAgICByZXR1cm5Ob3RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90ZVxuICAgIH1cblxuICAgIHJldHVyblByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMgKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm5Qcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QucmV0dXJuVGl0bGUoKSA9PT0gcHJvamVjdE5hbWUpXG4gICAgfVxuICAgIFxuICAgIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QucmV0dXJuVGl0bGUoKSA9PT0gcHJvamVjdE5hbWUpXG4gICAgfVxuICAgIFxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSkpXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vbW9kdWxlcy90b2RvbGlzdCdcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2snXG5cbmNvbnN0IG5hdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdjJcIilcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpXG5jb25zdCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJylcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcbn0pO1xuXG5jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBuZXdUaGVtZSA9IHJvb3QuY2xhc3NOYW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICAgIHJvb3QuY2xhc3NOYW1lID0gbmV3VGhlbWU7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCAoeCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB4XG4gICAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT0gJycpIHJldHVybjtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgdGhlVG9kby5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgcmVuZGVyUHJvamVjdCgpXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoKXtcbiAgICB0aGVUb2RvLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdE9mUHJvamVjdFwiKVxuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QudGl0bGVcbiAgICAgICAgbmF2Mi5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJybyh4KXtcbiAgICBjb25zb2xlLmxvZyh4KVxufVxuXG5sZXQgYWJjID0gbmV3IFRhc2soXCJhYmNcIiwgXCJhYmNcIiwgXCJhYmNcIiwgXCJhYmNcIilcblxubGV0IGR1ZHUgPSBuZXcgVGFzayhcImR1ZHVcIiwgXCJkdWR1XCIsIFwiZHVkdVwiLCBcImR1ZHVcIilcblxubGV0IGNiYSA9IG5ldyBQcm9qZWN0KFwiY2JhXCIpXG5cbmxldCBydXJ1ID0gbmV3IFByb2plY3QoXCJydXJ1XCIpXG5cbmxldCBnaGpoID0gbmV3IFByb2plY3QoXCJnaGpoXCIpXG5cbmxldCB0aGVUb2RvID0gbmV3IFRvZG9MaXN0KFwiY2hhY2hhc2xpZGVcIilcblxuY2JhLmFkZFRhc2soYWJjKVxuXG5jYmEuYWRkVGFzayhkdWR1KVxuXG50aGVUb2RvLmFkZFByb2plY3QoY2JhKVxuXG50aGVUb2RvLmFkZFByb2plY3QocnVydSlcblxudGhlVG9kby5hZGRQcm9qZWN0KGdoamgpXG5cbmNyZWF0ZU5ld1Byb2plY3QoXCJicm9seVwiKVxuXG5yZW5kZXJQcm9qZWN0KClcblxuYnJvKHRoZVRvZG8pXG5cbmJybyhjYmEpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9