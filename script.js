function changeBg() {
  const images = [
    "url(img/img2.jpg)",
    "url(img/img3.jpg)",
    "url(img/img4.jpg)",
    "url(img/img5.jpg)",
    "url(img/img6.jpg)",
    "url(img/img7.jpg)",
    "url(img/img8.jpg)",
    "url(img/img9.jpg)",
    "url(img/img10.jpg)",
  ];

  const body = document.querySelector("body");
  const bg = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = bg;
}

setInterval(changeBg, 4000);
