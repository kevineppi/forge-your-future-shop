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

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * 1200,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const scrollOffset = scrollY * 0.15;
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      const [pH, pS, pL] = primaryColor.split(' ').map(v => parseFloat(v));

      // Grid lines that shift with scroll
      ctx.strokeStyle = `hsla(${pH}, ${pS}%, ${pL}%, 0.04)`;
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = -gridSize; x < w + gridSize; x += gridSize) {
        const offset = (scrollOffset * 0.5) % gridSize;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, h);
        ctx.stroke();
      }
      for (let y = -gridSize; y < h + gridSize; y += gridSize) {
        const offset = (scrollOffset * 0.3) % gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(w, y + offset);
        ctx.stroke();
      }

      // Animated particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = Math.sin(Date.now() * 0.002 + i) * 0.5 + 0.5;
        ctx.fillStyle = `hsla(${pH}, ${pS}%, ${pL}%, ${p.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y - scrollOffset * 0.1, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `hsla(${pH}, ${pS}%, ${pL}%, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y - scrollOffset * 0.1);
            ctx.lineTo(p2.x, p2.y - scrollOffset * 0.1);
            ctx.stroke();
          }
        });
      });

      // Floating geometric shapes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const cx = w * (0.2 + i * 0.15) + Math.sin(time + i * 1.5) * 30;
        const cy = h * 0.5 + Math.cos(time * 0.7 + i) * 40 - scrollOffset * 0.2;
        const size = 15 + i * 5;
        const rotation = time * 0.3 + i;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation);
        ctx.strokeStyle = `hsla(${pH}, ${pS}%, ${pL}%, ${0.06 + Math.sin(time + i) * 0.03})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default TechGridBackground;
