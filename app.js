let count = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const classes = e.currentTarget.classList;
        if (classes.contains("increase")) {
            count++;
        } else if (classes.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});
