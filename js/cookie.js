Cookies.set('test', 'true');

if (Cookies.get('test') === undefined) {
    console.log("Not working");
} else {
    console.log("cookies is working");
}