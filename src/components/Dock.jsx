import { useRef, useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import useWindowStore from "#store/window.js";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  // Responzivní počet ikon
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedApps = isMobile ? dockApps.slice(0, 4) : dockApps;

  // GSAP efekt
  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;
    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 2000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, [displayedApps.length]);

  const toggleApp = (app) => {
    if (!app.canOpen) return;
  
    const win = windows[app.id];
    if (!win) {
      console.warn(`Window "${app.id}" not registered in WINDOW_CONFIG`);
      return;
    }
  
    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {displayedApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, name, icon, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-55"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
