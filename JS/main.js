let lis = document.querySelectorAll("ul li");
let tabsArray = Array.from(lis);
let divs = document.querySelectorAll(".content div");
let divsArray = Array.from(divs);

for (let item of tabsArray) {
    item.addEventListener("click", function(e) {
        // Remove Active Class
        for (let item of tabsArray) {
            item.classList.remove("active")
        }
        // Add Active Class
        item.classList.toggle("active");
        for (let item of divsArray) {
            item.style.display = "none";
        }
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
}