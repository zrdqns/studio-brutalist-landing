import { gsap } from "gsap";

export function initHorizontal() {
  const section = document.querySelector<HTMLElement>(".rel");
  const track = document.querySelector<HTMLElement>(".rel__track");
  if (!section || !track) return;

  const amount = () => track.scrollWidth - window.innerWidth + 24;

  gsap.to(track, {
    x: () => -amount(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + amount(),
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // Parallax the catalog numerals slightly as they pass
  gsap.utils.toArray<HTMLElement>(".card__id").forEach((id) => {
    gsap.fromTo(
      id,
      { xPercent: -8 },
      {
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + amount(),
          scrub: true,
        },
      }
    );
  });
}
