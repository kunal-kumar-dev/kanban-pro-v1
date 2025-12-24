// HEADER EVENTS
document.getElementById("addColumnBtn").onclick = () => {
  const t = prompt("Column name?");
  if (!t) return;
  state.columns.push({ id: genId(), title: t });
  saveState(); render();
};

document.getElementById("themeBtn").onclick = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "light" : "dark"
  );
};

document.getElementById("search").oninput = e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".task").forEach(t => {
    t.style.display = t.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
};

// MODAL
const modal = document.getElementById("modal");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");
const mPriority = document.getElementById("mPriority");
const mCol = document.getElementById("mCol");
const mId = document.getElementById("mId");

window.openModal = (col, id = null) => {
  mCol.value = col;
  mId.value = id || "";
  if (id) {
    const t = state.tasks.find(x => x.id === id);
    mTitle.value = t.title;
    mDesc.value = t.desc;
    mPriority.value = t.priority;
  } else {
    mTitle.value = "";
    mDesc.value = "";
    mPriority.value = "low";
  }
  modal.classList.add("active");
};

document.getElementById("cancelBtn").onclick = () =>
  modal.classList.remove("active");

document.getElementById("saveBtn").onclick = () => {
  if (!mTitle.value) return;
  if (mId.value) {
    const i = state.tasks.findIndex(x => x.id === mId.value);
    state.tasks[i] = {
      ...state.tasks[i],
      title: mTitle.value,
      desc: mDesc.value,
      priority: mPriority.value
    };
  } else {
    state.tasks.push({
      id: genId(),
      colId: mCol.value,
      title: mTitle.value,
      desc: mDesc.value,
      priority: mPriority.value
    });
  }
  saveState();
  render();
  modal.classList.remove("active");
};

// INIT
render();
