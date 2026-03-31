/* 
Show contact-form when 'Contact' button is clicked
Hide modal when 'Close' button clicked
*/

const modal = document.querySelector("#modal");
const showModal = document.querySelector("#show-contact-form");
const closeModal = document.querySelector("#close-contact-form");

showModal.addEventListener("click",function(){
    console.log("Contact button pressed");
    modal.showModal();
})

closeModal.addEventListener("click",function(){
    modal.close();
})