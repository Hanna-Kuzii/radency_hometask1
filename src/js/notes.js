import { buttonSaveEditNote }  from "../../index.js";
import { archiveNote } from "./archiveNote.js";
import { deleteItemFromNotes } from "./deleteNotes.js";
import { editNote, getFormFromItem } from "./editNote.js";

const tableBody = document.querySelector(".active__table");

export function addRowToTable(item) {
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

  tableBody.appendChild(row);
}

export function updateTableWithData(notes) {
  function clearTable() {
    tableBody.innerHTML = "";
  }
  clearTable();

  notes.forEach((item) => {
    addRowToTable(item);
  });

  updateDomNotes();
}

export function updateDomNotes() {
  const rows = document.querySelectorAll(".table__row");

  for (const row of rows) {
    let itemId = row.id;

    const editButton = row.querySelector(".button_edit");
    const archiveButton = row.querySelector(".button_archive");
    const deleteButton = row.querySelector(".button_delete");

    buttonSaveEditNote.addEventListener("click", editNote);

    editButton.addEventListener("click", () => {
      console.log("click");
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
