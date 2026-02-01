function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}


const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});
