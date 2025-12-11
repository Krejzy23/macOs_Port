import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import WindowHeader from "#components/WindowHeader";

const Contact = () => {
  return (
    <>
      {/* === UNIVERSAL HEADER (mobile + desktop) === */}
      <WindowHeader target="contact" title="Contact" />

      {/* === CONTENT === */}
      <div className="p-5 space-y-5">
        <img
          src="/images/ales.jpg"
          alt="Ales"
          className="w-24 rounded-full mx-auto md:mx-0"
        />

        <h3 className="text-lg font-semibold text-center md:text-left">
          Let's Connect
        </h3>

        <p className="text-center md:text-left">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>

        <p className="text-center md:text-left font-medium">
          ales.krejzl@gmail.com
        </p>

        <ul className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ background: bg }}
              className="rounded-lg w-full"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
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

const ContactWindow = WindowWrapper(Contact, "contact", {
  fullscreenOnMobile: true,
});

export default ContactWindow;
