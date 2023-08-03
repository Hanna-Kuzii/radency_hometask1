import { updateTableWithData } from "./notes.js ";
import { notes } from "../../index.js";

export function deleteItemFromNotes(itemId) {
  const index = notes.findIndex((obj) => Object.keys(obj)[0] === itemId);
console.log(itemId, index)
  if (index !== -1) {
    notes.splice(index, 1);
  }

  updateTableWithData(notes);
  // updateDomNotes();
}
