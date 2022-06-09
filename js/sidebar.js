$(document).ready(function() {
        let scroll = document.querySelector('html').scrollTop;
        console.log('Here is the value', scroll);
    })
    // const sidebarElement = $('.sidebar');
    // const sidebarClasses = sidebarElement.classList();
    // console.log(sidebarClasses);
document.getElementsByClassName('menu-btn').onclick = function() {
    console.log("working");
};

function AddingClass(id, className) {
    const list = document.getElementById(id);
    list.classList.add(className);
}

function Removingflex() {
    const list = document.getElementById('sidebar');
    list.classList.remove('flex');
}

AddingClass("sidebar", "flex");
// Removingflex();
//Here is how I can add the class flex and get the element to display. 
// const list = document.getElementById('sidebar');
// list.classList.add('flex');
// list.classList.remove('flex');


// const menuButton =