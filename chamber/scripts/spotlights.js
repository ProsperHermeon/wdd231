const spotlightContainer = document.querySelector("#spotlights");

function membershipLabel(level) {
  if (level === 3) return { text: "Gold", cls: "gold" };
  if (level === 2) return { text: "Silver", cls: "silver" };
  return { text: "Member", cls: "member" };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function loadSpotlights() {
  try {
    const res = await fetch("data/members.json");
    if (!res.ok) throw new Error("Failed to load members");
    const data = await res.json();

    const qualified = data.members.filter(
      (m) => m.membership === 3 || m.membership === 2
    );
    const picks = shuffle(qualified).slice(0, 3);

    if (!spotlightContainer) return;
    spotlightContainer.innerHTML = "";

    picks.forEach((m) => {
      const badge = membershipLabel(m.membership);

      const card = document.createElement("div");
      card.className = "spotlight-card";

      const img = document.createElement("img");
      img.src = m.image;
      img.alt = m.name + " logo";
      img.width = 120;
      img.height = 80;
      img.loading = "lazy";

      const h3 = document.createElement("h3");
      h3.textContent = m.name;

      const phone = document.createElement("p");
      phone.className = "spotlight-detail";
      phone.textContent = m.phone;

      const addr = document.createElement("p");
      addr.className = "spotlight-detail";
      addr.textContent = m.address;

      const link = document.createElement("p");
      link.className = "spotlight-detail";
      const a = document.createElement("a");
      a.href = m.website;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = m.website.replace(/^https?:\/\//, "");
      link.appendChild(a);

      const span = document.createElement("span");
      span.className = "membership-badge " + badge.cls;
      span.textContent = badge.text;

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(phone);
      card.appendChild(addr);
      card.appendChild(link);
      card.appendChild(span);
      spotlightContainer.appendChild(card);
    });
  } catch {
    if (spotlightContainer) {
      spotlightContainer.innerHTML =
        "<p>Unable to load business spotlights.</p>";
    }
  }
}

loadSpotlights();
