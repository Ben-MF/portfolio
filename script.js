/* 
========= HAMBURGER BUTTON ============
When icon is clicked: 
== <nav> toggles class="active",
== #headmast toggles class="menu-active",
== <button> switches between trigram for heaven and heavy multiplication x
*/

const toggleButton = document.querySelector("#toggle");
const mainMenu = document.querySelector("#menu");
const mastheadHeader = document.querySelector("#masthead")

toggleButton.addEventListener("click",function(){
    mainMenu.classList.toggle("active");
    mastheadHeader.classList.toggle("menu-active");
    if (toggleButton.textContent === "☰"){
        toggleButton.textContent = "✖";
    }
    else {toggleButton.textContent = "☰"}
})

/* 
========= PROJECT CARD SELECTION ===========
When a card is selected on the carousel, 
Display its information on the website
*/

const storyhive = documen.querySelector("#storyhive");
const chipn = documen.querySelector("#chipn");
const pizzaForm = documen.querySelector("#pizza-form");
const brandGuideline = documen.querySelector("#brand-guideline");
const shangriLaResort = documen.querySelector("#shangri-la-resort");

const title = document.querySelector(".title")
const synopsis = document.querySelector(".synopsis")

/* 
toggle .selected class to highlight the project
switch the content 
*/