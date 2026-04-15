// Timestamp: set hidden field to current date/time when page loads
const tsField = document.getElementById("timestamp");
if (tsField) {
  tsField.value = new Date().toISOString();
}

// Modals: open/close using <dialog> API
document.querySelectorAll(".level-info-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = document.getElementById(btn.dataset.modal);
    if (dialog) dialog.showModal();
  });
});

document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = btn.closest("dialog");
    if (dialog) dialog.close();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
});
