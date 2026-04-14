const API_KEY = "c9ac2361422419bea42e1e366cd9c973";
const LAT = 33.24;
const LON = -96.80;
const UNITS = "imperial";

const currentTempEl = document.querySelector("#current-temp");
const currentDescEl = document.querySelector("#current-desc");
const weatherDisplay = document.querySelector("#weather-display");
const forecastContainer = document.querySelector("#forecast");

function capitalize(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

async function fetchWeather() {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather API error");
    const data = await res.json();

    if (currentTempEl) {
      currentTempEl.textContent = `${Math.round(data.main.temp)}°F`;
    }
    if (currentDescEl) {
      currentDescEl.textContent = capitalize(data.weather[0].description);
    }
    if (weatherDisplay) {
      const icon = document.createElement("img");
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.alt = data.weather[0].description;
      icon.width = 80;
      icon.height = 80;
      icon.loading = "lazy";
      weatherDisplay.prepend(icon);
    }
  } catch {
    if (currentTempEl) currentTempEl.textContent = "N/A";
    if (currentDescEl) currentDescEl.textContent = "Unable to load weather.";
  }
}

async function fetchForecast() {
  const url =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Forecast API error");
    const data = await res.json();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    const seen = new Set();

    for (const entry of data.list) {
      const entryDate = new Date(entry.dt * 1000);
      const dateKey = entryDate.toDateString();

      if (entryDate <= today) continue;
      if (seen.has(dateKey)) continue;

      const hour = entryDate.getHours();
      if (hour < 11 || hour > 15) continue;

      seen.add(dateKey);
      days.push({
        day: entryDate.toLocaleDateString("en-US", { weekday: "long" }),
        temp: Math.round(entry.main.temp),
      });

      if (days.length >= 3) break;
    }

    if (forecastContainer) {
      forecastContainer.innerHTML = "";
      days.forEach((d) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${d.day}:</strong> ${d.temp}°F`;
        forecastContainer.appendChild(p);
      });
    }
  } catch {
    if (forecastContainer) {
      forecastContainer.innerHTML = "<p>Unable to load forecast.</p>";
    }
  }
}

fetchWeather();
fetchForecast();
