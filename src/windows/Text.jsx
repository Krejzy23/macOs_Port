import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls, WindowHeader } from "#components";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;
  if (!data) return null;
  const { name, image, subtitle, description } = data;
  
  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden">
        <WindowHeader target="txtfile" title={name} />
      </div>

      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-6 bg-white overflow-y-auto">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile", {
  fullscreenOnMobile: true,
});

export default TextWindow;