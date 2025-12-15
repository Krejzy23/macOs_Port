import { systemProp } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const System = () => {
  if (!Array.isArray(systemProp)) {
    return <div className="p-4 text-sm text-gray-500">No system data</div>;
  }

  return (
    <>
      <div className="hidden md:flex" id="window-header">
        <WindowControls target="system" />
        <h2 className="text-sm font-bold text-gray-600">System Timeline</h2>
      </div>

      <div className="w-full px-6 py-8 space-y-10 text-gray-800">
        {systemProp.map((item) => (
          <article key={item.id} className="relative pl-6 border-l border-gray-200">
            <header className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
              <span className="text-sm font-mono text-gray-500">{item.version}</span>
              <span className="text-sm font-medium text-gray-800">{item.tech}</span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </header>

            <ul className="space-y-1 text-sm text-gray-700 mb-4">
              {item.description.map((line, i) => (
                <li key={i}>– {line}</li>
              ))}
            </ul>

            <footer className="flex gap-3">
              {item.live && (
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 border border-gray-300 rounded-md px-3 py-1 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  Open App
                </a>
              )}
              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 border border-gray-300 rounded-md px-3 py-1 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  View Code
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>
    </>
  );
};

const SystemWindow = WindowWrapper(System, "system", {
  fullscreenOnMobile: true,
  title: "System Timeline",
});

export default SystemWindow;
