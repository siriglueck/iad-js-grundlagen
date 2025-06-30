const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", function () {
    this.classList.add("dragging");
  });
  draggable.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });
});

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault(); // Allow drop
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();
    const draggedElement = document.querySelector(".dragging");
    if (draggedElement) {
      this.appendChild(draggedElement);

      // Check if task and dropzone match
      const taskId = draggedElement.id; // e.g. "task1"
      const dropzoneId = this.id; // e.g. "dz1"
      const output = document.querySelector("#ausgabe");
      output.style.color = "green";
      console.log(output);
      // Simple matching logic: task1 should be dropped into dz1, etc.
      if (taskId === "task1" && dropzoneId === "dz1") {
        output.textContent = "Richtig! task1 wurde korrekt in dz1 abgelegt.";
        output.append("Toooooooooook");
      } else if (taskId === "task2" && dropzoneId === "dz2") {
        output.textContent = "Richtig! task2 wurde korrekt in dz2 abgelegt.";
      } else if (taskId === "task3" && dropzoneId === "dz3") {
        output.textContent = "Richtig! task3 wurde korrekt in dz3 abgelegt.";
      } else {
        output.textContent = `Falsch! ${taskId} gehört nicht zu ${dropzoneId}.`;
        output.style.color = "red";
      }
    }
  });
});

const getDragAfterElement = (container, y) => {
  const notDraggedCards = [
    ...container.querySelectorAll(".card:not(.dragging)"),
  ];

  return notDraggedCards.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else return closest;
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};
