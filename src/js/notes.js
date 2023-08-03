const tableBody = document.querySelector(".table__body");

export function addRowToTable(item) {
  const row = document.createElement("tr");
  row.classList.add("table__row");
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
    const tableBody = document.querySelector(".table__body");
    tableBody.innerHTML = "";
  }
  clearTable(); 

  notes.forEach((item) => {
    addRowToTable(item);
  });
}