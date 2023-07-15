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
    title: title;
    description: description;
    priority: priority;
    date: date;
    let tasks = [];

    return {title, description, priority, date, tasks}
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
    headerProject.className= 'project_card_header';
    headerProject.innerHTML = "The projects will appear here";

    projects.appendChild(headerProject)

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'project_card_container'
    for(let i = 0; i < projectList.list.length; i++) {
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

        const projectButton = document.createElement('button');
        projectButton.className = "button_task";
        projectButton.innerHTML = "Add task";

        card.appendChild(projectHeader);
        card.appendChild(projectDescription);
        card.appendChild(test);
        card.appendChild(projectButton);
        
        cardsContainer.appendChild(card);
        
        projects.appendChild(cardsContainer)
    }
    
}

newProjectButton.addEventListener("click", newProject);
homePage.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
projectDisplayButton.addEventListener('click', displayProjects);

//Got home from Cluj at 9 PM
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUNkdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBTztBQUMxQztBQUNBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VsY29tZSgpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIldFTENPTUUhXCI7XHJcblxyXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiT2RpbidzIFRPRE8gTGlzdCBNYWtlciBpcyBhIHBvd2VyZnVsIGFuZCB1c2VyLWZyaWVuZGx5IHByb2dyYW0gZGVzaWduZWQgdG8gaGVscCB5b3Ugc3RheSBvcmdhbml6ZWQgYW5kIG1hbmFnZSB5b3VyIHRhc2tzIGVmZmVjdGl2ZWx5LiBOYW1lZCBhZnRlciB0aGUgd2lzZSBhbmQgYWxsLWtub3dpbmcgTm9yc2UgZ29kLCBPZGluLCB0aGlzIGFwcGxpY2F0aW9uIGNvbWJpbmVzIHNpbXBsaWNpdHkgd2l0aCB2ZXJzYXRpbGl0eSB0byBjcmVhdGUgdGhlIHVsdGltYXRlIHRhc2sgbWFuYWdlbWVudCB0b29sLjxicj48YnI+IFdpdGggT2RpbidzIFRPRE8gTGlzdCBNYWtlciwgeW91IGNhbiBlZmZvcnRsZXNzbHkgY3JlYXRlLCBvcmdhbml6ZSwgYW5kIHByaW9yaXRpemUgeW91ciB0by1kbyBsaXN0cy4gVGhlIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZSBhbGxvd3MgeW91IHRvIHF1aWNrbHkgYWRkIHRhc2tzLCBzZXQgZHVlIGRhdGVzLCBhbmQgYWRkIGltcG9ydGFudCBub3RlcyBvciBkZXNjcmlwdGlvbnMuXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuXHJcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbmNvbnN0IHByb2plY3REaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJylcclxuXHJcbmNvbnN0IHByb2plY3RMaXN0ID0ge1xyXG4gICAgbGlzdDogW10gICAgXHJcbn1cclxuXHJcbi8vIU9iamVjdCBjb25zdHJ1Y3RvciBmb3IgdGhlIHByb2plY3RzXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpID0+IHtcclxuICAgIHRpdGxlOiB0aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbjtcclxuICAgIHByaW9yaXR5OiBwcmlvcml0eTtcclxuICAgIGRhdGU6IGRhdGU7XHJcbiAgICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIHRhc2tzfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENhcmQoaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgaW5wdXRQcmlvcml0eS52YWx1ZSwgaW5wdXREYXRlLnZhbHVlKTtcclxuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0UHJpb3JpdHkudmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dERhdGUudmFsdWUgPSAnJztcclxuICAgICAgICBwcm9qZWN0TGlzdC5saXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QubGlzdClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIHlvdXIgcHJvamVjdCBkZXRhaWxzIGhlcmUhXCJcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJGb3JtLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyLXByb2plY3RcIjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUaXRsZVwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3RfcGxhY2VcIjtcclxuICAgIGlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwicHJvamVjdF9kZXNjcmlwdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCJcclxuXHJcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdF9wcmlvcml0eVwiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjEuaW5uZXJIVE1MID0gXCLwn5iBXCI7XHJcbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24yLmlubmVySFRNTCA9IFwi8J+YhFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMy5pbm5lckhUTUwgPSBcIvCfmINcIjtcclxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjQuaW5uZXJIVE1MID0gXCLwn5mCXCI7XHJcbiAgICBjb25zdCBvcHRpb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb241LmlubmVySFRNTCA9IFwi8J+YkFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNi5pbm5lckhUTUwgPSBcIuKYue+4j1wiXHJcbiAgICBjb25zdCBvcHRpb243ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb243LmlubmVySFRNTCA9IFwi8J+YqFwiO1xyXG4gICAgY29uc3Qgb3B0aW9uOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uOC5pbm5lckhUTUwgPSBcIvCfmLFcIjtcclxuXHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjQpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb241KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNik7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjcpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb244KTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlLmlubmVySFRNTCA9IFwiRHVlIGRhdGVcIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2RhdGVcIjtcclxuICAgIGlucHV0RGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCB0aGUgbmV3IHByb2plY3RcIjtcclxuXHJcbiAgICBjb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5jbGFzc05hbWUgPSBcImNyZWF0ZV9wcm9qZWN0X2J1dHRvblwiO1xyXG4gICAgYnV0dG9uQWRkLmlubmVySFRNTCA9IFwiQ2xpY2sgaGVyZVwiO1xyXG5cclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyRm9ybSk7XHJcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpOztcclxuICAgIHByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBoZWFkZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRlclByb2plY3QuY2xhc3NOYW1lPSAncHJvamVjdF9jYXJkX2hlYWRlcic7XHJcbiAgICBoZWFkZXJQcm9qZWN0LmlubmVySFRNTCA9IFwiVGhlIHByb2plY3RzIHdpbGwgYXBwZWFyIGhlcmVcIjtcclxuXHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChoZWFkZXJQcm9qZWN0KVxyXG5cclxuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdF9jYXJkX2NvbnRhaW5lcidcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRcIlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9uYW1lXCI7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdC5saXN0W2ldLnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGVzY3JpcHRpb25cIjtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdExpc3QubGlzdFtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRlc3QuY2xhc3NOYW1lID0gXCJ0ZXN0XCJcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX3ByaW9yaXR5XCI7XHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLnByaW9yaXR5fWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfZGF0ZVwiO1xyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHtwcm9qZWN0TGlzdC5saXN0W2ldLmRhdGV9YDtcclxuXHJcbiAgICAgICAgdGVzdC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG4gICAgICAgIHRlc3QuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbl90YXNrXCI7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCB0YXNrXCI7XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGVzdCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0KTtcclxuaG9tZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdlbGNvbWUpO1xyXG5wcm9qZWN0RGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0cyk7XHJcblxyXG4vL0dvdCBob21lIGZyb20gQ2x1aiBhdCA5IFBNIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9