import { notes } from "../../index.js";
import { createNote } from "./newNote.js";
const newNoteContainer = document.querySelector(".new-note");
const buttonSaveEditNote = document.querySelector(".button-edit");


function deleteItemFromNotes(itemId) {
  const index = notes.findIndex((obj) => Object.keys(obj)[0] === itemId);

  if (index !== -1) {
    notes.splice(index, 1);
  }
}

function populateFormWithItem(itemId) {
  const item = notes.find((obj) => Object.keys(obj)[0] === itemId);
  deleteItemFromNotes(itemId);

  if (item) {
    const itemData = item[itemId];
    const nameInput = document.querySelector(".new-note__name");
    const categorySelect = document.querySelector(".new-note__category");
    const textArea = document.querySelector(".new-note__text");

    nameInput.value = itemData.name;
    categorySelect.value = itemData.category;
    textArea.value = itemData.content;
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    const rows = document.querySelectorAll(".table__row");

    rows.forEach((row) => {
      const editButton = row.querySelector(".button_edit");

      editButton.addEventListener("click", () => {
        newNoteContainer.style.display = "flex";
        buttonSaveEditNote.style.display = "block";

        const itemId = row.id;
        populateFormWithItem(itemId);
      });
    });
  }, 3000);
});

buttonSaveEditNote.addEventListener("click", createNote);