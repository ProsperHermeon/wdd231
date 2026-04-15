import recipes from "../data/recipes.mjs";
import { buildCard, attachCardListeners } from "./card.mjs";

const grid = document.getElementById("featured-grid");
const tsField = document.getElementById("timestamp");

if (tsField) {
  tsField.value = new Date().toISOString();
}

async function loadFeatured() {
  try {
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 3);

    if (grid) {
      grid.innerHTML = featured.map((r) => buildCard(r)).join("");
      attachCardListeners(grid, recipes);
    }
  } catch (error) {
    if (grid) {
      grid.innerHTML = `<p>Could not load featured recipes. Please try again later.</p>`;
    }
  }
}

loadFeatured();
