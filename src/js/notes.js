import { archiveNotes, buttonSaveEditNote } from "../../index.js";
import { archiveNote } from "./archiveNote.js";
import { addRowArchiveTable, tableBodyArchive, updateArchivedNotes } from "./archivedNotes.js";
import { deleteItemFromNotes } from "./deleteNotes.js";
import { editNote, getFormFromItem } from "./editNote.js";


const tableBodyActive = document.querySelector(".active__body");

export function addRowActiveTable(item) {
  const row = document.createElement("tr");
  row.classList.add("table__row", "active__row");

  row.id = Object.keys(item)[0];

  const itemData = item[Object.keys(item)[0]];

  row.innerHTML = `
      <th scope="row" class="table__block">
        <img src="${itemData.icon}" alt="task">
      </th>
      <td class="table__block">${itemData.name}</td>
      <td class="table__block">${itemData.created}</td>
      <td class="table__block">${itemData.category}</td>
      <td class="table__block">${itemData.content}</td>
      <td class="table__block">${itemData.dates}</td>
      <td class="table__block">
        <button class="button_edit">
          <img src="https://img.icons8.com/material-outlined/24/edit--v1.png" alt="edit">
        </button>
        <button  class="button_archive">
          <img src="https://img.icons8.com/material-outlined/24/downloads.png" alt="archive">
        </button>
        <button  class="button_delete">
          <img src="https://img.icons8.com/material-outlined/24/trash--v1.png" alt="delete">
        </button>
      </td>
    `;

  tableBodyActive.appendChild(row);
}

export function updateActiveNotes() {
  const rows = document.querySelectorAll(".active__row");

  for (const row of rows) {
    let itemId = row.id;

    const editButton = row.querySelector(".button_edit");
    const archiveButton = row.querySelector(".button_archive");
    const deleteButton = row.querySelector(".button_delete");

    buttonSaveEditNote.addEventListener("click", editNote);

    editButton.addEventListener("click", () => {
      getFormFromItem(itemId);
    });

    archiveButton.addEventListener("click", () => {
      archiveNote(itemId);
    });

    deleteButton.addEventListener("click", () => {
      deleteItemFromNotes(itemId);
    });
  }
}

const tableBodyStatistic = document.querySelector(".statistic__body");

export function addRowStatisticTable(item) {
  const row = document.createElement("tr");
  row.classList.add("table__row", "statistic__row");

  row.innerHTML = `
      <th scope="row">
        <img src="${item.icon}" alt="task">
      </th>
      <td>${item.category}</td>
      <td>${item.active}</td>
      <td>${item.archived}</td>
    `;

  tableBodyStatistic.appendChild(row);
}

export function updateTableWithData(notes, statistic) {
  function clearTable() {
    tableBodyActive.innerHTML = "";
    tableBodyStatistic.innerHTML = "";
    tableBodyArchive.innerHTML = "";
  }
  clearTable();

  notes.forEach((item) => {
    addRowActiveTable(item);
  });
  archiveNotes.forEach(item => {
    addRowArchiveTable(item);
  })

  statistic.forEach((item) => {
    item.active = 0;
    item.archived = 0;

    notes.forEach((note) => {
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

  updateActiveNotes();
  updateArchivedNotes();
}
