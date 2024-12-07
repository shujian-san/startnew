//Action here...
const hTwo = document.querySelector('h2');
const box = document.querySelectorAll('.btn');
const body = document.querySelector('body');

let colorFlip = (name) => {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}