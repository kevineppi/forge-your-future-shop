import { useEffect, useRef } from "react";

const TechGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    // Floating orbs — slow, ambient, premium feel
    const orbs: { x: number; y: number; radius: number; vx: number; vy: number; hue: number; opacity: number }[] = [];
    for (let i = 0; i < 6; i++) {
      orbs.push({
        x: Math.random() * 1400,
        y: Math.random() * 900,
        radius: 80 + Math.random() * 160,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        hue: i % 2 === 0 ? 152 : 38,
        opacity: 0.025 + Math.random() * 0.02,
      });
    }

    // Fine particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * 1400,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const scrollOffset = scrollY * 0.12;
      const time = Date.now() * 0.001;

      // Ambient orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.radius) orb.x = w + orb.radius;
        if (orb.x > w + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = h + orb.radius;
        if (orb.y > h + orb.radius) orb.y = -orb.radius;

        const pulseFactor = Math.sin(time * 0.5 + orb.x * 0.01) * 0.3 + 0.7;
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y - scrollOffset * 0.15, 0,
          orb.x, orb.y - scrollOffset * 0.15, orb.radius
        );
        gradient.addColorStop(0, `hsla(${orb.hue}, 35%, 50%, ${orb.opacity * pulseFactor})`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 35%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y - scrollOffset * 0.15, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle grid with dot intersections
      const gridSize = 80;
      const gridOpacity = 0.035;
      ctx.fillStyle = `hsla(152, 20%, 40%, ${gridOpacity})`;

      for (let x = 0; x < w + gridSize; x += gridSize) {
        const xOffset = (scrollOffset * 0.3) % gridSize;
        for (let y = 0; y < h + gridSize; y += gridSize) {
          const yOffset = (scrollOffset * 0.2) % gridSize;
          ctx.beginPath();
          ctx.arc(x + xOffset, y + yOffset, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Fine connecting lines from mouse proximity
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = Math.sin(time * 1.5 + i * 0.8) * 0.5 + 0.5;
        ctx.fillStyle = `hsla(152, 30%, 45%, ${p.opacity * pulse * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y - scrollOffset * 0.08, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with thin lines
        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `hsla(152, 25%, 45%, ${0.04 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y - scrollOffset * 0.08);
            ctx.lineTo(p2.x, p2.y - scrollOffset * 0.08);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default TechGridBackground;
