import { addRowToTable } from "./src/js/notes.js";
import "./src/js/newNote.js";
import "./src/js/editNote.js";

window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const main = document.querySelector(".main");

  setTimeout(function () {
    loading.style.display = "none";
    main.style.display = "block";
  }, 3000);
});

export let notes;

fetch("./src/json/notes.json")
  .then((response) => response.json())
  .then((data) => {
    notes = data.active;
  })
  .catch((error) => {
    console.error("Помилка завантаження файлу:", error);
  });

setTimeout(() => {
  notes.forEach((item) => {
    addRowToTable(item);
  });
}, 3000);


