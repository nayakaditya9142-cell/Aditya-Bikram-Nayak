
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}


document.body.classList.add("loading");

let percent = 0;
const percentText = document.getElementById("loading-percent");

const loadingInterval = setInterval(() => {
    if (percent < 100) {
        percent++;
        percentText.textContent = percent + "%";
    }
}, 20); 

window.addEventListener("load", () => {
    clearInterval(loadingInterval);
    percentText.textContent = "100%";

    const loader = document.getElementById("loader");
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove("loading");
    }, 600);
});


