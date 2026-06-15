import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initCursor } from "./cursor.ts";
import { initParticles } from "./particles.ts";
import { initHorizontal } from "./horizontal.ts";
import { initReveals } from "./reveals.ts";
import { initContact } from "./contact.ts";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Interactions that are safe regardless of motion preference
initContact();

if (matchMedia("(pointer: fine)").matches) {
  initCursor();
}

if (!reduced) {
  initParticles();
  initHorizontal();
  initReveals();
} else {
  document.querySelector(".rel")?.classList.add("is-static");
}
