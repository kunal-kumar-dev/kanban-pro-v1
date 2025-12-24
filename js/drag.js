let draggedTaskId = null;

function getAfterElement(container, y) {
  return [...container.querySelectorAll(".task:not(.dragging)")].reduce(
    (closest, el) => {
      const box = el.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      return offset < 0 && offset > closest.offset
        ? { offset, element: el }
        : closest;
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

function syncStateFromDOM() {
  const newTasks = [];
  document.querySelectorAll(".column").forEach(col => {
    col.querySelectorAll(".task").forEach(taskEl => {
      const original = state.tasks.find(t => t.id === taskEl.dataset.id);
      if (original) newTasks.push({ ...original, colId: col.dataset.id });
    });
  });
  state.tasks = newTasks;
  saveState();
  render();
}
