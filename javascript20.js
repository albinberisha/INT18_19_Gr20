var image_index = 0;

var slider_images = [
    "Images/Be Together.png",
    "Images/Galaxy Note9.jpg",
    "Images/The Frame TV.jpg",
    "Images/Galaxy Watch.jpg",
    "Images/Galaxy A9 quad.jpg"
];

var slider_overlays = [
    "Discover The Galaxy",
    "Galaxy Note9",
    "The Frame TV",
    "Galaxy Watch",
    "Galaxy A9"
];

var slider_overlay_descriptions = [
    "",
    "Galaxy Note9 puts powerful technology in the hands of pioneers. Innovative features make it the only phone to keep up with the next generation of achievers.",
    "Enhance your living space with a TV that adds premium style and design. The stunning Frame TV transforms into art to elevate the style of any room.",
    "Stay connected longer. The features of a smartwatch and the natural feeling of an analog watch in a single package. Galaxy Watch links you to the world around you.",
    "Take advantage of the hyper-mobile lifestyle with the colorful Galaxy A9. Easily capture beautiful photos with the world's first quad lens camera."
];

var galaxy_note9 = [
    "Images/Shop/Galaxy Note9/Ocean Blue.png",
    "Images/Shop/Galaxy Note9/Midnight Black.png",
    "Images/Shop/Galaxy Note9/Lavender Purple.png"
];

var galaxy_s9_plus = [
    "Images/Shop/Galaxy S9+/Coral Blue.png",
    "Images/Shop/Galaxy S9+/Sunrise Gold.png",
    "Images/Shop/Galaxy S9+/Midnight Black.png",
    "Images/Shop/Galaxy S9+/Lilac Purple.png",
    "Images/Shop/Galaxy S9+/Titanium Grey.png"
];

var galaxy_s9 = [
    "Images/Shop/Galaxy S9/Coral Blue.png",
    "Images/Shop/Galaxy S9/Midnight Black.png",
    "Images/Shop/Galaxy S9/Lilac Purple.png",
    "Images/Shop/Galaxy S9/Titanium Grey.png"
];

var galaxy_note8 = [
    "Images/Shop/Galaxy Note8/Midnight Black.png",
    "Images/Shop/Galaxy Note8/Maple Gold.png"
];

function select(i) {
    image_index = i;
    $("#slider-image").attr("src", slider_images[image_index]);
    $("#slider-image").css("display", "none");
    $("#slider-image").fadeIn(1000);
    $("#overlay-title").html(slider_overlays[image_index]);
    $("#overlay-description").html(slider_overlay_descriptions[image_index]);
    for (var j = 0; j <= 4; j++) {
        if (i == j)
            $("#dots").children("button").eq(j).css("background-color", "white");
        else
            $("#dots").children("button").eq(j).css("background-color", "#a7c353");
    }
}

function next() {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index++;
    if (image_index > 4)
        image_index = 0;
    image.src = slider_images[image_index];
    image.style.display = "none";
    $("#slider-image").fadeIn(1000);
    overlay_name.innerHTML = slider_overlays[image_index];
    document.getElementById("overlay-description").innerHTML = slider_overlay_descriptions[image_index];
    for (var j = 0; j <= 4; j++) {
        if (image_index == j)
            document.getElementById('dots').getElementsByTagName('button')[j].style = "background-color: white;";
        else
            document.getElementById('dots').getElementsByTagName('button')[j].style = "background-color: #a7c353;";
    }
}

function previous() {
    var image = document.getElementById('slider-image');
    var overlay_name = document.getElementById('overlay-title');
    image_index--;
    if (image_index < 0)
        image_index = 4;
    image.src = slider_images[image_index];
    image.style.display = "none";
    $("#slider-image").fadeIn(1000);
    overlay_name.innerHTML = slider_overlays[image_index];
    document.getElementById("overlay-description").innerHTML = slider_overlay_descriptions[image_index];
    for (var j = 0; j <= 4; j++) {
        if (image_index == j)
            document.getElementById('dots').getElementsByTagName('button')[j].style = "background-color: white;";
        else
            document.getElementById('dots').getElementsByTagName('button')[j].style = "background-color: #a7c353;";
    }
}

