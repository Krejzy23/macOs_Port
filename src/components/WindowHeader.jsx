import { ChevronLeft } from "lucide-react";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const WindowHeader = ({ target, title }) => {
  const { closeWindow } = useWindowStore();

  return (
    <>
      {/* Desktop header */}
      <div
        id="window-header"
        className="hidden md:flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400"
      >
        <WindowControls target={target} />
        <h2>{title}</h2>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex-row items-center font-georama gap-3 px-4 py-3 z-10 relative">
        <button
          onClick={() => closeWindow(target)}
          className="flex items-center gap-2 text-gray-700"
        >
          <ChevronLeft size={20}/>
          <span className="text-sm font-semibold text-blue-500">Go Back</span>
        </button>

        <h2 className="flex font-semibold justify-center items-center">{title}</h2>
      </div>
    </>
  );
};

export default WindowHeader;
