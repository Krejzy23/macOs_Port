import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import { BatteryFull } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { openWindow, windows } = useWindowStore();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Check if any window is open
  const isAnyWindowOpen = Object.values(windows).some((win) => win.isOpen);

  // Dynamic background: white if mobile AND window is open
  const bgClass =
    isMobile && isAnyWindowOpen
      ? "bg-white backdrop-blur-lg"
      : "bg-transparent backdrop-blur-lg md:bg-white md:backdrop-blur-none";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 ${bgClass} px-4 py-2 flex justify-between items-center`}
    >
      {/* MOBILE TOP BAR */}
      <section className="flex items-center justify-between sm:hidden w-full mb-2">
        {/* LEFT — TIME */}
        <time className="font-medium text-lg flex items-start whitespace-nowrap">
          <span className="mr-1">{dayjs().format("h:mm")}</span>
          <span className="text-lg">{dayjs().format("A")}</span>
        </time>

        {/* CENTER — PILL */}
        <div className="flex grow items-center justify-center px-3">
          <div className="bg-black/70 backdrop-blur-md rounded-full w-full h-10"></div>
          <div className="flex justify-end items-center gap-3 w-20">
            <img src="/icons/wifi.svg" className="h-4 opacity-90" />
            <BatteryFull size={24} strokeWidth={2} />
          </div>
        </div>
      </section>

      {/* DESKTOP LEFT SIDE */}
      <div className="hidden md:flex justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="images/logo.svg" className="h-6" />
          <p className="font-bold">Ales Portfolio</p>
        </div>

        <ul className="flex gap-6 ml-6">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              className="cursor-pointer hover:opacity-75"
              onClick={() => openWindow(type)}
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
