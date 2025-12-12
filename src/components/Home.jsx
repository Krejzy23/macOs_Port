import clsx from "clsx";
import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import useWindowStore from "#store/window";
import { Draggable } from "gsap/Draggable";
import useLocationStore from "#store/location";
import { useState, useEffect } from "react";
import { mobileQuickAccess } from "#constants";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    if (!isMobile) {
      Draggable.create(".folder");
    }
  }, [isMobile]);

  return (
    <section id="home">
      {/* DESKTOP - Projects */}
      <ul className="hidden md:flex">
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>

      {/* MOBILE - Terminal & Resume */}
      <ul className="mt-20 md:hidden">
        {mobileQuickAccess.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "flex flex-col items-center gap-2 cursor-pointer active:opacity-70",
              item.windowPosition // <- přidá pozicování
            )}
            onClick={() => openWindow(item.windowKey)}
          >
            <div className="w-24 h-24 flex items-center justify-center hover:scale-110">
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
