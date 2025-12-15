import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check, Flag, ChevronRight } from "lucide-react";

const Terminal = () => {
  return (
    <>
      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="terminal" />
        <h2>Tech stack</h2>
      </div>

      {/* TERMINAL CONTENT */}
      <div className="flex-1 techstack overflow-y-auto">
        <p>
          <span className="font-bold">@Ales ~ % </span>
          whoami
        </p>
        <p>
          <span className="px-10">frontend → fullstack → security</span>
        </p>
        <p>
          <span className="font-bold">@Ales ~ % </span>
          show tech stack
        </p>
        <div className="label hidden md:flex">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className="flex flex-col gap-2 md:flex-row md:items-center"
            >
              {/* IKONY */}
              <div className="flex items-center gap-2">
                {/* Mobile chevron */}
                <ChevronRight size={18} className="text-[#00A154] md:hidden" />

                {/* Desktop check */}
                <Check size={20} className="check hidden md:block" />

                <h3>{category}</h3>
              </div>

              <ul>
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 ml-6 md:inline md:ml-1">
                    {/* Mobile bullet */}
                    <span className="md:hidden">▸</span>

                    <span>
                      {item}
                      <span className="hidden md:inline">
                        {i < items.length - 1 ? "," : ""}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> 5 of 5 stack loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal", {
  fullscreenOnMobile: true,
  title: "Terminal",
});

export default TerminalWindow;
