//1:
const notes = [
    { title: " Una variable puede declararse usando let o const" }, // objeto nota
    { title: " Un arreglo es un conjunto de datos ordenados" },
  ];
  
  // 2:
  function printNotes() {
    for (let i = 0; i < notes.length; i++) {
      const note = `${i}. ${notes[i].title} `;
      console.log(note);
    }
  }
  
  function printInterface() {
    console.clear();
    console.log("Lista de notas:");
    printNotes();
    console.log("-----------------------");
    console.log("¿Qué desea hacer?");
    console.log("1. Crear nota");
    console.log("2. Editar nota");
    console.log("3. Eliminar nota");
  }
  
  function createNote(noteTitle) {
    const newNote = { title: noteTitle };
    notes.push(newNote);
  }
  

  
  function deleteNote(noteIndex) {
    if (noteIndex >= 0 && noteIndex < notes.length) {
      notes.splice(noteIndex, 1);
      alert("Nota eliminada");
    } else {
      alert("Nota no encontrada");
    }
  }
  
  let input;
  

while (input !== null) {
    printInterface();
    input = prompt("Ingrese una acción (1, 2 o 3):");
  
    if (input === "1") {
      const title = prompt("Ingrese el titulo de la nota:");
      createNote(title);
    } else if (input === "2") {
        
        let index ;

        while (index >= 0 && index < notes.length) {
            
         index = Number(prompt("Indique el indice de la nota:"));

        }
        
    } else if (input === "3") {
      const index = Number(prompt("Indique el indice de la nota:"));
      deleteNote(index);
    } else if (input === null) {
      alert("Gracias por usar Notas");
    } else {
      alert("Accion Invalida!");
    }
  }
  