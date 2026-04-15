import recipes from "../data/recipes.mjs";
import { buildCard, attachCardListeners } from "./card.mjs";

const grid = document.getElementById("recipe-grid");
const countEl = document.getElementById("result-count");
const filterBar = document.querySelector(".filter-bar");
const searchInput = document.getElementById("search-input");
const modal = document.getElementById("recipe-modal");
const closeBtn = modal ? modal.querySelector(".modal-close") : null;

let currentCategory = "all";
let searchTerm = "";

async function loadRecipes() {
  try {
    renderList(recipes);
  } catch (error) {
    if (grid) {
      grid.innerHTML = `<p>Error loading recipes. Please refresh the page.</p>`;
    }
  }
}

function getFiltered(list) {
  let filtered = list;

  if (currentCategory !== "all") {
    filtered = filtered.filter((r) => r.category === currentCategory);
  }

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q)
    );
  }

  return filtered;
}

function renderList(allRecipes) {
  const filtered = getFiltered(allRecipes);

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${allRecipes.length} recipes`;
  }

  if (grid) {
    grid.innerHTML = filtered.length
      ? filtered.map((r) => buildCard(r)).join("")
      : `<p class="empty-msg">No recipes match your criteria.</p>`;
  }
}

if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderList(recipes);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    renderList(recipes);
  });
}

if (grid) {
  attachCardListeners(grid, recipes);
}

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
}

loadRecipes();
