$(document).ready(function() {
        let previousScroll = 0;
        let scroll = document.querySelector('html').scrollTop;
        console.log('Here is the value', scroll);
        setInterval(() => {
            previousScroll = scroll;
            scroll = document.querySelector('html').scrollTop;
            if (scroll < previousScroll) {
                console.log("Scrolling up");
                //Get the header to display. 
            } else {
                //Remove header.
            };
        }, 100);
    })
    // const sidebarElement = $('.sidebar');
    // const sidebarClasses = sidebarElement.classList();
    // console.log(sidebarClasses);
document.getElementById('menu-btn').onclick = function() {
    AddingClass("sidebar", "flex");
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

// AddingClass("sidebar", "flex");
// Removingflex();
//Here is how I can add the class flex and get the element to display. 
// const list = document.getElementById('sidebar');
// list.classList.add('flex');
// list.classList.remove('flex');


// const menuButton =