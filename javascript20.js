var slider_images = [
    "Pictures\\prishtina.jpg",
    "Pictures\\malisheva.jpg",
    "Pictures\\prizreni.jpg"
];

function select(i) {
    var slider = document.getElementById('slider-image');
    slider.src = slider_images[i];
}