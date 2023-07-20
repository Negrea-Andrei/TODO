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
        projectButton.innerHTML = "See task";
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
        taskZoneButton.addEventListener('click', () => displayTasksList(i))

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
}

function deletingTasks(index, number) {
    projectList.list[number].tasks.splice(index, 1);
    displayTasksList(number);
}

function strikeTrough(index, number) {
    const taskNameElement = document.querySelectorAll('.task-name')[index];
    taskNameElement.classList.toggle('striketrough');
    displayTasksList(number);
}

function displayTasksList(number) {
    const projectCard = document.getElementsByClassName('project_card')[number];
    const taskZone = projectCard.querySelector('.task-container');
    const taskInputField = projectCard.querySelector('.input-task');
    const taskList = taskZone.querySelector('.task-list');

    taskList.classList.add('expanded')
    taskList.innerHTML = '';

    if(taskInputField.value != '') {
        projectList.list[number].tasks.push(taskInputField.value);
        taskInputField.value = ''
    }

    
    for(let i = 0; i < projectList.list[number].tasks.length; i++){
        
        const taskCard = document.createElement('li');
        taskCard.className = 'element';
        
        const task = document.createElement('div');
        task.className = "task-name";
        task.innerHTML = projectList.list[number].tasks[i];

        const buttons = document.createElement('div');

        const done = document.createElement('button');
        done.innerHTML = "Done";
        done.addEventListener('click', () => strikeTrough(i, number) )

        const del = document.createElement('button');
        del.innerHTML = "Delete";
        del.addEventListener('click', () => deletingTasks(i, number))

        buttons.appendChild(done);
        buttons.appendChild(del);

        taskCard.appendChild(task);
        taskCard.appendChild(buttons);

        taskList.appendChild(taskCard);
    }
    
    console.log(projectList.list[number].tasks)    
}

