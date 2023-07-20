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
}

function displayTasksList(number) {
    const projectCard = document.getElementsByClassName('project_card')[number];
    const taskZone = projectCard.querySelector('.task-container');
    const taskInputField = projectCard.querySelector('.input-task');
    const taskList = taskZone.querySelector('.task-list');

    if(taskInputField.value != '') {
        projectList.list[number].tasks.push(taskInputField.value);
        taskInputField.value = ''
    }

    console.log(projectList.list[number].tasks)    
}

newProjectButton.addEventListener("click", newProject);
homePage.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
projectDisplayButton.addEventListener('click', displayProjects);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlbGNvbWUoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJXRUxDT01FIVwiO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBcIk9kaW4ncyBUT0RPIExpc3QgTWFrZXIgaXMgYSBwb3dlcmZ1bCBhbmQgdXNlci1mcmllbmRseSBwcm9ncmFtIGRlc2lnbmVkIHRvIGhlbHAgeW91IHN0YXkgb3JnYW5pemVkIGFuZCBtYW5hZ2UgeW91ciB0YXNrcyBlZmZlY3RpdmVseS4gTmFtZWQgYWZ0ZXIgdGhlIHdpc2UgYW5kIGFsbC1rbm93aW5nIE5vcnNlIGdvZCwgT2RpbiwgdGhpcyBhcHBsaWNhdGlvbiBjb21iaW5lcyBzaW1wbGljaXR5IHdpdGggdmVyc2F0aWxpdHkgdG8gY3JlYXRlIHRoZSB1bHRpbWF0ZSB0YXNrIG1hbmFnZW1lbnQgdG9vbC48YnI+PGJyPiBXaXRoIE9kaW4ncyBUT0RPIExpc3QgTWFrZXIsIHlvdSBjYW4gZWZmb3J0bGVzc2x5IGNyZWF0ZSwgb3JnYW5pemUsIGFuZCBwcmlvcml0aXplIHlvdXIgdG8tZG8gbGlzdHMuIFRoZSBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgYWxsb3dzIHlvdSB0byBxdWlja2x5IGFkZCB0YXNrcywgc2V0IGR1ZSBkYXRlcywgYW5kIGFkZCBpbXBvcnRhbnQgbm90ZXMgb3IgZGVzY3JpcHRpb25zLlwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWxjb21lIGZyb20gXCIuL2hvbWVcIjtcclxuXHJcblxyXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5jb25zdCBwcm9qZWN0RGlzcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1wcm9qZWN0cycpXHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IHtcclxuICAgIGxpc3Q6IFtdXHJcbn1cclxuXHJcbi8vIU9iamVjdCBjb25zdHJ1Y3RvciBmb3IgdGhlIHByb2plY3RzXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpID0+IHtcclxuXHJcbiAgICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgdGFza3M6IHRhc2tzLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENhcmQoaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgaW5wdXRQcmlvcml0eS52YWx1ZSwgaW5wdXREYXRlLnZhbHVlKTtcclxuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0UHJpb3JpdHkudmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dERhdGUudmFsdWUgPSAnJztcclxuICAgICAgICBwcm9qZWN0TGlzdC5saXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHByb2plY3QgZGV0YWlscyBoZXJlIVwiXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyRm9ybS5jbGFzc05hbWUgPSBcImNvbnRhaW5lci1wcm9qZWN0XCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGl0bGVcIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0VGl0bGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X3BsYWNlXCI7XHJcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3RfZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiXHJcblxyXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5jbGFzc05hbWUgPSBcInByb2plY3RfcHJpb3JpdHlcIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24xLmlubmVySFRNTCA9IFwi8J+YgVwiO1xyXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMi5pbm5lckhUTUwgPSBcIvCfmIRcIjtcclxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjMuaW5uZXJIVE1MID0gXCLwn5iDXCI7XHJcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb240LmlubmVySFRNTCA9IFwi8J+ZglwiO1xyXG4gICAgY29uc3Qgb3B0aW9uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNS5pbm5lckhUTUwgPSBcIvCfmJBcIjtcclxuICAgIGNvbnN0IG9wdGlvbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjYuaW5uZXJIVE1MID0gXCLimLnvuI9cIlxyXG4gICAgY29uc3Qgb3B0aW9uNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNy5pbm5lckhUTUwgPSBcIvCfmKhcIjtcclxuICAgIGNvbnN0IG9wdGlvbjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjguaW5uZXJIVE1MID0gXCLwn5ixXCI7XHJcblxyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24xKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMik7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb240KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNSk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjYpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb243KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uOCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXREYXRlLmNsYXNzTmFtZSA9IFwicHJvamVjdF9kYXRlXCI7XHJcbiAgICBpbnB1dERhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBZGQgdGhlIG5ldyBwcm9qZWN0XCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuY2xhc3NOYW1lID0gXCJjcmVhdGVfcHJvamVjdF9idXR0b25cIjtcclxuICAgIGJ1dHRvbkFkZC5pbm5lckhUTUwgPSBcIkNsaWNrIGhlcmVcIjtcclxuXHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckZvcm0pO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdClcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTs7XHJcbiAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgaGVhZGVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkZXJQcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0X2NhcmRfaGVhZGVyJztcclxuICAgIGhlYWRlclByb2plY3QuaW5uZXJIVE1MID0gXCJUaGUgcHJvamVjdHMgd2lsbCBhcHBlYXIgaGVyZVwiO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGhlYWRlclByb2plY3QpXHJcblxyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0X2NhcmRfY29udGFpbmVyJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRcIlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9uYW1lXCI7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdC5saXN0W2ldLnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGVzY3JpcHRpb25cIjtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdExpc3QubGlzdFtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRlc3QuY2xhc3NOYW1lID0gXCJ0ZXN0XCJcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX3ByaW9yaXR5XCI7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLnByaW9yaXR5fWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGF0ZVwiO1xyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLmRhdGV9YDtcclxuXHJcbiAgICAgICAgdGVzdC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG4gICAgICAgIHRlc3QuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tYW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29tbWFuZHMuY2xhc3NOYW1lID0gXCJjb21tYW5kc1wiO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrXCI7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgIGNvbW1hbmRzLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbl90YXNrXCI7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNlZSB0YXNrXCI7XHJcbiAgICAgICAgY29tbWFuZHMuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGluZ1Byb2plY3RzKGkpKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVRhc2tzKGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrWm9uZS5jbGFzc05hbWUgPSBcInRhc2stY29udGFpbmVyXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tab25lSW5wdXRzUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrWm9uZUlucHV0c1BsYWNlLmNsYXNzTmFtZSA9IFwidGFzay1pbnB1dFwiO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrWm9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0YXNrWm9uZUlucHV0LmNsYXNzTmFtZSA9IFwiaW5wdXQtdGFza1wiO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHRhc2tab25lSW5wdXRzUGxhY2UuYXBwZW5kQ2hpbGQodGFza1pvbmVJbnB1dClcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1pvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0YXNrWm9uZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm5ldy10YXNrXCI7XHJcbiAgICAgICAgdGFza1pvbmVCdXR0b24uaW5uZXJIVE1MID0gXCJBZGRcIjtcclxuICAgICAgICB0YXNrWm9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlUYXNrc0xpc3QoaSkpXHJcblxyXG4gICAgICAgIHRhc2tab25lSW5wdXRzUGxhY2UuYXBwZW5kQ2hpbGQodGFza1pvbmVCdXR0b24pO1xyXG5cclxuICAgICAgICB0YXNrWm9uZS5hcHBlbmRDaGlsZCh0YXNrWm9uZUlucHV0c1BsYWNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdFpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xyXG4gICAgICAgIGxpc3Rab25lLmNsYXNzTmFtZSA9IFwidGFzay1saXN0XCI7XHJcblxyXG4gICAgICAgIHRhc2tab25lLmFwcGVuZENoaWxkKGxpc3Rab25lKVxyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRlc3QpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29tbWFuZHMpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza1pvbmUpO1xyXG5cclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGluZ1Byb2plY3RzKG51bWJlcikge1xyXG4gICAgcHJvamVjdExpc3QubGlzdC5zcGxpY2UobnVtYmVyLCAxKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJylcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKG51bWJlcikge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0X2NhcmQnKVtudW1iZXJdO1xyXG4gICAgY29uc3QgdGFza1pvbmUgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IHRhc2tab25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcclxuXHJcbiAgICBpZiAocHJvamVjdENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpXHJcbiAgICB9XHJcbiAgICB0YXNrWm9uZS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzTGlzdChudW1iZXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9jYXJkJylbbnVtYmVyXTtcclxuICAgIGNvbnN0IHRhc2tab25lID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YXNrSW5wdXRGaWVsZCA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10YXNrJyk7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IHRhc2tab25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcclxuXHJcbiAgICBpZih0YXNrSW5wdXRGaWVsZC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3RbbnVtYmVyXS50YXNrcy5wdXNoKHRhc2tJbnB1dEZpZWxkLnZhbHVlKTtcclxuICAgICAgICB0YXNrSW5wdXRGaWVsZC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QubGlzdFtudW1iZXJdLnRhc2tzKSAgICBcclxufVxyXG5cclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdCk7XHJcbmhvbWVQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3ZWxjb21lKTtcclxucHJvamVjdERpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=