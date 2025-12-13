import { WindowControls, WindowHeader } from "#components";
import { Search, ChevronRight } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";
import { useState, useEffect } from "react";
import findPathToItem from "#utils/finder.js"

const VIRTUAL_ROOT = {
  name: "Portfolio",
  kind: "root",
  children: Object.values(locations),
};

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isMobile && activeLocation?.kind !== "root") {
      setActiveLocation(VIRTUAL_ROOT);
    }
  }, [isMobile]);

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const breadcrumb = activeLocation
  ? findPathToItem(VIRTUAL_ROOT, activeLocation) ?? []
  : [];


  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden">
        <WindowHeader target="finder" title="Finder" />

        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-1 px-4 py-2 bg-gray-50 border-b border-gray-200 overflow-x-auto text-sm">
          {breadcrumb.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 whitespace-nowrap"
            >
              <button
                onClick={() => setActiveLocation(item)}
                className="text-blue-500 hover:underline"
              >
                {item.name}
              </button>

              {idx < breadcrumb.length - 1 && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        {/* DESKTOP SIDEBAR */}
        <div className="sidebar hidden md:block">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My projects", locations.work.children)}
        </div>

        {/* CONTENT - both mobile and desktop */}
        <ul
          className={clsx(
            "content",
            isMobile ? "flex flex-row gap-8 p-8" : "relative"
          )}
        >
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={clsx(
                "flex flex-col items-center gap-2 cursor-pointer",
                isMobile ? "relative" : "absolute",
                !isMobile && item.position
              )}
              onClick={() => openItem(item)}
            >
              <img
                src={isMobile ? "/images/folder.png" : item.icon}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-xs text-center max-w-20 truncate">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder", {
  fullscreenOnMobile: true,
});

export default FinderWindow;
