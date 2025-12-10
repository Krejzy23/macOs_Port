import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import { BatteryFull } from "lucide-react";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav
      className="top-0 left-0 w-full z-50 
      bg-transparent backdrop-blur-lg
      md:bg-white md:backdrop-blur-none 
      px-4 py-2 flex justify-between items-center relative"
    >

      {/* --- DYNAMIC ISLAND (MOBILE ONLY) --- */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-2
        md:hidden
        bg-black/70 backdrop-blur-md
        rounded-full h-6 w-28
        flex items-center justify-center"
      >
        {/* optional content later */}
      </div>

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <time className="md:hidden font-medium text-xl">
          {dayjs().format("h:mm A")}
        </time>

        <div className="hidden md:flex items-center gap-2">
          <img src="images/logo.svg" className="h-6" />
          <p className="font-bold">Ales Portfolio</p>
        </div>

        <ul className="hidden md:flex gap-6 ml-6">
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

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex md:hidden items-center gap-3">
          <img src="/icons/wifi.svg" className="h-5 opacity-90" />
          <BatteryFull size={25} strokeWidth={2} />
        </div>

        <ul className="hidden md:flex items-center gap-4">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time className="hidden md:block">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
