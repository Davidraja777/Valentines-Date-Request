const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
  constructor(x, y, size, speedX, speedY, opacity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.opacity = opacity;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.x - this.size,
      this.y + this.size / 3,
      this.x,
      this.y + this.size
    );
    ctx.bezierCurveTo(
      this.x + this.size,
      this.y + this.size / 3,
      this.x + this.size / 2,
      this.y - this.size / 2,
      this.x,
      this.y
    );
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= 0.01;
  }
}

function createHeart(x, y) {
  const size = Math.random() * 10 + 5;
  const speedX = (Math.random() - 0.5) * 2;
  const speedY = Math.random() * -2;
  const opacity = 1;
  hearts.push(new Heart(x, y, size, speedX, speedY, opacity));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    if (heart.opacity <= 0) {
      hearts.splice(index, 1);
    } else {
      heart.update();
      heart.draw();
    }
  });
  requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', (e) => {
  createHeart(e.clientX, e.clientY);
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function playSadSong() {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
      <head>
        <title>Rejection Video</title>
        <style>
          body {
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          video {
            width: 80%;
            max-width: 800px;
            border: 3px solid white;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <video controls autoplay>
          <source src="Rejected.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </body>
      </html>
    `);
  }

  function showLoveLetter() {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
      <head>
        <title>Our First Date</title>
        <style>
          body {
            background: url('Heart.png') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          h1 {
            color: #b91c1c;
          }
          p {
            font-size: 1.5rem;
            color: #333;
          }
          a {
            color: #b91c1c;
            font-weight: bold;
            text-decoration: none;
          }
          .confirm-button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1.2rem;
            color: white;
            background-color: #25D366;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .confirm-button:hover {
            background-color: #1EBE5D;
          }
        </style>
      </head>
      <body>
        <h1>Dear Wani,</h1>
        <p>I am so excited to meet you for our first date!</p>
        <p>Let's have an amazing time together at:</p>
        <p><strong>WoodFire</strong></p>
        <p>📍 <a href="https://www.google.com/maps/dir/1.3172736,103.7172736/woodfire+permas/@1.4058775,103.6778836,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da6d00122cb849:0x12b8101755b70fb5!2m2!1d103.8123917!2d1.4968024?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Click here for directions</a></p>
        <p>📅 Date: <strong>29th January</strong></p>
        <p>⏰ Time: <strong>7:00 PM</strong></p>
        <p>Let's celebrate this moment together! ❤️</p>
  
        <button class="confirm-button" onclick="confirmDate()">Confirm Date via WhatsApp</button>
  
        <script>
          function confirmDate() {
            const phoneNumber = "YOUR_PHONE_NUMBER";  // Replace with your WhatsApp number
            const message = "Hi, I've accepted your date!";
            const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
            window.open(whatsappURL, "_blank");
          }
        </script>
      </body>
      </html>
    `);
  }

animate();
