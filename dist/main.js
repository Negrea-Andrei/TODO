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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VsY29tZSgpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIldFTENPTUUhXCI7XHJcblxyXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiT2RpbidzIFRPRE8gTGlzdCBNYWtlciBpcyBhIHBvd2VyZnVsIGFuZCB1c2VyLWZyaWVuZGx5IHByb2dyYW0gZGVzaWduZWQgdG8gaGVscCB5b3Ugc3RheSBvcmdhbml6ZWQgYW5kIG1hbmFnZSB5b3VyIHRhc2tzIGVmZmVjdGl2ZWx5LiBOYW1lZCBhZnRlciB0aGUgd2lzZSBhbmQgYWxsLWtub3dpbmcgTm9yc2UgZ29kLCBPZGluLCB0aGlzIGFwcGxpY2F0aW9uIGNvbWJpbmVzIHNpbXBsaWNpdHkgd2l0aCB2ZXJzYXRpbGl0eSB0byBjcmVhdGUgdGhlIHVsdGltYXRlIHRhc2sgbWFuYWdlbWVudCB0b29sLjxicj48YnI+IFdpdGggT2RpbidzIFRPRE8gTGlzdCBNYWtlciwgeW91IGNhbiBlZmZvcnRsZXNzbHkgY3JlYXRlLCBvcmdhbml6ZSwgYW5kIHByaW9yaXRpemUgeW91ciB0by1kbyBsaXN0cy4gVGhlIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZSBhbGxvd3MgeW91IHRvIHF1aWNrbHkgYWRkIHRhc2tzLCBzZXQgZHVlIGRhdGVzLCBhbmQgYWRkIGltcG9ydGFudCBub3RlcyBvciBkZXNjcmlwdGlvbnMuXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuXHJcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbmNvbnN0IHByb2plY3REaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJylcclxuXHJcbmNvbnN0IHByb2plY3RMaXN0ID0ge1xyXG4gICAgbGlzdDogW11cclxufVxyXG5cclxuLy8hT2JqZWN0IGNvbnN0cnVjdG9yIGZvciB0aGUgcHJvamVjdHNcclxuY29uc3QgcHJvamVjdENhcmQgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkgPT4ge1xyXG5cclxuICAgIGxldCB0YXNrcyA9IFtdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgICB0YXNrczogdGFza3MsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q2FyZChpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLCBpbnB1dFByaW9yaXR5LnZhbHVlLCBpbnB1dERhdGUudmFsdWUpO1xyXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0RGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3QucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIHlvdXIgcHJvamVjdCBkZXRhaWxzIGhlcmUhXCJcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJGb3JtLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyLXByb2plY3RcIjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUaXRsZVwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3RfcGxhY2VcIjtcclxuICAgIGlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwicHJvamVjdF9kZXNjcmlwdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCJcclxuXHJcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdF9wcmlvcml0eVwiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjEuaW5uZXJIVE1MID0gXCLwn5iBXCI7XHJcbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24yLmlubmVySFRNTCA9IFwi8J+YhFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMy5pbm5lckhUTUwgPSBcIvCfmINcIjtcclxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjQuaW5uZXJIVE1MID0gXCLwn5mCXCI7XHJcbiAgICBjb25zdCBvcHRpb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb241LmlubmVySFRNTCA9IFwi8J+YkFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNi5pbm5lckhUTUwgPSBcIuKYue+4j1wiXHJcbiAgICBjb25zdCBvcHRpb243ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb243LmlubmVySFRNTCA9IFwi8J+YqFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uOC5pbm5lckhUTUwgPSBcIvCfmLFcIjtcclxuXHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjQpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb241KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNik7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjcpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb244KTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlLmlubmVySFRNTCA9IFwiRHVlIGRhdGVcIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2RhdGVcIjtcclxuICAgIGlucHV0RGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCB0aGUgbmV3IHByb2plY3RcIjtcclxuXHJcbiAgICBjb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5jbGFzc05hbWUgPSBcImNyZWF0ZV9wcm9qZWN0X2J1dHRvblwiO1xyXG4gICAgYnV0dG9uQWRkLmlubmVySFRNTCA9IFwiQ2xpY2sgaGVyZVwiO1xyXG5cclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyRm9ybSk7XHJcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpOztcclxuICAgIHByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBoZWFkZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRlclByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3RfY2FyZF9oZWFkZXInO1xyXG4gICAgaGVhZGVyUHJvamVjdC5pbm5lckhUTUwgPSBcIlRoZSBwcm9qZWN0cyB3aWxsIGFwcGVhciBoZXJlXCI7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoaGVhZGVyUHJvamVjdClcclxuXHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZHNDb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2plY3RfY2FyZF9jb250YWluZXInXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZFwiXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX25hbWVcIjtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2plY3RMaXN0Lmxpc3RbaV0udGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9kZXNjcmlwdGlvblwiO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdC5saXN0W2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGVzdC5jbGFzc05hbWUgPSBcInRlc3RcIlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfcHJpb3JpdHlcIjtcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke3Byb2plY3RMaXN0Lmxpc3RbaV0ucHJpb3JpdHl9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGF0ZS5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9kYXRlXCI7XHJcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJIVE1MID0gYER1ZSBkYXRlOiAke3Byb2plY3RMaXN0Lmxpc3RbaV0uZGF0ZX1gO1xyXG5cclxuICAgICAgICB0ZXN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XHJcbiAgICAgICAgdGVzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1hbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb21tYW5kcy5jbGFzc05hbWUgPSBcImNvbW1hbmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXRhc2tcIjtcclxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XHJcbiAgICAgICAgY29tbWFuZHMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uX3Rhc2tcIjtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiU2VlIHRhc2tcIjtcclxuICAgICAgICBjb21tYW5kcy5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0aW5nUHJvamVjdHMoaSkpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5VGFza3MoaSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrWm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tab25lLmNsYXNzTmFtZSA9IFwidGFzay1jb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmVJbnB1dHNQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXRzUGxhY2UuY2xhc3NOYW1lID0gXCJ0YXNrLWlucHV0XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tab25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXQuY2xhc3NOYW1lID0gXCJpbnB1dC10YXNrXCI7XHJcbiAgICAgICAgdGFza1pvbmVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgdGFza1pvbmVJbnB1dHNQbGFjZS5hcHBlbmRDaGlsZCh0YXNrWm9uZUlucHV0KVxyXG5cclxuICAgICAgICBjb25zdCB0YXNrWm9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRhc2tab25lQnV0dG9uLmNsYXNzTmFtZSA9IFwibmV3LXRhc2tcIjtcclxuICAgICAgICB0YXNrWm9uZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZFwiO1xyXG4gICAgICAgIHRhc2tab25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVRhc2tzTGlzdChpKSlcclxuXHJcbiAgICAgICAgdGFza1pvbmVJbnB1dHNQbGFjZS5hcHBlbmRDaGlsZCh0YXNrWm9uZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRhc2tab25lLmFwcGVuZENoaWxkKHRhc2tab25lSW5wdXRzUGxhY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0Wm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XHJcbiAgICAgICAgbGlzdFpvbmUuY2xhc3NOYW1lID0gXCJ0YXNrLWxpc3RcIjtcclxuXHJcbiAgICAgICAgdGFza1pvbmUuYXBwZW5kQ2hpbGQobGlzdFpvbmUpXHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGVzdCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb21tYW5kcyk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrWm9uZSk7XHJcblxyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0aW5nUHJvamVjdHMobnVtYmVyKSB7XHJcbiAgICBwcm9qZWN0TGlzdC5saXN0LnNwbGljZShudW1iZXIsIDEpO1xyXG4gICAgZGlzcGxheVByb2plY3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhudW1iZXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9jYXJkJylbbnVtYmVyXTtcclxuICAgIGNvbnN0IHRhc2tab25lID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpO1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSB0YXNrWm9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XHJcblxyXG4gICAgaWYgKHByb2plY3RDYXJkLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgdGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGluZ1Rhc2tzKGluZGV4LCBudW1iZXIpIHtcclxuICAgIHByb2plY3RMaXN0Lmxpc3RbbnVtYmVyXS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgZGlzcGxheVRhc2tzTGlzdChudW1iZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NMaXN0KG51bWJlcikge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0X2NhcmQnKVtudW1iZXJdO1xyXG4gICAgY29uc3QgdGFza1pvbmUgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHRhc2tJbnB1dEZpZWxkID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignLmlucHV0LXRhc2snKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza1pvbmUucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xyXG5cclxuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJylcclxuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmKHRhc2tJbnB1dEZpZWxkLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFtudW1iZXJdLnRhc2tzLnB1c2godGFza0lucHV0RmllbGQudmFsdWUpO1xyXG4gICAgICAgIHRhc2tJbnB1dEZpZWxkLnZhbHVlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5saXN0W251bWJlcl0udGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgPSAnZWxlbWVudCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0YXNrLW5hbWVcIjtcclxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IHByb2plY3RMaXN0Lmxpc3RbbnVtYmVyXS50YXNrc1tpXTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZG9uZS5pbm5lckhUTUwgPSBcIkRvbmVcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XHJcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRpbmdUYXNrcyhpLCBudW1iZXIpKVxyXG5cclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGRvbmUpO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsKTtcclxuXHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QubGlzdFtudW1iZXJdLnRhc2tzKSAgICBcclxufVxyXG5cclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdCk7XHJcbmhvbWVQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3ZWxjb21lKTtcclxucHJvamVjdERpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=