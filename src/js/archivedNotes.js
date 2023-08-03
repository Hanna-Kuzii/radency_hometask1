import { notes, archiveNotes, statistic } from "../../index.js";
import { updateTableWithData } from "./notes.js";
const archivedTable = document.querySelector(".archive__table");
const buttonShow = document.querySelector(".archive__show");
const buttonHide = document.querySelector(".archive__hide");

buttonShow.addEventListener("click", function () {
  archivedTable.style.display = "table";
  buttonHide.style.display = "block";
  buttonShow.style.display = "none";
})

export const tableBodyArchive = document.querySelector(".archive__body");

export function addRowArchiveTable(item) {
  const row = document.createElement("tr");
  row.classList.add("table__row", "archive__row");

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
        <button  class="button_unarchive">
          <img src="https://img.icons8.com/material-outlined/24/downloads.png" alt="archive">
        </button>

      </td>
    `;

    tableBodyArchive.appendChild(row);
}

export function updateArchivedNotes() {
  const rows = document.querySelectorAll(".archive__row");
  for (const row of rows) {
    let itemId = row.id;

    const unArchiveButton = row.querySelector(".button_unarchive");

    unArchiveButton.addEventListener("click", () => {
      console.log('click')
      unArchiveNote(itemId)
    });
  }
}


export function unArchiveNote(itemId) {
  const index = archiveNotes.findIndex((obj) => Object.keys(obj)[0] === itemId);
  const item = archiveNotes.find((obj) => Object.keys(obj)[0] === itemId);

  notes.push(item);

  if (index !== -1) {
    archiveNotes.splice(index, 1);
  }

  updateTableWithData(notes, statistic);
}


buttonHide.addEventListener("click", function () {
  archivedTable.style.display = "none";
  buttonHide.style.display = "none";
  buttonShow.style.display = "block";
})