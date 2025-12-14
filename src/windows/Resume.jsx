import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      // Na mobilu použij šířku okna - padding, na desktopu nech default
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setPageWidth(window.innerWidth - 40); // minus padding
      } else {
        setPageWidth(600); // desktop default
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="p-5 bg-white h-full flex justify-center">
        <Document file="files/resume.pdf">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            width={pageWidth}
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume", {
  fullscreenOnMobile: true,
  title: "Resume",
});

export default ResumeWindow;
