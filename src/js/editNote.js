import {
  buttonSaveEditNote,
  newNoteContainer,
  notes,
  statistic,
} from "../../index.js";
import { updateTableWithData } from "./notes.js";

export function getFormFromItem(itemId) {
  const item = notes.find((obj) => Object.keys(obj)[0] === itemId);

  if (item) {
    const itemData = item[itemId];
    const formInput = document.querySelector(".new-note__form");
    const nameInput = document.querySelector(".new-note__name");
    const categorySelect = document.querySelector(".new-note__category");
    const textArea = document.querySelector(".new-note__text");

    formInput.id = itemId;
    nameInput.value = itemData.name;
    categorySelect.value = itemData.category;
    textArea.value = itemData.content;
  }

  newNoteContainer.style.display = "flex";
  buttonSaveEditNote.style.display = "block";
}

export function editNote() {
  const itemId = document.querySelector(".new-note__form").id;
  const index = notes.findIndex((obj) => Object.keys(obj)[0] === itemId);

  const name = document.querySelector(".new-note__name").value;
  const category = document.querySelector(".new-note__category").value;
  const content = document.querySelector(".new-note__text").value;

  if (name === "" || category === "" || content === "") {
    window.alert("You should add text");
  } else {
    let icon = "";
    switch (category) {
      case "Idea":
        icon = "https://img.icons8.com/material-outlined/24/idea--v1.png";
        break;
      case "Task":
        icon =
          "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png";
        break;
      case "Random Thought":
        icon =
          "https://img.icons8.com/material-outlined/24/thinking-bubble.png";
        break;
      default:
        console.log(`Mistake.`);
    }

    document.querySelector(".new-note__name").value = "";
    document.querySelector(".new-note__text").value = "";

    notes[index][itemId] = {
      ...notes[index][itemId],
      category,
      content,
      icon,
      name,
    };

    document.querySelector(".new-note__name").value = "";
    document.querySelector(".new-note__category").value = "choosed";
    document.querySelector(".new-note__text").value = "";
    newNoteContainer.style.display = "none";
    buttonSaveEditNote.style.display = "none";

    updateTableWithData(notes, statistic);
  }
}
