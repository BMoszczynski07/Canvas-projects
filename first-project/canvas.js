console.log("r/place");

let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(300, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(100, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "rgba(155,155,155)";
c.stroke();

// Arc / circle
for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    c.stroke();
}