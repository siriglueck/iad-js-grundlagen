/**
 * ? todo.js
 * 
 * tägliche TODO-Liste
 */

document.addEventListener("DOMContentLoaded", _ => {
  // HTML-Elemente speichern
  const edit = document.querySelector("#edit");
  const clear = document.querySelector("#clear");
  const todoList = document.querySelector("#todoList");
  
  /**
   * function restoreContents()
   * 
   * Aktualisiert der TODO-Liste
   * 
   * @return void
   */
  function restoreContents() {
    // LocalStorage lesen
    const myTodoList = localStorage["todoList"];
    // wenn der Schlüssel im LocalStorage existiert...
    if( myTodoList !== undefined ) {
      // ... Inhalt in das Listen-Element ausgeben
      todoList.innerHTML = myTodoList;
    }
  }

  /**
   * function saveContents()
   * 
   * Speichert den Inhalt des HTML-Listen-Elements im lokalen Speicher
   * 
   * @return void
   */
  function saveContents() {
    localStorage["todoList"] = todoList.innerHTML;
  }

  /**
   * function toggleEditContent()
   * 
   * schaltet das Bearbeiten der Liste ein und aus
   * 
   * @return void
   */
  function toggleEditContent() {
    if( todoList.getAttribute("contenteditable") === "false" ) {
      todoList.setAttribute("contenteditable", "true");
      edit.innerHTML = "Speichern";
      todoList.focus();
    } else {
      todoList.setAttribute("contenteditable", "false");
      edit.innerHTML = "Bearbeiten";
      saveContents();
    }
  }

  /**
   * function resetContent()
   * 
   * löscht den lokalen Speicher und lädt die Seite neu
   */
  function resetContent() {
    // localStorage.clear(); // würde den kompletten lokalen Speicher löschen, daher nicht empfehlenswert
    // ! Besser:
    localStorage.removeItem("todoList");
    window.location.reload();
  }

  restoreContents();

  edit.addEventListener("click", toggleEditContent);
  clear.addEventListener("click", resetContent);
});
