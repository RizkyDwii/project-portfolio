// toogle & Responsive navigation

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        // toogle nav list and burger class
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// hapus form setelah go back

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {

        form.reset();
    
    }
    
};