function selectProductsCategory(i) {
    if (i == 0) {
        document.getElementById('smartphone-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('tablet-category').style = "border-bottom: none";
        document.getElementById('tv-category').style = "border-bottom: solid none";
        document.getElementById('wearable-category').style = "border-bottom: none";
        document.getElementById('smartphone-products').style = "visibility: visible;";
        document.getElementById('tablet-products').style = "visibility: hidden;";
        document.getElementById('tv-products').style = "visibility: hidden;";
        document.getElementById('wearable-products').style = "visibility: hidden;";
    }
    if (i == 1) {
        document.getElementById('smartphone-category').style = "border-bottom: none";
        document.getElementById('tablet-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('tv-category').style = "border-bottom: none";
        document.getElementById('wearable-category').style = "border-bottom: none";
        document.getElementById('smartphone-products').style = "visibility: hidden;";
        document.getElementById('tablet-products').style = "visibility: visible;";
        document.getElementById('tv-products').style = "visibility: hidden;";
        document.getElementById('wearable-products').style = "visibility: hidden;";
    }
    if (i == 2) {
        document.getElementById('smartphone-category').style = "border-bottom: none";
        document.getElementById('tablet-category').style = "border-bottom: none";
        document.getElementById('tv-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('wearable-category').style = "border-bottom: none";
        document.getElementById('smartphone-products').style = "visibility: hidden;";
        document.getElementById('tablet-products').style = "visibility: hidden;";
        document.getElementById('tv-products').style = "visibility: visible;";
        document.getElementById('wearable-products').style = "visibility: hidden;";
    }
    if (i == 3) {
        document.getElementById('smartphone-category').style = "border-bottom: none";
        document.getElementById('tablet-category').style = "border-bottom: none";
        document.getElementById('tv-category').style = "border-bottom: none";
        document.getElementById('wearable-category').style = "border-bottom: solid 3px #a7c353";
        document.getElementById('smartphone-products').style = "visibility: hidden;";
        document.getElementById('tablet-products').style = "visibility: hidden;";
        document.getElementById('tv-products').style = "visibility: hidden;";
        document.getElementById('wearable-products').style = "visibility: visible;";
    }
}

function selectProductColor(i, colors, id) {
    document.getElementById(id).src = colors[i];
    if (id == 'galaxy-note9-image') {
        for (var j = 0; j < colors.length; j++) {
            if (i == j)
                document.getElementsByClassName('product-colors')[0].getElementsByTagName('button')[j].style.backgroundColor = "white";
            else
                document.getElementsByClassName('product-colors')[0].getElementsByTagName('button')[j].style.backgroundColor = document.getElementsByClassName('product-colors')[0].getElementsByTagName('button')[j].style.borderColor;
        }
    }
    if (id == 'galaxy-s9-plus-image') {
        for (var j = 0; j < colors.length; j++) {
            if (i == j)
                document.getElementsByClassName('product-colors')[1].getElementsByTagName('button')[j].style.backgroundColor = "white";
            else
                document.getElementsByClassName('product-colors')[1].getElementsByTagName('button')[j].style.backgroundColor = document.getElementsByClassName('product-colors')[1].getElementsByTagName('button')[j].style.borderColor;
        }
    }
    if (id == 'galaxy-s9-image') {
        for (var j = 0; j < colors.length; j++) {
            if (i == j)
                document.getElementsByClassName('product-colors')[2].getElementsByTagName('button')[j].style.backgroundColor = "white";
            else
                document.getElementsByClassName('product-colors')[2].getElementsByTagName('button')[j].style.backgroundColor = document.getElementsByClassName('product-colors')[2].getElementsByTagName('button')[j].style.borderColor;
        }
    }
    if (id == 'galaxy-note8-image') {
        for (var j = 0; j < colors.length; j++) {
            if (i == j)
                document.getElementsByClassName('product-colors')[3].getElementsByTagName('button')[j].style.backgroundColor = "white";
            else
                document.getElementsByClassName('product-colors')[3].getElementsByTagName('button')[j].style.backgroundColor = document.getElementsByClassName('product-colors')[3].getElementsByTagName('button')[j].style.borderColor;
        }
    }
}

function selectProductsSection(id, product, i) {
    $('#'+id).slideDown(500);
    $('#'+id).siblings().slideUp(500);
    $("#products-main-container #"+product+" li").eq(i).css("border-bottom", "2px solid #a7c353");
    $("#products-main-container #"+product+" li").eq(i).siblings().css("border-bottom", "none");
}

$(function() {
    $("#highlights-a9-image-container").mouseenter(function() {
        $("#highlights-a9-image-container").children("img").css("transform", "rotate(-45deg)");
    });
    $("#highlights-a9-image-container").mouseleave(function() {
        $("#highlights-a9-image-container").children("img").css("transform", "rotate(0deg)");
    });
});