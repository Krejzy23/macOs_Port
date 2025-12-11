import { gsap } from "gsap";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey, options = {}) => {
  const { fullscreenOnMobile = false } = options;

  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    // === Detect mobile breakpoint ===
    useEffect(() => {
      const mql = window.matchMedia("(max-width: 768px)");
      const update = () => setIsMobile(mql.matches);
      update();
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }, []);

    useEffect(() => {
      const isMobile = window.innerWidth < 768;
    
      if (isMobile && props.fullscreenOnMobile) {
        updateWindow(target, {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          draggable: false,
          resizable: false,
          fullscreen: true,
        });
      }
    }, []);

    // === Animate open ===
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
      );
    }, [isOpen]);

    // === Draggable only on desktop ===
    useGSAP(() => {
      const el = ref.current;
      if (!el || isMobile || !isOpen) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isMobile, isOpen]);

    // === Hide/show ===
    useLayoutEffect(() => {
      if (!ref.current) return;
      ref.current.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    // === Dynamic class - fullscreen minus navbar height ===
    const className = [
      "transition-all",
      isMobile && fullscreenOnMobile
        ? "fixed top-14 left-0 right-0 bottom-0 w-screen z-50" // Start below navbar
        : "absolute"
    ].join(" ");

    return (
      <section id={windowKey} ref={ref} className={className} style={{ zIndex }}>
        <Component {...props} />
      </section>
    );
  };

  return Wrapped;
};

export default WindowWrapper;