import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname === prevPath.current) {
      setDisplayChildren(children);
      return;
    }

    prevPath.current = location.pathname;
    setPhase("exit");

    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("enter");

      const enterTimer = setTimeout(() => {
        setPhase("idle");
      }, 500);

      return () => clearTimeout(enterTimer);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [location.pathname, children]);

  const style: React.CSSProperties =
    phase === "exit"
      ? { opacity: 0, transform: "translateY(12px)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }
      : phase === "enter"
      ? { opacity: 1, transform: "translateY(0)", transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }
      : { opacity: 1, transform: "translateY(0)" };

  return <div style={style}>{displayChildren}</div>;
};

export default PageTransition;
