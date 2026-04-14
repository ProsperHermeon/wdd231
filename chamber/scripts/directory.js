const directory = document.querySelector("#directory");
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

function membershipLabel(level) {
  if (level === 3) return { text: "Gold", cls: "gold" };
  if (level === 2) return { text: "Silver", cls: "silver" };
  return { text: "Member", cls: "member" };
}

function renderMembers(members) {
  if (!directory) return;
  directory.innerHTML = "";

  members.forEach((m) => {
    const li = document.createElement("li");
    li.className = "member-card";

    const badge = membershipLabel(m.membership);

    const img = document.createElement("img");
    img.src = m.image;
    img.alt = m.name + " logo";
    img.width = 120;
    img.height = 80;
    img.loading = "lazy";

    const h2 = document.createElement("h2");
    h2.textContent = m.name;

    const addr = document.createElement("p");
    addr.className = "member-detail";
    addr.textContent = m.address;

    const phone = document.createElement("p");
    phone.className = "member-detail";
    phone.textContent = m.phone;

    const link = document.createElement("p");
    link.className = "member-detail";
    const a = document.createElement("a");
    a.href = m.website;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = m.website.replace(/^https?:\/\//, "");
    link.appendChild(a);

    const span = document.createElement("span");
    span.className = "membership-badge " + badge.cls;
    span.textContent = badge.text;

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(addr);
    li.appendChild(phone);
    li.appendChild(link);
    li.appendChild(span);
    directory.appendChild(li);
  });
}

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to load member data");
    const data = await response.json();
    renderMembers(data.members);
  } catch (err) {
    if (directory) {
      directory.innerHTML =
        '<li class="member-card"><p class="member-detail">Unable to load members. Please try again later.</p></li>';
    }
  }
}

function setView(mode) {
  if (!directory || !gridBtn || !listBtn) return;
  if (mode === "list") {
    directory.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  } else {
    directory.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  }
}

if (gridBtn) {
  gridBtn.addEventListener("click", () => setView("grid"));
}
if (listBtn) {
  listBtn.addEventListener("click", () => setView("list"));
}

fetchMembers();
