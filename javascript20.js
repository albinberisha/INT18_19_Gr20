var image_index = 0;

var slider_images = [
    "Images\\Be Together.png",
    "Images\\Galaxy Note9.jpg",
    "Images\\The Frame TV.jpg",
    "Images\\Galaxy Watch.jpg",
    "Images\\Galaxy A9 quad.jpg"
];

var slider_overlays = [
    "Discover The Galaxy",
    "Galaxy Note9",
    "The Frame TV",
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

function selectProductsCategory(i) {
    if(i == 0) {
        document.getElementById('smartphone-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('tablet-category').style = "border-bottom: none";
        document.getElementById('tv-category').style = "border-bottom: solid none";
        document.getElementById('wearable-category').style = "border-bottom: none";
        document.getElementById('smartphone-products').style = "visibility: visible;";
        document.getElementById('tablet-products').style = "visibility: hidden;";
    }
    if(i == 1) {
        document.getElementById('smartphone-category').style = "border-bottom: none";
        document.getElementById('tablet-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('tv-category').style = "border-bottom: none";
        document.getElementById('wearable-category').style = "border-bottom: none";
        document.getElementById('smartphone-products').style = "visibility: hidden;";
        document.getElementById('tablet-products').style = "visibility: visible;";
    }
    if(i == 2) {
        document.getElementById('smartphone-category').style = "border-bottom: none";
        document.getElementById('tablet-category').style = "border-bottom: none";
        document.getElementById('tv-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('wearable-category').style = "border-bottom: none";
    }
    if(i == 3) {document.getElementById('smartphone-category').style = "border-bottom: none";
    document.getElementById('tablet-category').style = "border-bottom: none";
    document.getElementById('tv-category').style = "border-bottom: none";
    document.getElementById('wearable-category').style = "border-bottom: solid 3px #a7c353";
    }
}