newProjectButton.addEventListener("click", newProject);
homePage.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
projectDisplayButton.addEventListener('click', displayProjects);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWxjb21lKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiV0VMQ09NRSFcIjtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gXCJPZGluJ3MgVE9ETyBMaXN0IE1ha2VyIGlzIGEgcG93ZXJmdWwgYW5kIHVzZXItZnJpZW5kbHkgcHJvZ3JhbSBkZXNpZ25lZCB0byBoZWxwIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgbWFuYWdlIHlvdXIgdGFza3MgZWZmZWN0aXZlbHkuIE5hbWVkIGFmdGVyIHRoZSB3aXNlIGFuZCBhbGwta25vd2luZyBOb3JzZSBnb2QsIE9kaW4sIHRoaXMgYXBwbGljYXRpb24gY29tYmluZXMgc2ltcGxpY2l0eSB3aXRoIHZlcnNhdGlsaXR5IHRvIGNyZWF0ZSB0aGUgdWx0aW1hdGUgdGFzayBtYW5hZ2VtZW50IHRvb2wuPGJyPjxicj4gV2l0aCBPZGluJ3MgVE9ETyBMaXN0IE1ha2VyLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBjcmVhdGUsIG9yZ2FuaXplLCBhbmQgcHJpb3JpdGl6ZSB5b3VyIHRvLWRvIGxpc3RzLiBUaGUgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlIGFsbG93cyB5b3UgdG8gcXVpY2tseSBhZGQgdGFza3MsIHNldCBkdWUgZGF0ZXMsIGFuZCBhZGQgaW1wb3J0YW50IG5vdGVzIG9yIGRlc2NyaXB0aW9ucy5cIjtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VsY29tZSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgcHJvamVjdERpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktcHJvamVjdHMnKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSB7XHJcbiAgICBsaXN0OiBbXVxyXG59XHJcblxyXG4vLyFPYmplY3QgY29uc3RydWN0b3IgZm9yIHRoZSBwcm9qZWN0c1xyXG5jb25zdCBwcm9qZWN0Q2FyZCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSA9PiB7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgIHRhc2tzOiB0YXNrcyxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDYXJkKGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUsIGlucHV0UHJpb3JpdHkudmFsdWUsIGlucHV0RGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dFByaW9yaXR5LnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXREYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgcHJvamVjdExpc3QubGlzdC5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwcm9qZWN0IGRldGFpbHMgaGVyZSFcIlxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lckZvcm0uY2xhc3NOYW1lID0gXCJjb250YWluZXItcHJvamVjdFwiO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRpdGxlXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdF9wbGFjZVwiO1xyXG4gICAgaW5wdXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0X2Rlc2NyaXB0aW9uXCI7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIlxyXG5cclxuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGlucHV0UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcm9qZWN0X3ByaW9yaXR5XCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMS5pbm5lckhUTUwgPSBcIvCfmIFcIjtcclxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjIuaW5uZXJIVE1MID0gXCLwn5iEXCI7XHJcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24zLmlubmVySFRNTCA9IFwi8J+Yg1wiO1xyXG4gICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNC5pbm5lckhUTUwgPSBcIvCfmYJcIjtcclxuICAgIGNvbnN0IG9wdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjUuaW5uZXJIVE1MID0gXCLwn5iQXCI7XHJcbiAgICBjb25zdCBvcHRpb242ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb242LmlubmVySFRNTCA9IFwi4pi577iPXCJcclxuICAgIGNvbnN0IG9wdGlvbjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjcuaW5uZXJIVE1MID0gXCLwn5ioXCI7XHJcbiAgICBjb25zdCBvcHRpb244ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb244LmlubmVySFRNTCA9IFwi8J+YsVwiO1xyXG5cclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNCk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjUpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb242KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGUuaW5uZXJIVE1MID0gXCJEdWUgZGF0ZVwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0RGF0ZS5jbGFzc05hbWUgPSBcInByb2plY3RfZGF0ZVwiO1xyXG4gICAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIHRoZSBuZXcgcHJvamVjdFwiO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmNsYXNzTmFtZSA9IFwiY3JlYXRlX3Byb2plY3RfYnV0dG9uXCI7XHJcbiAgICBidXR0b25BZGQuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlXCI7XHJcblxyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJGb3JtKTtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7O1xyXG4gICAgcHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IGhlYWRlclByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyUHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdF9jYXJkX2hlYWRlcic7XHJcbiAgICBoZWFkZXJQcm9qZWN0LmlubmVySFRNTCA9IFwiVGhlIHByb2plY3RzIHdpbGwgYXBwZWFyIGhlcmVcIjtcclxuXHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChoZWFkZXJQcm9qZWN0KVxyXG5cclxuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdF9jYXJkX2NvbnRhaW5lcidcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkXCJcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfbmFtZVwiO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdExpc3QubGlzdFtpXS50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX2Rlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IHByb2plY3RMaXN0Lmxpc3RbaV0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXN0LmNsYXNzTmFtZSA9IFwidGVzdFwiXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9wcmlvcml0eVwiO1xyXG4gICAgICAgIHByb2plY3RQcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6ICR7cHJvamVjdExpc3QubGlzdFtpXS5wcmlvcml0eX1gO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3REYXRlLmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX2RhdGVcIjtcclxuICAgICAgICBwcm9qZWN0RGF0ZS5pbm5lckhUTUwgPSBgRHVlIGRhdGU6ICR7cHJvamVjdExpc3QubGlzdFtpXS5kYXRlfWA7XHJcblxyXG4gICAgICAgIHRlc3QuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5KTtcclxuICAgICAgICB0ZXN0LmFwcGVuZENoaWxkKHByb2plY3REYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tbWFuZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbW1hbmRzLmNsYXNzTmFtZSA9IFwiY29tbWFuZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGUtdGFza1wiO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcclxuICAgICAgICBjb21tYW5kcy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJidXR0b25fdGFza1wiO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gXCJTZWUgdGFza1wiO1xyXG4gICAgICAgIGNvbW1hbmRzLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRpbmdQcm9qZWN0cyhpKSk7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlUYXNrcyhpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza1pvbmUuY2xhc3NOYW1lID0gXCJ0YXNrLWNvbnRhaW5lclwiO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrWm9uZUlucHV0c1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza1pvbmVJbnB1dHNQbGFjZS5jbGFzc05hbWUgPSBcInRhc2staW5wdXRcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGFza1pvbmVJbnB1dC5jbGFzc05hbWUgPSBcImlucHV0LXRhc2tcIjtcclxuICAgICAgICB0YXNrWm9uZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICB0YXNrWm9uZUlucHV0c1BsYWNlLmFwcGVuZENoaWxkKHRhc2tab25lSW5wdXQpXHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tab25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdGFza1pvbmVCdXR0b24uY2xhc3NOYW1lID0gXCJuZXctdGFza1wiO1xyXG4gICAgICAgIHRhc2tab25lQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XHJcbiAgICAgICAgdGFza1pvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5VGFza3NMaXN0KGkpKVxyXG5cclxuICAgICAgICB0YXNrWm9uZUlucHV0c1BsYWNlLmFwcGVuZENoaWxkKHRhc2tab25lQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGFza1pvbmUuYXBwZW5kQ2hpbGQodGFza1pvbmVJbnB1dHNQbGFjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3Rab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcclxuICAgICAgICBsaXN0Wm9uZS5jbGFzc05hbWUgPSBcInRhc2stbGlzdFwiO1xyXG5cclxuICAgICAgICB0YXNrWm9uZS5hcHBlbmRDaGlsZChsaXN0Wm9uZSlcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXN0KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbW1hbmRzKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tab25lKTtcclxuXHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRpbmdQcm9qZWN0cyhudW1iZXIpIHtcclxuICAgIHByb2plY3RMaXN0Lmxpc3Quc3BsaWNlKG51bWJlciwgMSk7XHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKG51bWJlcikge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0X2NhcmQnKVtudW1iZXJdO1xyXG4gICAgY29uc3QgdGFza1pvbmUgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IHRhc2tab25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcclxuXHJcbiAgICBpZiAocHJvamVjdENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0aW5nVGFza3MoaW5kZXgsIG51bWJlcikge1xyXG4gICAgcHJvamVjdExpc3QubGlzdFtudW1iZXJdLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBkaXNwbGF5VGFza3NMaXN0KG51bWJlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmlrZVRyb3VnaChpbmRleCwgbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0YXNrTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1uYW1lJylbaW5kZXhdO1xyXG4gICAgdGFza05hbWVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3N0cmlrZXRyb3VnaCcpO1xyXG4gICAgZGlzcGxheVRhc2tzTGlzdChudW1iZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NMaXN0KG51bWJlcikge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0X2NhcmQnKVtudW1iZXJdO1xyXG4gICAgY29uc3QgdGFza1pvbmUgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHRhc2tJbnB1dEZpZWxkID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignLmlucHV0LXRhc2snKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza1pvbmUucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xyXG5cclxuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJylcclxuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmKHRhc2tJbnB1dEZpZWxkLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFtudW1iZXJdLnRhc2tzLnB1c2godGFza0lucHV0RmllbGQudmFsdWUpO1xyXG4gICAgICAgIHRhc2tJbnB1dEZpZWxkLnZhbHVlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5saXN0W251bWJlcl0udGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgPSAnZWxlbWVudCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0YXNrLW5hbWVcIjtcclxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IHByb2plY3RMaXN0Lmxpc3RbbnVtYmVyXS50YXNrc1tpXTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZG9uZS5pbm5lckhUTUwgPSBcIkRvbmVcIjtcclxuICAgICAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RyaWtlVHJvdWdoKGksIG51bWJlcikgKVxyXG5cclxuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWwuaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcclxuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGluZ1Rhc2tzKGksIG51bWJlcikpXHJcblxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZG9uZSk7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG5cclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5saXN0W251bWJlcl0udGFza3MpICAgIFxyXG59XHJcblxyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0KTtcclxuaG9tZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdlbGNvbWUpO1xyXG5wcm9qZWN0RGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==