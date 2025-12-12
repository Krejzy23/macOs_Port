import { WindowControls, WindowHeader } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";


const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden">
        <WindowHeader target="imgfile" title={name} />
      </div>

      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      {/* IMAGE CONTENT */}
      <div className="p-5 bg-white flex items-center justify-center min-h-0 flex-1">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded"
          />
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile", {
  fullscreenOnMobile: true,
});

export default ImageWindow;