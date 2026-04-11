/**
 * Responsive navigation: hamburger toggle on small screens.
 */
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#primary-nav");

const BREAKPOINT = 640;

function syncNavAccessibility() {
  if (!menuButton || !nav) return;
  if (window.innerWidth >= BREAKPOINT) {
    nav.removeAttribute("aria-hidden");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.classList.remove("open");
    nav.classList.remove("open");
  } else {
    const isOpen = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    nav.setAttribute("aria-hidden", String(!isOpen));
  }
}

function setNavOpen(isOpen) {
  if (!menuButton || !nav) return;
  if (window.innerWidth >= BREAKPOINT) {
    syncNavAccessibility();
    return;
  }
  menuButton.classList.toggle("open", isOpen);
  nav.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  nav.setAttribute("aria-hidden", String(!isOpen));
}

function toggleNav() {
  const isOpen = !nav.classList.contains("open");
  setNavOpen(isOpen);
}

if (menuButton && nav) {
  menuButton.addEventListener("click", toggleNav);

  window.addEventListener("resize", () => {
    syncNavAccessibility();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < BREAKPOINT) {
        setNavOpen(false);
      }
    });
  });

  syncNavAccessibility();
}
