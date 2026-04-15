const STORAGE_KEY = "tastebud-favorites";

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveFavorites(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addFavorite(recipe) {
  const favs = getFavorites();
  if (!favs.some((f) => f.id === recipe.id)) {
    favs.push(recipe);
    saveFavorites(favs);
  }
}

export function removeFavorite(id) {
  const favs = getFavorites().filter((f) => f.id !== id);
  saveFavorites(favs);
  return favs;
}

export function isFavorite(id) {
  return getFavorites().some((f) => f.id === id);
}
