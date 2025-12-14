import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
      </div>

      {/* TERMINAL CONTENT */}
      <div className="flex-1 techstack overflow-y-auto">
        <p>
          <span className="font-bold">@Ales ~ % </span>
           whoami
        </p>
        <p>
          <span className="px-10">frontend → fullstack → security
          </span>
        </p>
        <p>
          <span className="font-bold">@Ales ~ % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
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
  title: "Tech Stack",
});

export default TerminalWindow;