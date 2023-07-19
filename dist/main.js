/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function welcome() {
    let container = document.querySelector('.projects');
    container.innerHTML = "";

    let title = document.createElement('h1');
    title.innerHTML = "WELCOME!";

    let text = document.createElement('p');
    text.innerHTML = "Odin's TODO List Maker is a powerful and user-friendly program designed to help you stay organized and manage your tasks effectively. Named after the wise and all-knowing Norse god, Odin, this application combines simplicity with versatility to create the ultimate task management tool.<br><br> With Odin's TODO List Maker, you can effortlessly create, organize, and prioritize your to-do lists. The intuitive user interface allows you to quickly add tasks, set due dates, and add important notes or descriptions.";

    container.appendChild(title);
    container.appendChild(text)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");



const newProjectButton = document.querySelector(".new-project");
const homePage = document.querySelector('.home');
const projectDisplayButton = document.querySelector('.my-projects')

const projectList = {
    list: []
}

//!Object constructor for the projects
const projectCard = (title, description, priority, date) => {

    let tasks = [];

    return {
        title: title,
        description: description,
        priority: priority,
        date: date,
        tasks: tasks,
    }
}


function newProject() {


    function createProject() {
        const project = projectCard(inputTitle.value, inputDescription.value, inputPriority.value, inputDate.value);
        inputTitle.value = '';
        inputDescription.value = '';
        inputPriority.value = '';
        inputDate.value = '';
        projectList.list.push(project);
        console.log(projectList.list)
    }


    const container = document.querySelector('.projects');
    container.innerHTML = "";

    const header = document.createElement('h2');
    header.innerHTML = "Please enter your project details here!"

    const containerForm = document.createElement('div');
    containerForm.className = "container-project";

    const title = document.createElement('div');
    title.innerHTML = "Title";

    const inputTitle = document.createElement('input');
    inputTitle.className = "project_place";
    inputTitle.type = "text";

    const description = document.createElement('div');
    description.innerHTML = "Description";

    const inputDescription = document.createElement('textarea');
    inputDescription.className = "project_description";

    const priority = document.createElement('div');
    priority.innerHTML = "Priority"

    const inputPriority = document.createElement('select');
    inputPriority.className = "project_priority";

    const option1 = document.createElement('option');
    option1.innerHTML = "😁";
    const option2 = document.createElement('option');
    option2.innerHTML = "😄";
    const option3 = document.createElement('option');
    option3.innerHTML = "😃";
    const option4 = document.createElement('option');
    option4.innerHTML = "🙂";
    const option5 = document.createElement('option');
    option5.innerHTML = "😐";
    const option6 = document.createElement('option');
    option6.innerHTML = "☹️"
    const option7 = document.createElement('option');
    option7.innerHTML = "😨";
    const option8 = document.createElement('option');
    option8.innerHTML = "😱";

    inputPriority.appendChild(option1);
    inputPriority.appendChild(option2);
    inputPriority.appendChild(option3);
    inputPriority.appendChild(option4);
    inputPriority.appendChild(option5);
    inputPriority.appendChild(option6);
    inputPriority.appendChild(option7);
    inputPriority.appendChild(option8);

    const date = document.createElement('div');
    date.innerHTML = "Due date";

    const inputDate = document.createElement("input");
    inputDate.className = "project_date";
    inputDate.type = "date";

    const button = document.createElement("div");
    button.innerHTML = "Add the new project";

    const buttonAdd = document.createElement('button');
    buttonAdd.className = "create_project_button";
    buttonAdd.innerHTML = "Click here";

    containerForm.appendChild(title);
    containerForm.appendChild(inputTitle);
    containerForm.appendChild(description);
    containerForm.appendChild(inputDescription);
    containerForm.appendChild(priority);
    containerForm.appendChild(inputPriority);
    containerForm.appendChild(date);
    containerForm.appendChild(inputDate);
    containerForm.appendChild(button);
    containerForm.appendChild(buttonAdd);

    container.appendChild(header);
    container.appendChild(containerForm);
    buttonAdd.addEventListener('click', createProject)
}

function displayProjects() {
    const projects = document.querySelector('.projects');;
    projects.innerHTML = "";
    const headerProject = document.createElement('h2');
    headerProject.className = 'project_card_header';
    headerProject.innerHTML = "The projects will appear here";

    projects.appendChild(headerProject)

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'project_card_container'
    for (let i = 0; i < projectList.list.length; i++) {
        const card = document.createElement('div');
        card.className = "project_card"

        const projectHeader = document.createElement('div');
        projectHeader.className = "project_card_name";
        projectHeader.innerHTML = projectList.list[i].title;

        const projectDescription = document.createElement('div');
        projectDescription.className = "project_card_description";
        projectDescription.innerHTML = projectList.list[i].description;

        const test = document.createElement('div');
        test.className = "test"

        const projectPriority = document.createElement('div');
        projectPriority.className = "project_card_priority";
        projectPriority.innerHTML = `Priority: ${projectList.list[i].priority}`;

        const projectDate = document.createElement('div');
        projectDate.className = "project_card_date";
        projectDate.innerHTML = `Due date: ${projectList.list[i].date}`;

        test.appendChild(projectPriority);
        test.appendChild(projectDate);

        const commands = document.createElement("div");
        commands.className = "commands";

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.className = "delete-task";
        deleteProjectButton.innerHTML = "Delete";
        commands.appendChild(deleteProjectButton);

        const projectButton = document.createElement('button');
        projectButton.className = "button_task";
        projectButton.innerHTML = "New task";
        commands.appendChild(projectButton);

        deleteProjectButton.addEventListener('click', () => deletingProjects(i));
        projectButton.addEventListener('click', () => displayTasks(i));

        const taskZone = document.createElement('div');
        taskZone.className = "task-container";

        const taskZoneInputsPlace = document.createElement('div');
        taskZoneInputsPlace.className = "task-input";

        const taskZoneInput = document.createElement('input');
        taskZoneInput.className = "input-task";
        taskZoneInput.type = "text";
        taskZoneInputsPlace.appendChild(taskZoneInput)

        const taskZoneButton = document.createElement('button');
        taskZoneButton.className = "new-task";
        taskZoneButton.innerHTML = "Add";
        taskZoneInputsPlace.appendChild(taskZoneButton);

        taskZone.appendChild(taskZoneInputsPlace);

        const listZone = document.createElement('ol');
        listZone.className = "task-list";

        taskZone.appendChild(listZone)

        card.appendChild(projectHeader);
        card.appendChild(projectDescription);
        card.appendChild(test);
        card.appendChild(commands);
        card.appendChild(taskZone);

        cardsContainer.appendChild(card);

        projects.appendChild(cardsContainer)
    }

}

function deletingProjects(number) {
    projectList.list.splice(number, 1);
    displayProjects();
    console.log('click')
}

function displayTasks(number) {
    const projectCard = document.getElementsByClassName('project_card')[number];
    const taskZone = projectCard.querySelector('.task-container');
    const taskInput = projectCard.querySelector('.task-input');
    const taskList = taskZone.querySelector('.task-list');

    if (projectCard.classList.contains('expanded')) {
        projectCard.classList.remove('expanded');
        taskInput.classList.remove('expanded')
    } else {
        projectCard.classList.add('expanded');
        taskInput.classList.add('expanded')
    }
    taskZone.style.overflowY = 'scroll';

    console.log('click');
}

newProjectButton.addEventListener("click", newProject);
homePage.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
projectDisplayButton.addEventListener('click', displayProjects);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUNkdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw2QkFBNkI7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWxjb21lKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiV0VMQ09NRSFcIjtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gXCJPZGluJ3MgVE9ETyBMaXN0IE1ha2VyIGlzIGEgcG93ZXJmdWwgYW5kIHVzZXItZnJpZW5kbHkgcHJvZ3JhbSBkZXNpZ25lZCB0byBoZWxwIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgbWFuYWdlIHlvdXIgdGFza3MgZWZmZWN0aXZlbHkuIE5hbWVkIGFmdGVyIHRoZSB3aXNlIGFuZCBhbGwta25vd2luZyBOb3JzZSBnb2QsIE9kaW4sIHRoaXMgYXBwbGljYXRpb24gY29tYmluZXMgc2ltcGxpY2l0eSB3aXRoIHZlcnNhdGlsaXR5IHRvIGNyZWF0ZSB0aGUgdWx0aW1hdGUgdGFzayBtYW5hZ2VtZW50IHRvb2wuPGJyPjxicj4gV2l0aCBPZGluJ3MgVE9ETyBMaXN0IE1ha2VyLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBjcmVhdGUsIG9yZ2FuaXplLCBhbmQgcHJpb3JpdGl6ZSB5b3VyIHRvLWRvIGxpc3RzLiBUaGUgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlIGFsbG93cyB5b3UgdG8gcXVpY2tseSBhZGQgdGFza3MsIHNldCBkdWUgZGF0ZXMsIGFuZCBhZGQgaW1wb3J0YW50IG5vdGVzIG9yIGRlc2NyaXB0aW9ucy5cIjtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VsY29tZSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgcHJvamVjdERpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktcHJvamVjdHMnKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSB7XHJcbiAgICBsaXN0OiBbXVxyXG59XHJcblxyXG4vLyFPYmplY3QgY29uc3RydWN0b3IgZm9yIHRoZSBwcm9qZWN0c1xyXG5jb25zdCBwcm9qZWN0Q2FyZCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSA9PiB7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgIHRhc2tzOiB0YXNrcyxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDYXJkKGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUsIGlucHV0UHJpb3JpdHkudmFsdWUsIGlucHV0RGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dFByaW9yaXR5LnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXREYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgcHJvamVjdExpc3QubGlzdC5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0Lmxpc3QpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHByb2plY3QgZGV0YWlscyBoZXJlIVwiXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyRm9ybS5jbGFzc05hbWUgPSBcImNvbnRhaW5lci1wcm9qZWN0XCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGl0bGVcIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0VGl0bGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X3BsYWNlXCI7XHJcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3RfZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiXHJcblxyXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5jbGFzc05hbWUgPSBcInByb2plY3RfcHJpb3JpdHlcIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24xLmlubmVySFRNTCA9IFwi8J+YgVwiO1xyXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMi5pbm5lckhUTUwgPSBcIvCfmIRcIjtcclxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjMuaW5uZXJIVE1MID0gXCLwn5iDXCI7XHJcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb240LmlubmVySFRNTCA9IFwi8J+ZglwiO1xyXG4gICAgY29uc3Qgb3B0aW9uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNS5pbm5lckhUTUwgPSBcIvCfmJBcIjtcclxuICAgIGNvbnN0IG9wdGlvbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjYuaW5uZXJIVE1MID0gXCLimLnvuI9cIlxyXG4gICAgY29uc3Qgb3B0aW9uNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNy5pbm5lckhUTUwgPSBcIvCfmKhcIjtcclxuICAgIGNvbnN0IG9wdGlvbjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjguaW5uZXJIVE1MID0gXCLwn5ixXCI7XHJcblxyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24xKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMik7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb240KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNSk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjYpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb243KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uOCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXREYXRlLmNsYXNzTmFtZSA9IFwicHJvamVjdF9kYXRlXCI7XHJcbiAgICBpbnB1dERhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBZGQgdGhlIG5ldyBwcm9qZWN0XCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuY2xhc3NOYW1lID0gXCJjcmVhdGVfcHJvamVjdF9idXR0b25cIjtcclxuICAgIGJ1dHRvbkFkZC5pbm5lckhUTUwgPSBcIkNsaWNrIGhlcmVcIjtcclxuXHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckZvcm0pO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdClcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTs7XHJcbiAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgaGVhZGVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkZXJQcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0X2NhcmRfaGVhZGVyJztcclxuICAgIGhlYWRlclByb2plY3QuaW5uZXJIVE1MID0gXCJUaGUgcHJvamVjdHMgd2lsbCBhcHBlYXIgaGVyZVwiO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGhlYWRlclByb2plY3QpXHJcblxyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0X2NhcmRfY29udGFpbmVyJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRcIlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9uYW1lXCI7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdC5saXN0W2ldLnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGVzY3JpcHRpb25cIjtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdExpc3QubGlzdFtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRlc3QuY2xhc3NOYW1lID0gXCJ0ZXN0XCJcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX3ByaW9yaXR5XCI7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLnByaW9yaXR5fWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGF0ZVwiO1xyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLmRhdGV9YDtcclxuXHJcbiAgICAgICAgdGVzdC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG4gICAgICAgIHRlc3QuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tYW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29tbWFuZHMuY2xhc3NOYW1lID0gXCJjb21tYW5kc1wiO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrXCI7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgIGNvbW1hbmRzLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbl90YXNrXCI7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIk5ldyB0YXNrXCI7XHJcbiAgICAgICAgY29tbWFuZHMuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGluZ1Byb2plY3RzKGkpKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVRhc2tzKGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrWm9uZS5jbGFzc05hbWUgPSBcInRhc2stY29udGFpbmVyXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tab25lSW5wdXRzUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrWm9uZUlucHV0c1BsYWNlLmNsYXNzTmFtZSA9IFwidGFzay1pbnB1dFwiO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrWm9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0YXNrWm9uZUlucHV0LmNsYXNzTmFtZSA9IFwiaW5wdXQtdGFza1wiO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXRzUGxhY2UuYXBwZW5kQ2hpbGQodGFza1pvbmVJbnB1dClcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0YXNrWm9uZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm5ldy10YXNrXCI7XHJcbiAgICAgICAgdGFza1pvbmVCdXR0b24uaW5uZXJIVE1MID0gXCJBZGRcIjtcclxuICAgICAgICB0YXNrWm9uZUlucHV0c1BsYWNlLmFwcGVuZENoaWxkKHRhc2tab25lQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGFza1pvbmUuYXBwZW5kQ2hpbGQodGFza1pvbmVJbnB1dHNQbGFjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3Rab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcclxuICAgICAgICBsaXN0Wm9uZS5jbGFzc05hbWUgPSBcInRhc2stbGlzdFwiO1xyXG5cclxuICAgICAgICB0YXNrWm9uZS5hcHBlbmRDaGlsZChsaXN0Wm9uZSlcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXN0KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbW1hbmRzKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tab25lKTtcclxuXHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRpbmdQcm9qZWN0cyhudW1iZXIpIHtcclxuICAgIHByb2plY3RMaXN0Lmxpc3Quc3BsaWNlKG51bWJlciwgMSk7XHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhudW1iZXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9jYXJkJylbbnVtYmVyXTtcclxuICAgIGNvbnN0IHRhc2tab25lID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpO1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSB0YXNrWm9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XHJcblxyXG4gICAgaWYgKHByb2plY3RDYXJkLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgdGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKVxyXG4gICAgfVxyXG4gICAgdGFza1pvbmUuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XHJcbn1cclxuXHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3QpO1xyXG5ob21lUGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2VsY29tZSk7XHJcbnByb2plY3REaXNwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3RzKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9