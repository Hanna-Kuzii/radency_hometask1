import { notes, archiveNotes, statistic } from "../../index.js";
import { updateTableWithData } from "./notes.js";

export function archiveNote(itemId) {
  const index = notes.findIndex((obj) => Object.keys(obj)[0] === itemId);
  const item = notes.find((obj) => Object.keys(obj)[0] === itemId);

  console.log(itemId, index);
  archiveNotes.push(item);

  if (index !== -1) {
    notes.splice(index, 1);
  }

  updateTableWithData(notes, statistic);
  // updateDomNotes();

}
