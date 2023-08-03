import { addRowToTable, updateDomNotes } from "./src/js/notes.js";
import "./src/js/newNote.js";
import "./src/js/editNote.js";
import "./src/js/deleteNotes.js";
import "./src/js/archiveNote.js";
import { deleteItemFromNotes } from "./src/js/deleteNotes.js";
import { editNote, getFormFromItem } from "./src/js/editNote.js";
import { archiveNote } from "./src/js/archiveNote.js";

export const newNoteContainer = document.querySelector(".new-note");
export const buttonSaveEditNote = document.querySelector(".button-edit");

window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const main = document.querySelector(".main");

  setTimeout(function () {
    loading.style.display = "none";
    main.style.display = "block";

    updateDomNotes();
  }, 3000);


});

export let notes;
export let archiveNotes = [];

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

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     const rows = document.querySelectorAll(".table__row");

//     for (const row of rows) {
//       let itemId = row.id;

//       const editButton = row.querySelector(".button_edit");
//       const archiveButton = row.querySelector(".button_archive");
//       const deleteButton = row.querySelector(".button_delete");

//       buttonSaveEditNote.addEventListener("click", editNote);

//       editButton.addEventListener("click", () => {
//         console.log('click')
//         getFormFromItem(itemId);
//       });

//       archiveButton.addEventListener("click", () => {
//         archiveNote(itemId);
//       });

//       deleteButton.addEventListener("click", () => {
//         deleteItemFromNotes(itemId);
//       });
//     }
//   }, 3000);
// });


