interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function initParticles() {
  const canvas = document.querySelector<HTMLCanvasElement>(".hero__canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes: Node[] = [];
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    const hero = canvas!.parentElement as HTMLElement;
    w = hero.clientWidth;
    h = hero.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas!.width = w * dpr;
    canvas!.height = h * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(90, Math.floor((w * h) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }

  function frame() {
    ctx!.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      const dxm = n.x - mouse.x;
      const dym = n.y - mouse.y;
      const dm = Math.hypot(dxm, dym);
      if (dm < 130) {
        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(255,43,214,${(1 - dm / 130) * 0.5})`;
        ctx!.moveTo(n.x, n.y);
        ctx!.lineTo(mouse.x, mouse.y);
        ctx!.stroke();
      }

      ctx!.fillStyle = "rgba(0,240,255,0.85)";
      ctx!.fillRect(n.x, n.y, 1.6, 1.6);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(0,240,255,${(1 - d / 120) * 0.16})`;
          ctx!.moveTo(nodes[i].x, nodes[i].y);
          ctx!.lineTo(nodes[j].x, nodes[j].y);
          ctx!.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    const r = canvas!.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  window.addEventListener("mouseout", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  resize();
  requestAnimationFrame(frame);
}
