let css = document.querySelector('h3');
// let [color1, color2] = document.querySelectorAll('input');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('1');

color1.addEventListener('input', () => {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    console.log(body.style.background);
});

color2.addEventListener('input', () => {
    console.log(color2.value);
    // body.style.background = 'red';
    body.style.background =
        'linear-gradient(to right,'
        + color1.value
        + ', '
        + color2.value
        + ')';
    // body.style.background = color2.value;
    console.log(body.style.background);
});