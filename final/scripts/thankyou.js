const params = new URLSearchParams(window.location.search);
const dl = document.getElementById("ty-details");

const fields = [
  { key: "first", label: "First Name" },
  { key: "last", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "message", label: "Message" },
  { key: "timestamp", label: "Submitted" },
];

if (dl) {
  let html = "";
  fields.forEach((field) => {
    const value = params.get(field.key) || "—";
    html += `<dt>${field.label}</dt><dd>${value}</dd>`;
  });
  dl.innerHTML = html;
}
