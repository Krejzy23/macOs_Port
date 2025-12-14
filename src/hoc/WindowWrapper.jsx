import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window";
import { WindowHeader } from "#components";

const WindowWrapper = (Component, windowKey, options = {}) => {
  const { fullscreenOnMobile = false, title } = options;

  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mql = window.matchMedia("(max-width: 768px)");
      const update = () => setIsMobile(mql.matches);
      update();
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }, []);

    useGSAP(() => {
      if (!ref.current || !isOpen) return;
      gsap.fromTo(
        ref.current,
        { scale: 0.9, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.25 }
      );
    }, [isOpen]);

    useGSAP(() => {
      if (!ref.current || isMobile || !isOpen) return;
      const [drag] = Draggable.create(ref.current, {
        onPress: () => focusWindow(windowKey),
      });
      return () => drag.kill();
    }, [isMobile, isOpen]);

    if (!isOpen) return null;

    return (
      <section
        ref={ref}
        id={windowKey}
        className={clsx(
          "bg-white rounded-xl shadow-2xl",
          isMobile && fullscreenOnMobile
            ? "fixed top-14 left-0 right-0 bottom-0 z-40 flex flex-col"
            : "absolute"
        )}
        style={!isMobile ? { zIndex } : undefined}
      >
        {/* 🔥 HEADER VŽDY TADY */}
        {isMobile && fullscreenOnMobile && (
          <WindowHeader target={windowKey} title={title} />
        )}

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto">
          <Component {...props} />
        </div>
      </section>
    );
  };

  return Wrapped;
};

export default WindowWrapper