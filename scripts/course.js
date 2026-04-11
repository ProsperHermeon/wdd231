/**
 * Web and Computer Programming certificate — course list, filters, credits (reduce).
 * Update `completed` to match your transcript.
 */
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    completed: false,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    completed: false,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Frontend Development I",
    credits: 2,
    completed: true,
  },
  {
    subject: "CSE",
    number: "121B",
    title: "JavaScript Language",
    credits: 2,
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Web Frontend Development II",
    credits: 3,
    completed: false,
  },
];

const filterButtons = document.querySelectorAll(".course-filters button");
const coursesContainer = document.querySelector("#courses-list");
const creditsEl = document.querySelector("#credits-total");

function formatCourseCode(course) {
  return `${course.subject} ${course.number}`;
}

function filterCourses(mode) {
  if (mode === "all") return [...courses];
  if (mode === "wdd") return courses.filter((c) => c.subject === "WDD");
  if (mode === "cse") return courses.filter((c) => c.subject === "CSE");
  return [...courses];
}

function totalCredits(list) {
  return list.reduce((sum, course) => sum + course.credits, 0);
}

function renderCourses(list) {
  if (!coursesContainer || !creditsEl) return;

  coursesContainer.innerHTML = "";

  list.forEach((course) => {
    const li = document.createElement("li");
    li.className = "course-card" + (course.completed ? " completed" : "");

    const code = document.createElement("div");
    code.className = "course-code";
    code.textContent = formatCourseCode(course);

    const title = document.createElement("p");
    title.className = "course-title";
    title.textContent = course.title;

    const meta = document.createElement("div");
    meta.className = "course-meta";
    meta.innerHTML = `<span>${course.credits} credits</span>`;

    if (course.completed) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "Completed";
      meta.appendChild(badge);
    }

    li.appendChild(code);
    li.appendChild(title);
    li.appendChild(meta);
    coursesContainer.appendChild(li);
  });

  const sum = totalCredits(list);
  creditsEl.textContent = `Total credits (shown): ${sum}`;
}

function setActiveFilter(buttonId) {
  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === buttonId);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.filter;
    if (!mode) return;
    setActiveFilter(mode);
    renderCourses(filterCourses(mode));
  });
});

setActiveFilter("all");
renderCourses(filterCourses("all"));
