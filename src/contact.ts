export function initContact() {
  const form = document.querySelector<HTMLFormElement>(".con__form");
  const note = document.querySelector<HTMLElement>("[data-note]");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "// TRANSMISIÓN SIMULADA — SIN BACKEND, NADA SE ENVÍA";
    note.classList.add("is-sent");
    window.setTimeout(() => {
      note.textContent = "// FORMULARIO DEMO — NO ENVÍA DATOS REALES";
      note.classList.remove("is-sent");
    }, 3200);
  });
}
