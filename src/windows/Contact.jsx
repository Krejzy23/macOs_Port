import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";
import { ChevronLeft } from "lucide-react";
import useWindowStore from "#store/window";

const Contact = () => {
  const { closeWindow } = useWindowStore();

  return (
    <>
      {/* === DESKTOP HEADER === */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      {/* === MOBILE HEADER === */}
      <div className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-gray-50">
        <button 
          onClick={() => closeWindow("contact")} 
          className="flex items-center gap-2 text-gray-700"
        >
          <ChevronLeft size={20} />
          <span>Go Back</span>
        </button>

        <h2 className="font-semibold mx-auto">Contact</h2>
      </div>

      {/* === CONTENT === */}
      <div className="p-5 space-y-5">
        <img
          src="/images/ales.jpg"
          alt="Ales"
          className="w-20 rounded-full mx-auto md:mx-0"
        />

        <h3 className="text-lg font-semibold text-center md:text-left">Let's Connect</h3>

        <p className="text-center md:text-left">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>

        <p className="text-center md:text-left font-medium">
          ales.krejzl@gmail.com
        </p>

        <ul className="flex-col md:flex-row space-y-2 md:space-y-0">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li 
              key={id} 
              style={{ background: bg }}
              className="rounded-lg"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-3 p-3"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact" ,{
  fullscreenOnMobile: true,
});

export default ContactWindow;
