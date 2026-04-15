import recipes from "../data/recipes.mjs";
import { getFavorites, removeFavorite, saveFavorites } from "./storage.mjs";
import { buildCard, attachCardListeners } from "./card.mjs";

const grid = document.getElementById("fav-grid");
const emptyMsg = document.getElementById("fav-empty");
const clearBtn = document.getElementById("clear-all");

function render() {
  const favs = getFavorites();

  if (!favs.length) {
    if (grid) grid.innerHTML = "";
    if (emptyMsg) emptyMsg.hidden = false;
    if (clearBtn) clearBtn.hidden = true;
    return;
  }

  if (emptyMsg) emptyMsg.hidden = true;
  if (clearBtn) clearBtn.hidden = false;

  if (grid) {
    grid.innerHTML = favs
      .map((r) => buildCard(r, { showRemove: true }))
      .join("");
  }
}

function handleRemove(id) {
  removeFavorite(id);
  render();
}

if (grid) {
  attachCardListeners(grid, recipes, handleRemove);
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    saveFavorites([]);
    render();
  });
}

render();
