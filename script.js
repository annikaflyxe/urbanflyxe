function changeBg() {
  const images = [
    "url(img/img2.jpg)",
    "url(img/img3.jpg)",
    "url(img/img4.jpg)",
  ];

  const body = document.querySelector("body");
  const bg = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = bg;
}

setInterval(changeBg, 3000);
