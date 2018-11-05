var image_index = 0;

var slider_images = [
    "Pictures\\prishtina.jpg",
    "Pictures\\malisheva.jpg",
    "Pictures\\prizreni.jpg"
];

function select(i) {
    var image = document.getElementById('slider-image');
    var dots = document.getElementsByClassName('dots');
    image_index = i;
    image.src = slider_images[image_index];
}

function next() {
    var image = document.getElementById('slider-image');
    image_index++;
    if(image_index > 2)
        image_index = 0;
    image.src = slider_images[image_index];
}

function previous() {
    var image = document.getElementById('slider-image');
    image_index--;
    if(image_index < 0)
        image_index = 2;
    image.src = slider_images[image_index];
}