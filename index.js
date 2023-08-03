import {
  addRowActiveTable,
  addRowStatisticTable,
  updateDomNotes,
} from "./src/js/notes.js";
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

    statistic.forEach((item) => {
      addRowStatisticTable(item);
    });
  }, 3000);
});

export let notes;
export let archiveNotes = [];
export let statistic = [
  {
    category: "Random Thought",
    icon: "https://img.icons8.com/material-outlined/24/thinking-bubble.png",
    active: 0,
    archived: 0,
  },
  {
    category: "Task",
    icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
    active: 0,
    archived: 0,
  },
  {
    category: "Idea",
    icon: "https://img.icons8.com/material-outlined/24/idea--v1.png",
    active: 0,
    archived: 0,
  },
];

// statistic.forEach((item) => {
//   notes.forEach((note) => {
//     if (note.category === item.category) {
//       item.active++;
//     }
//   });

//   archiveNotes.forEach((note) => {
//     if (note.category === item.category) {
//       item.active++;
//     }
//   });
// });

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
    addRowActiveTable(item);
    console.log(item)
  });

  statistic.forEach((item) => {
    // console.log(item)
    notes.forEach((note) => {
      // console.log(note, '----', note[Object.keys(note)[0]])
      if (note[Object.keys(note)[0]].category === item.category) {
        item.active = item.active + 1;
      }
    });

    archiveNotes.forEach((note) => {
      if (note[Object.keys(note)[0]].category === item.category) {
        item.archived = item.archived + 1;
      }
    });

    addRowStatisticTable(item);
  });
}, 3000);
