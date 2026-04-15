import { addFavorite, removeFavorite, isFavorite } from "./storage.mjs";

export function buildCard(recipe, options = {}) {
  const { showRemove = false } = options;
  const saved = isFavorite(recipe.id);

  const html = `
    <div class="recipe-card" data-id="${recipe.id}">
      <img
        src="${recipe.image}"
        alt="${recipe.name}"
        width="400"
        height="267"
        loading="lazy"
      />
      <div class="card-body">
        <h3>${recipe.name}</h3>
        <div class="card-meta">
          <span>${recipe.cuisine}</span>
          <span>&bull;</span>
          <span>${recipe.category}</span>
          <span>&bull;</span>
          <span>${recipe.time}</span>
        </div>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-actions">
          <button type="button" class="btn-sm btn-details" data-id="${recipe.id}">Details</button>
          ${
            showRemove
              ? `<button type="button" class="btn-sm btn-remove" data-id="${recipe.id}">Remove</button>`
              : `<button type="button" class="btn-sm btn-fav${saved ? " saved" : ""}" data-id="${recipe.id}">${saved ? "♥ Saved" : "♡ Save"}</button>`
          }
        </div>
      </div>
    </div>
  `;

  return html;
}

export function attachCardListeners(container, allRecipes, onRemove) {
  container.addEventListener("click", (e) => {
    const detailBtn = e.target.closest(".btn-details");
    if (detailBtn) {
      const id = Number(detailBtn.dataset.id);
      const recipe = allRecipes.find((r) => r.id === id);
      if (recipe) openModal(recipe);
      return;
    }

    const favBtn = e.target.closest(".btn-fav");
    if (favBtn) {
      const id = Number(favBtn.dataset.id);
      const recipe = allRecipes.find((r) => r.id === id);
      if (!recipe) return;

      if (isFavorite(id)) {
        removeFavorite(id);
        favBtn.classList.remove("saved");
        favBtn.textContent = "♡ Save";
      } else {
        addFavorite(recipe);
        favBtn.classList.add("saved");
        favBtn.textContent = "♥ Saved";
      }
      return;
    }

    const removeBtn = e.target.closest(".btn-remove");
    if (removeBtn && onRemove) {
      const id = Number(removeBtn.dataset.id);
      onRemove(id);
    }
  });
}

function openModal(recipe) {
  const dialog = document.getElementById("recipe-modal");
  if (!dialog) return;

  document.getElementById("modal-title").textContent = recipe.name;

  const img = document.getElementById("modal-img");
  img.src = recipe.image;
  img.alt = recipe.name;

  const details = document.getElementById("modal-details");
  details.innerHTML = `
    <dt>Cuisine</dt><dd>${recipe.cuisine}</dd>
    <dt>Category</dt><dd>${recipe.category}</dd>
    <dt>Cook Time</dt><dd>${recipe.time}</dd>
  `;

  const ingredients = document.getElementById("modal-ingredients");
  ingredients.innerHTML = recipe.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");

  document.getElementById("modal-desc").textContent = recipe.description;

  dialog.showModal();
}
