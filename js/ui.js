const board = document.getElementById("board");

function render() {
  board.innerHTML = "";

  state.columns.forEach(col => {
    const colEl = document.createElement("div");
    colEl.className = "column";
    colEl.dataset.id = col.id;

    colEl.innerHTML = `
      <div class="column-header">
        ${col.title}
        <button class="secondary" onclick="deleteColumn('${col.id}')">✕</button>
      </div>
      <div class="task-list"></div>
      <button class="secondary" onclick="openModal('${col.id}')" style="margin:8px">+ Task</button>
    `;

    const list = colEl.querySelector(".task-list");

    state.tasks.filter(t => t.colId === col.id).forEach(task => {
      const el = document.createElement("div");
      el.className = "task";
      el.draggable = true;
      el.dataset.id = task.id;

      el.innerHTML = `
        <span class="tag ${task.priority}">${task.priority}</span>
        <b>${task.title}</b>
        <div style="font-size:0.8rem;color:var(--muted)">
          ${task.desc || ""}
        </div>
      `;

      el.onclick = () => openModal(col.id, task.id);

      el.addEventListener("dragstart", () => {
        draggedTaskId = task.id;
        el.classList.add("dragging");
      });

      el.addEventListener("dragend", () => {
        el.classList.remove("dragging");
        draggedTaskId = null;
        syncStateFromDOM();
      });

      list.appendChild(el);
    });

    list.addEventListener("dragover", e => {
      e.preventDefault();
      const after = getAfterElement(list, e.clientY);
      const dragged = document.querySelector(`[data-id="${draggedTaskId}"]`);
      if (!dragged) return;
      after ? list.insertBefore(dragged, after) : list.appendChild(dragged);
    });

    board.appendChild(colEl);
  });
}
