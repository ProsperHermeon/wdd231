/**
 * Footer: current year and document last modified.
 */
const yearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (lastModifiedEl) {
  lastModifiedEl.innerHTML = document.lastModified;
}
