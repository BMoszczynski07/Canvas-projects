const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const animate = () => {
  requestAnimationFrame(animate);
  c.fillStyle = "#1a1a23";
  c.fillRect(0, 0, canvas.width, canvas.height);

  const blueRectX = canvas.width / 2 - 50;
  const blueRectY = canvas.height / 2 - 50;
  if (
    mouse.x + 100 >= blueRectX &&
    mouse.x <= blueRectX + 100 &&
    mouse.y + 100 >= blueRectY &&
    mouse.y <= blueRectY + 100
  ) {
    console.log("colliding");
  }

  // red rectangle
  c.fillStyle = "#e86262";
  c.fillRect(mouse.x, mouse.y, 100, 100);

  // blue rectangle
  c.fillStyle = "#92abea";
  c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
};

animate();
