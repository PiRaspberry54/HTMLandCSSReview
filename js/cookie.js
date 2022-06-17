$(document).ready(function() {
    // AddingClass("cookie-overlay", "flex");
    // RemovingClass("cookie-overlay", "flex");
    console.log("Add class works");
    // Cookies havent been accepted so set to false as want it to appear on reload. 
    if (Cookies.get('test') === 'false' || Cookies.get('test') == undefined) {
        Cookies.set('test', 'false');
        AddingClass("cookie-overlay", "flex");
    } else {
        RemovingClass("cookie-overlay", "flex");
    }
    document.getElementById('cookie-button').onclick = function() {
        Cookies.set('test', 'true');
        RemovingClass("cookie-overlay", "flex")
    };
})

function AddingClass(id, className) {
    const list = document.getElementById(id);
    list.classList.add(className);
}

function RemovingClass(id, className) {
    const list = document.getElementById(id);
    list.classList.remove(className);
}