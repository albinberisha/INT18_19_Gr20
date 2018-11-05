var image_index = 0;

var slider_images = [
    "Pictures\\Galaxy Note9.jpg",
    "Pictures\\Galaxy S6.jpg",
    "Pictures\\prishtina.jpg"
];

var slider_overlays = [
    "Galaxy S6",
    "Galaxy Note9",
    "Prishtina"
];

function select(i) {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index = i;
    image.src = slider_images[image_index];
    overlay_name.innerHTML = slider_overlays[image_index];
}

function next() {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index++;
    if(image_index > 2)
        image_index = 0;
    image.src = slider_images[image_index];
    overlay_name.innerHTML = slider_overlays[image_index];
}

function previous() {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index--;
    if(image_index < 0)
        image_index = 2;
    image.src = slider_images[image_index];
    overlay_name.innerHTML = slider_overlays[image_index];
}