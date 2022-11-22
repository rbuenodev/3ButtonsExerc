const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const count = document.querySelector(".count");

var timer = 0;

buttonOne.addEventListener("click", () => {
    console.log("Button1 was clicked!");
    const body = document.querySelector("body")
    const div = document.createElement('div')
    const templateString =
        `<div class="containerAdded">
        <article">article</article>
    </div>`

    div.innerHTML = templateString;
    body.appendChild(div)
}, false);

buttonTwo.addEventListener("click", () => {
    timer += 1;
    console.log("Button2 was clicked!");
    console.log(timer);
    count.innerHTML = timer.toString();
}, false);

buttonThree.addEventListener("click", () => {
    console.log("Button3 was clicked!");
    console.log(timer);
    execTimer();
    timer = 0;
}, false);

const execTimer = () => {
    var timeleft = timer;
    var x = setInterval(function () {
        timeleft--;
        console.log(timeleft);
        count.textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(x);
    }, 1000);
}