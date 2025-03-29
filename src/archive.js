import { createNoteItemElement, addNoteAnimation, gsap } from "./index.js";

const url = "https://notes-api.dicoding.dev/v2/notes/";

const archiveNote = async (id) => {
  try {
    const response = await fetch(`${url}${id}/archive`, {
      method: "POST",
    });
    const result = await response.json();

    if (response.ok) {
      console.log(result.message);

      const noteElement = document.querySelector(`[data-noteid="${id}"]`);
      if (noteElement) {
        noteElement.remove();
      }

      const archiveListElement = document.querySelector("#archivedNotes");
      if (archiveListElement) {
        archiveListElement.innerHTML += `
          <div data-noteid="${id}">
            <h3>${noteElement.querySelector("h3").textContent}</h3>
            <p>${noteElement.querySelector("p").textContent}</p>
            <button class="unarchive-button" data-noteid="${id}">Unarchive</button>
          </div>
        `;

        const newArchivedNote = archiveListElement.querySelector(
          `[data-noteid="${id}"]`,
        );
        addNoteAnimation(newArchivedNote);
      }

      addEventUnarchive();
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Gagal mengarsipkan catatan:", error);
    alert("Gagal mengarsipkan catatan.");
  }
};

const addEventArchive = () => {
  document.querySelectorAll(".archive-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const noteId = event.target.getAttribute("data-noteid");
      await archiveNote(noteId);
    });
  });
};

const unarchiveNote = async (id) => {
  try {
    const response = await fetch(`${url}${id}/unarchive`, {
      method: "POST",
    });
    const result = await response.json();

    if (response.ok) {
      console.log(result.message);

      const noteElement = document.querySelector(`[data-noteid="${id}"]`);
      if (!noteElement) return;

      const title = noteElement.querySelector("h3").textContent;
      const body = noteElement.querySelector("p").textContent;

      gsap.to(noteElement, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => noteElement.remove(),
      });

      noteElement.remove();

      const notesListElement = document.querySelector("#notesList");
      if (notesListElement) {
        notesListElement.innerHTML += createNoteItemElement({
          id,
          title,
          body,
        });

        const newNoteElement = notesListElement.querySelector(
          `[data-noteid="${id}"]`,
        );
        addNoteAnimation(newNoteElement);
      }

      addEventArchive();
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Gagal membatalkan arsip catatan:", error);
    alert("Gagal membatalkan arsip catatan.");
  }
};

const addEventUnarchive = () => {
  document.querySelectorAll(".unarchive-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const noteId = event.target.getAttribute("data-noteid");
      await unarchiveNote(noteId);
    });
  });
};

export { addEventArchive, addEventUnarchive };
