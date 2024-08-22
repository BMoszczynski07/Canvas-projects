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

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw = () => {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  };

  update = () => {
    this.draw();
  };
}

let rect;
const animate = () => {
  requestAnimationFrame(animate);
  c.fillStyle = "#1a1a23";
  c.fillRect(0, 0, canvas.width, canvas.height);

  const blueRectX = canvas.width / 2 - 50;
  const blueRectY = canvas.height / 2 - 50;

  // red rectangle
  c.fillStyle = "#e86262";
  c.fillRect(mouse.x, mouse.y, 100, 100);

  // blue rectangle
  rect = new Rectangle(
    canvas.width / 2 - 50,
    canvas.height / 2 - 50,
    100,
    100,
    "#92abea"
  );

  if (
    mouse.x + 100 >= blueRectX &&
    mouse.x <= blueRectX + 100 &&
    mouse.y + 100 >= blueRectY &&
    mouse.y <= blueRectY + 100
  ) {
    rect.color = "#fff";
  }

  rect.update();
};

animate();
