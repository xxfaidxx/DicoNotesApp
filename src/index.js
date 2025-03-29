import "./styles.css";
import "./load-indicator.js";
import "./app-bar.js";
import "./form-add.js";
import "./archive-title.js";
import "./footer-bar.js";
import { addEventArchive, addEventUnarchive } from "./archive.js";
import { deleteNote, addEventDelete } from "./delete.js";
import gsap from "gsap";

const url = "https://notes-api.dicoding.dev/v2/notes";
const notesListElement = document.querySelector("#notesList");
const formAddElement = document.querySelector("form-add");

function createNoteItemElement({ id, title, body }) {
  return `
    <div data-noteid="${id}" class="note-item">
      <h3>${title}</h3>
      <p>${body}</p>
      <button class="archive-button" data-noteid="${id}">Archive</button>
      <button class="delete-button" data-noteid="${id}">Delete</button>
    </div>
  `;
}

const renderNotes = async () => {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.error) {
      console.error(responseJson.error);
    } else {
      notesListElement.innerHTML = responseJson.data
        .filter((note) => !note.archived)
        .map((note) => createNoteItemElement(note))
        .join("");

      addEventArchive();
      addEventDelete();
    }

    const archivedResponse = await fetch(`${url}/archived`);
    const archivedResponseJson = await archivedResponse.json();

    if (archivedResponseJson.error) {
      console.error(archivedResponseJson.error);
    } else {
      const archivedNotesElement = document.querySelector("#archivedNotes");
      if (!archivedNotesElement) {
        console.error("Elemen #archivedNotes tidak ditemukan!");
        return;
      }

      archivedNotesElement.innerHTML = archivedResponseJson.data
        .map(
          (note) => `
          <div data-noteid="${note.id}">
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <button class="unarchive-button" data-noteid="${note.id}">Unarchive</button>
          </div>
        `,
        )
        .join("");

      addEventUnarchive();
    }
  } catch (error) {
    console.error("Gagal mengambil catatan:", error);
  }
};

renderNotes();

formAddElement.addEventListener("add-note", (event) => {
  const newNote = event.detail;
  notesListElement.insertAdjacentHTML(
    "afterbegin",
    createNoteItemElement(newNote),
  );

  const newNoteElement = document.querySelector(
    `[data-noteid="${CSS.escape(newNote.id)}"]`,
  );

  addNoteAnimation(newNoteElement);

  addEventArchive();
  addEventDelete();
});

notesListElement.addEventListener("click", async (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.preventDefault();
    const noteId = event.target.getAttribute("data-noteid");
    console.log("Menghapus note dengan ID:", noteId);

    await deleteNote(noteId);

    const noteElement = document.querySelector(
      `[data-noteid="${CSS.escape(noteId)}"]`,
    );

    gsap.to(noteElement, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => noteElement.remove(),
    });
  }
});

function addNoteAnimation(noteElement) {
  gsap.from(noteElement, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
}

const startPolling = () => {
  setInterval(() => {
    console.log("Mengambil note terbaru...");
    renderNotes();
  }, 5000);
};

startPolling();

export { createNoteItemElement, addNoteAnimation, gsap };
