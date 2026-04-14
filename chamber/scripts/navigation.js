const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#primary-nav");
const BP = 640;

function sync() {
  if (!menuButton || !nav) return;
  if (window.innerWidth >= BP) {
    nav.removeAttribute("aria-hidden");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.classList.remove("open");
    nav.classList.remove("open");
  } else {
    const open = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", String(open));
    nav.setAttribute("aria-hidden", String(!open));
  }
}

function toggle() {
  if (!menuButton || !nav) return;
  if (window.innerWidth >= BP) {
    sync();
    return;
  }
  const willOpen = !nav.classList.contains("open");
  menuButton.classList.toggle("open", willOpen);
  nav.classList.toggle("open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  nav.setAttribute("aria-hidden", String(!willOpen));
}

if (menuButton && nav) {
  menuButton.addEventListener("click", toggle);
  window.addEventListener("resize", sync);
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < BP) {
        menuButton.classList.remove("open");
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-hidden", "true");
      }
    });
  });
  sync();
}
