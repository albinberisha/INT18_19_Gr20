var image_index = 0;

var slider_images = [
    "Images\\Galaxy Note9.jpg",
    "Images\\The Frame TV.jpg",
    "Images\\Gear VR.jpg",
    "Images\\Galaxy Watch.jpg",
    "Images\\Galaxy A9.jpg"
];

var slider_overlays = [
    "Galaxy Note9",
    "The Frame TV",
    "Gear VR",
    "Galaxy Watch",
    "Galaxy A9"
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
    if(image_index > 4)
        image_index = 0;
    image.src = slider_images[image_index];
    overlay_name.innerHTML = slider_overlays[image_index];
}

function previous() {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index--;
    if(image_index < 0)
        image_index = 4;
    image.src = slider_images[image_index];
    overlay_name.innerHTML = slider_overlays[image_index];
}

setInterval(next, 20000);