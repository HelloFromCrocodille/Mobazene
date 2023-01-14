function Changer() {
    let body_class = document.getElementById("body").className;
    if (body_class == 'dark-mode') {
        document.getElementById("body").className = "white-mode";
        document.getElementById("logo").className = "bi bi-moon";
    } else {
        document.getElementById("body").className = "dark-mode";
        document.getElementById("logo").className = "bi bi-brightness-low";
    }
}