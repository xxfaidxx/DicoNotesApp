const url = "https://notes-api.dicoding.dev/v2/notes/";

const deleteNote = async (id) => {
  try {
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    alert("Gagal menghapus catatan");
  }
};

const addEventDelete = () => {
  document
    .querySelector("#notesList")
    .addEventListener("click", async (event) => {
      if (event.target.classList.contains("delete-button")) {
        event.preventDefault();
        const noteId = event.target.getAttribute("data-noteid");
        console.log("Menghapus note dengan ID:", noteId);
        await deleteNote(noteId);
      }
    });
};

export { deleteNote, addEventDelete };
