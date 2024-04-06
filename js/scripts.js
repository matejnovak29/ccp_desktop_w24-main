window.addEventListener("load", function() {
    var user_input = this.prompt("Welcome, please give me your name: ");
    var p = document.createElement("p");
    var h1 = document.querySelector("h1");
    p.innerHTML = "Welcome " + user_input + ", this page content is about " + h1.innerHTML + ".";
    p.style.textAlign = "center";
    h1.after(p);
});