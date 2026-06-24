const cursor = document.querySelector('.div2');

let mouseX = 0;
let mouseY = 0;
let x = 0;
let y = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {    
    x += (mouseX - x) * 0.15;
    y += (mouseY - y) * 0.15;

    cursor.style.transform =
        `translate(${x - 40}px, ${y - 40}px)`;

    requestAnimationFrame(animate);
}

animate();