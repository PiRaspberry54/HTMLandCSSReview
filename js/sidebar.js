$(document).ready(function() {
        let previousScroll = 0;
        let scroll = document.querySelector('html').scrollTop;
        console.log('Here is the value', scroll);
        setInterval(() => {
            previousScroll = scroll;
            scroll = document.querySelector('html').scrollTop;
            if (scroll < previousScroll) {
                console.log("Scrolling up");
                AddingClass("header2", "flex");

            } else if (scroll > previousScroll) {
                RemovingClass("header2", "flex");
            } else {};
            if (scroll === 0) {
                RemovingClass("header2", "flex");
            }
        }, 100);
    })
    // const sidebarElement = $('.sidebar');
    // const sidebarClasses = sidebarElement.classList();
    // console.log(sidebarClasses);
document.getElementById('menu-btn').onclick = function() {
    AddingClass("sidebar", "flex");
    AddingClass("overlay", "flex");
    AddingClass("main-site", "position-left");
    document.getElementById('overlay').onclick = function() {
        RemovingClass("sidebar", "flex");
        RemovingClass("overlay", "flex");
        RemovingClass("main-site", "position-left");
    };
};

document.getElementById('menu-btn-2').onclick = function() {
    AddingClass("sidebar", "flex");
    AddingClass("overlay", "flex");
    AddingClass("main-site", "position-left");
    document.getElementById('overlay').onclick = function() {
        RemovingClass("sidebar", "flex");
        RemovingClass("overlay", "flex");
        RemovingClass("main-site", "position-left");
    };
};

function AddingClass(id, className) {
    const list = document.getElementById(id);
    list.classList.add(className);
}

function RemovingClass(id, className) {
    const list = document.getElementById(id);
    list.classList.remove(className);
}

// AddingClass("sidebar", "flex");
// Removingflex();
//Here is how I can add the class flex and get the element to display. 
// const list = document.getElementById('sidebar');
// list.classList.add('flex');
// list.classList.remove('flex');


// const menuButton =