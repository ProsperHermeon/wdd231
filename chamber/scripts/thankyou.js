const params = new URLSearchParams(window.location.search);
const container = document.getElementById("ty-details");

const fields = [
  { key: "first-name", label: "First Name" },
  { key: "last-name", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "organization", label: "Organization" },
  { key: "timestamp", label: "Application Date" },
];

if (container) {
  fields.forEach((f) => {
    const val = params.get(f.key);
    if (!val) return;

    const dt = document.createElement("dt");
    dt.textContent = f.label;

    const dd = document.createElement("dd");
    dd.textContent = val;

    container.appendChild(dt);
    container.appendChild(dd);
  });
}
