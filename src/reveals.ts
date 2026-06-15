import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initReveals() {
  // Manifesto rows + any [data-reveal]
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 48,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  // Artist units cascade
  const grid = document.querySelector<HTMLElement>(".art__grid");
  if (grid) {
    gsap.from(grid.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: grid, start: "top 82%" },
    });
  }

  // Section headers fade
  gsap.utils
    .toArray<HTMLElement>(".rel__h, .art__h, .con__h, .man__label")
    .forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });

  ScrollTrigger.refresh();
}
