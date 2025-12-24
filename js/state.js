const STORAGE_KEY = "kanban_pro_v3";

const genId = () =>
  "id-" + Date.now() + "-" + Math.random().toString(36).slice(2);

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  columns: [
    { id: "c1", title: "To Do" },
    { id: "c2", title: "In Progress" },
    { id: "c3", title: "Done" }
  ],
  tasks: []
};

const saveState = () =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
