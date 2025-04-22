// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const animateBtn = document.getElementById('animateBtn');
const animatedDiv = document.getElementById('animatedDiv');

animateBtn.addEventListener('click', () => {
    let position = 0;
    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position++;
            animatedDiv.style.left = position + 'px';
        }
    }, 5);
});
let box = document.getElementById("box");
let pos = 0;

function moveBox() {
    if (pos < 300) {
        pos++;
        box.style.left = pos + "px";
        createTrail(pos);
        requestAnimationFrame(moveBox);
    }
}

function createTrail(x) {
    let trail = document.createElement("div");
    trail.style.width = "10px";
    trail.style.height = "10px";
    trail.style.borderRadius = "50%";
    trail.style.position = "absolute";
    trail.style.left = (box.offsetLeft + 45) + "px";
    trail.style.top = (box.offsetTop + 45) + "px";
    trail.style.backgroundColor = `hsl(${x * 2}, 100%, 50%)`;
    trail.style.opacity = 0.7;
    trail.style.transition = "all 1s ease-out";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = 0;
        trail.style.transform = "scale(0.5)";
    }, 10);

    setTimeout(() => {
        document.body.removeChild(trail);
    }, 1000);
}

window.onload = moveBox;
// Every few seconds, change the glow-circle colors
setInterval(() => {
    document.querySelectorAll('.glow-circle').forEach(circle => {
        circle.style.background = `radial-gradient(circle, ${randomColor()}, rgba(255,255,255,0))`;
    });
}, 3000);

function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 75%)`;
}

