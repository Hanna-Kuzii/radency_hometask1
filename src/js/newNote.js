import { notes, statistic  } from "../../index.js";
import { addRowActiveTable, updateDomNotes, updateTableWithData } from "./notes.js";

const buttonNewNote = document.querySelector(".create-button");

const newNoteContainer = document.querySelector(".new-note");
const buttonAddNewNote = document.querySelector(".button-add");
const buttonSaveEditNote = document.querySelector(".button-edit");


const form = document.querySelector(".new-note__form");

buttonNewNote.addEventListener("click", function () {
  newNoteContainer.style.display = "flex";
  buttonAddNewNote.style.display = "block";
  // buttonSaveEditNote.style.display = "none";
});

export function createNote(event) {
  const name = document.querySelector(".new-note__name").value;
  const category = document.querySelector(".new-note__category").value;
  const content = document.querySelector(".new-note__text").value;
  let icon = "";
  switch (category) {
    case "Idea":
      icon = "https://img.icons8.com/material-outlined/24/idea--v1.png";
      break;
    case "Task":
      icon = "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png";
      break;
    case "Random Thought":
      icon = "https://img.icons8.com/material-outlined/24/thinking-bubble.png";
      break;
    default:
      console.log(`Mistake.`);
  }
  const id = Date.now();
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const created = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  document.querySelector(".new-note__name").value = '';
  // document.querySelector("#exampleFormControlSelect1").value = '';
  document.querySelector(".new-note__text").value = '';

  const newNote = {
    icon,
    name,
    created,
    category,
    content,
    dates: "",
  };

  console.log(newNote);
  notes.push({id: newNote});
  console.log(notes);

  event.preventDefault();
  newNoteContainer.style.display = "none";
  buttonAddNewNote.style.display = "none";
  // buttonSaveEditNote.style.display = "none";
  
  updateTableWithData(notes, statistic);
  // updateDomNotes();
}


buttonAddNewNote.addEventListener("click", createNote);
