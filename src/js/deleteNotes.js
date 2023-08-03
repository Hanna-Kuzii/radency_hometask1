import { updateTableWithData } from "./notes.js ";
import { notes, statistic  } from "../../index.js";

export function deleteItemFromNotes(itemId) {
  const index = notes.findIndex((obj) => Object.keys(obj)[0] === itemId);
  if (index !== -1) {
    notes.splice(index, 1);
  }

  updateTableWithData(notes, statistic);
}
