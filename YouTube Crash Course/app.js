var pics = [
    "imgs/parrot_body.jpg",
    "imgs/parrot_coffee.jpg",
    "imgs/parrot_portrait.jpg"
];

var btn = document.querySelector('button');
var img = document.querySelector('img');
var counter = 0;

btn.addEventListener("click", function() {
    if(counter === pics.length) {
        counter = 0;
    }
    img.src = pics[counter];
    counter++;
});