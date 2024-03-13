import $ from "jquery";

export const setNavbarEvents = () => {
    $(".nav-item").on("click", (event) => {
        let parent = event.target.parentElement;
        let currentActiveLink = parent.querySelector(".active");
        $(currentActiveLink).removeClass("active");
    
        let self = event.target;
        $(self).addClass("active");
    });
}