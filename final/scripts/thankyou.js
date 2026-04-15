const params = new URLSearchParams(window.location.search);
const dl = document.getElementById("ty-details");

const fields = [
  { key: "first", label: "First Name" },
  { key: "last", label: "Last Name" },
  { key: "title", label: "Position / Title" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "organization", label: "Organization" },
  { key: "level", label: "Membership Level" },
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
