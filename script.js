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

/* 
================== Shortcuts
*/
const storyhive = document.querySelector("#storyhive");
const chipn = document.querySelector("#chipn");
const pizzaForm = document.querySelector("#pizza-form");
const brandGuideline = document.querySelector("#brand-guideline");
const resortWebsite = document.querySelector("#resort-website");

const title = document.querySelector(".title");
const synopsis = document.querySelector(".synopsis");
const tools = document.querySelector(".tools");
const role = document.querySelector(".role");

/* 
================= switch selected project info
toggle .selected class to highlight the project chosen for viewing.
Switch the content:
*/

chipn.addEventListener("click", function(){
    console.log("Chip'N Commercial Selected");
    title.textContent = "Chip'N Commercial"
    synopsis.textContent = "Design and create a product with a 15 second commercial. "
    tools.textContext = "Illustrator, After Effects, Premiere Pro"
    role.textContent = "Product Design, Storyboard, Lighting, Post-production"

    chipn.classList.add("selected-card");
    brandGuideline.classList.remove("selected-card");
    resortWebsite.classList.remove("selected-card");

})
brandGuideline.addEventListener("click", function(){
    console.log("Full Brand Package Selected");
    title.textContent = "Full Brand Package"
    synopsis.textContent = "Create a brand identity and guidelines for a company"
    tools.textContext = "Illustrator, Photoshop, InDesign"

    brandGuideline.classList.add("selected-card");
    chipn.classList.remove("selected-card");
    resortWebsite.classList.remove("selected-card");

})
resortWebsite.addEventListener("click", function(){
    console.log("Website Redesign Selected");
    title.textContent = "Website Redesign"
    synopsis.textContent = "Rebuild a resorts entire website from scratch"
    tools.textContext = "HTML, CSS, JavaScript"

    resortWebsite.classList.add("selected-card");
    chipn.classList.remove("selected-card");
    brandGuideline.classList.remove("selected-card");
    

})

