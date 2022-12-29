const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


function initMap() {
    var location = { lat: 49.306770, lng: 14.147090 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 18, center: location });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });


}