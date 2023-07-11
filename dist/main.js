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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUNkdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBTztBQUMxQyxnRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWxjb21lKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiV0VMQ09NRSFcIjtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gXCJPZGluJ3MgVE9ETyBMaXN0IE1ha2VyIGlzIGEgcG93ZXJmdWwgYW5kIHVzZXItZnJpZW5kbHkgcHJvZ3JhbSBkZXNpZ25lZCB0byBoZWxwIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgbWFuYWdlIHlvdXIgdGFza3MgZWZmZWN0aXZlbHkuIE5hbWVkIGFmdGVyIHRoZSB3aXNlIGFuZCBhbGwta25vd2luZyBOb3JzZSBnb2QsIE9kaW4sIHRoaXMgYXBwbGljYXRpb24gY29tYmluZXMgc2ltcGxpY2l0eSB3aXRoIHZlcnNhdGlsaXR5IHRvIGNyZWF0ZSB0aGUgdWx0aW1hdGUgdGFzayBtYW5hZ2VtZW50IHRvb2wuPGJyPjxicj4gV2l0aCBPZGluJ3MgVE9ETyBMaXN0IE1ha2VyLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBjcmVhdGUsIG9yZ2FuaXplLCBhbmQgcHJpb3JpdGl6ZSB5b3VyIHRvLWRvIGxpc3RzLiBUaGUgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlIGFsbG93cyB5b3UgdG8gcXVpY2tseSBhZGQgdGFza3MsIHNldCBkdWUgZGF0ZXMsIGFuZCBhZGQgaW1wb3J0YW50IG5vdGVzIG9yIGRlc2NyaXB0aW9ucy5cIjtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VsY29tZSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgcHJvamVjdERpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktcHJvamVjdHMnKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSB7XHJcbiAgICBsaXN0OiBbXSAgICBcclxufVxyXG5cclxuLy8hT2JqZWN0IGNvbnN0cnVjdG9yIGZvciB0aGUgcHJvamVjdHNcclxuY29uc3QgcHJvamVjdENhcmQgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkgPT4ge1xyXG4gICAgdGl0bGU6IHRpdGxlO1xyXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uO1xyXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5O1xyXG4gICAgZGF0ZTogZGF0ZTtcclxuICAgIGxldCB0YXNrcyA9IFtdO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgdGFza3N9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q2FyZChpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLCBpbnB1dFByaW9yaXR5LnZhbHVlLCBpbnB1dERhdGUudmFsdWUpO1xyXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlucHV0RGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3QucHVzaChwcm9qZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5saXN0KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwcm9qZWN0IGRldGFpbHMgaGVyZSFcIlxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lckZvcm0uY2xhc3NOYW1lID0gXCJjb250YWluZXItcHJvamVjdFwiO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRpdGxlXCI7XHJcblxyXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdF9wbGFjZVwiO1xyXG4gICAgaW5wdXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0X2Rlc2NyaXB0aW9uXCI7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIlxyXG5cclxuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGlucHV0UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcm9qZWN0X3ByaW9yaXR5XCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMS5pbm5lckhUTUwgPSBcIvCfmIFcIjtcclxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjIuaW5uZXJIVE1MID0gXCLwn5iEXCI7XHJcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24zLmlubmVySFRNTCA9IFwi8J+Yg1wiO1xyXG4gICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uNC5pbm5lckhUTUwgPSBcIvCfmYJcIjtcclxuICAgIGNvbnN0IG9wdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjUuaW5uZXJIVE1MID0gXCLwn5iQXCI7XHJcbiAgICBjb25zdCBvcHRpb242ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb242LmlubmVySFRNTCA9IFwi4pi577iPXCJcclxuICAgIGNvbnN0IG9wdGlvbjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbjcuaW5uZXJIVE1MID0gXCLwn5ioXCI7XHJcbiAgICBjb25zdCBvcHRpb244ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb244LmlubmVySFRNTCA9IFwi8J+YsVwiO1xyXG5cclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNCk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjUpO1xyXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb242KTtcclxuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNyk7XHJcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGUuaW5uZXJIVE1MID0gXCJEdWUgZGF0ZVwiO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0RGF0ZS5jbGFzc05hbWUgPSBcInByb2plY3RfZGF0ZVwiO1xyXG4gICAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIHRoZSBuZXcgcHJvamVjdFwiO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmNsYXNzTmFtZSA9IFwiY3JlYXRlX3Byb2plY3RfYnV0dG9uXCI7XHJcbiAgICBidXR0b25BZGQuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlXCI7XHJcblxyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xyXG4gICAgY29udGFpbmVyRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGNvbnRhaW5lckZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJGb3JtKTtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7O1xyXG4gICAgcHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IGhlYWRlclByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyUHJvamVjdC5jbGFzc05hbWU9ICdwcm9qZWN0X2NhcmRfaGVhZGVyJztcclxuICAgIGhlYWRlclByb2plY3QuaW5uZXJIVE1MID0gXCJUaGUgcHJvamVjdHMgd2lsbCBhcHBlYXIgaGVyZVwiO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGhlYWRlclByb2plY3QpXHJcblxyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0X2NhcmRfY29udGFpbmVyJ1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZFwiXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdF9jYXJkX25hbWVcIjtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2plY3RMaXN0Lmxpc3RbaV0udGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9kZXNjcmlwdGlvblwiO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdC5saXN0W2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGVzdC5jbGFzc05hbWUgPSBcInRlc3RcIlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcm9qZWN0X2NhcmRfcHJpb3JpdHlcIjtcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke3Byb2plY3RMaXN0Lmxpc3RbaV0ucHJpb3JpdHl9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGF0ZS5jbGFzc05hbWUgPSBcInByb2plY3RfY2FyZF9kYXRlXCI7XHJcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJIVE1MID0gYER1ZSBkYXRlOiAke3Byb2plY3RMaXN0Lmxpc3RbaV0uZGF0ZX1gO1xyXG5cclxuICAgICAgICB0ZXN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XHJcbiAgICAgICAgdGVzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uX3Rhc2tcIjtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIHRhc2tcIjtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXN0KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3QpO1xyXG5ob21lUGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2VsY29tZSk7XHJcbnByb2plY3REaXNwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3RzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=