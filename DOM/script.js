let button = document.querySelector("button");
let heading = document.querySelector("h1");
heading.innerText = "DOM is easy to learn!";
heading.style.color = "red";
heading.style.fontSize = "50px";
heading.style.textAlign = "center";

button.innerText = "Submit";
button.addEventListener("click", function () {

    document.body.style.backgroundColor = "lightblue";

});

button.addEventListener("click", function () {
    alert("Button clicked!");
});