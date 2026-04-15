import places from "../data/discover.mjs";

// === BUILD CARDS ===
const gallery = document.getElementById("discover-gallery");

if (gallery) {
  places.forEach((place, i) => {
    const card = document.createElement("div");
    card.className = "discover-card";

    const h2 = document.createElement("h2");
    h2.textContent = place.name;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = place.image;
    img.alt = place.name;
    img.width = 300;
    img.height = 200;
    img.loading = "lazy";
    figure.appendChild(img);

    const addr = document.createElement("address");
    addr.textContent = place.address;

    const desc = document.createElement("p");
    desc.textContent = place.description;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "learn-more-btn";
    btn.textContent = "Learn More";

    card.appendChild(h2);
    card.appendChild(figure);
    card.appendChild(addr);
    card.appendChild(desc);
    card.appendChild(btn);
    gallery.appendChild(card);
  });
}

// === VISIT MESSAGE (localStorage) ===
const visitMsg = document.getElementById("visit-message");

if (visitMsg) {
  const now = Date.now();
  const lastVisit = localStorage.getItem("discover-last-visit");

  if (!lastVisit) {
    visitMsg.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const diff = now - Number(lastVisit);
    const dayMs = 86400000;
    const days = Math.floor(diff / dayMs);

    if (days < 1) {
      visitMsg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      visitMsg.textContent = "You last visited 1 day ago.";
    } else {
      visitMsg.textContent = `You last visited ${days} days ago.`;
    }
  }

  localStorage.setItem("discover-last-visit", String(now));
}
