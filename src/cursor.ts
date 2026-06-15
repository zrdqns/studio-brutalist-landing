import { gsap } from "gsap";

const LABELS: Record<string, string> = {
  ver: "VER",
  hola: "HOLA",
  play: "PLAY",
  send: "SEND",
  link: "",
  logo: "",
};

export function initCursor() {
  const cursor = document.querySelector<HTMLElement>(".cursor");
  const label = document.querySelector<HTMLElement>(".cursor__label");
  if (!cursor || !label) return;

  const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Hover state on interactive targets
  document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("is-hover");
      label.textContent = LABELS[el.dataset.cursor ?? ""] ?? "";
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-hover");
      label.textContent = "";
    });
  });

  // Magnetic buttons
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
    const strength = 0.4;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      gsap.to(el, {
        x: mx * strength,
        y: my * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
    });
  });
}
