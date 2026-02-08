/* ===== VIDEO LIST (PASTE FULL DRIVE LINKS) ===== */
const videos = [
  {
    title: "PA PLAYER Video 1",
    link: "https://drive.google.com/file/d/1MKcxevLV9Ai1MvZjI64G8nqvPCoElY4g/view?usp=drivesdk"
  },
  {
    title: "PA PLAYER Video 2",
    link: "https://drive.google.com/file/d/PUT_SECOND_FILE_ID/view"
  },
  {
    title: "PA PLAYER Video 3",
    link: "https://drive.google.com/file/d/PUT_THIRD_FILE_ID/view"
  }
];

/* ===== HELPERS ===== */
function extractFileId(url) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : null;
}

const grid = document.getElementById("videoGrid");

/* ===== BUILD CARDS ===== */
videos.forEach(v => {
  const fileId = extractFileId(v.link);
  if (!fileId) return;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img loading="lazy"
      src="https://drive.google.com/thumbnail?id=${fileId}&sz=w1000">
    <div class="info">
      <div class="title">${v.title}</div>
    </div>
  `;

  card.onclick = () => playVideo(fileId);
  grid.appendChild(card);
});

/* ===== VIDEO PLAYER ===== */
function playVideo(fileId) {
  modal.style.display = "flex";
  player.src = `https://drive.google.com/file/d/${fileId}/preview`;
}

modal.onclick = () => {
  modal.style.display = "none";
  player.src = "";
};

/* ===== INTERACTIVE BACKGROUND ===== */
const bg = document.querySelector(".bg");
const intro = document.getElementById("intro");

window.addEventListener("mousemove", e => {
  bg.style.setProperty("--x", e.clientX + "px");
  bg.style.setProperty("--y", e.clientY + "px");

  if (intro) {
    intro.style.setProperty("--x", e.clientX + "px");
    intro.style.setProperty("--y", e.clientY + "px");
  }
});

/* ===== PARTICLES ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function initParticles() {
  const count = window.innerWidth < 600 ? 25 : 60;
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 1
  }));
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

resize();
initParticles();
animate();

window.addEventListener("resize", () => {
  resize();
  initParticles();
});