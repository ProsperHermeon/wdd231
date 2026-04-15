const yearEl = document.querySelector("#currentyear");
const lastModEl = document.getElementById("lastModified");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (lastModEl) {
  lastModEl.textContent = "Last modified: " + document.lastModified;
}
