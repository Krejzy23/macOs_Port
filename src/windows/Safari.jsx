import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowHeader } from "#components";
import {
  ChevronLeft,
  PanelLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      {/* DESKTOP HEADER */}
      <div id="window-header" className="hidden md:flex">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {/* MOBILE HEADER - only on mobile */}
      <div className="md:hidden">
        <WindowHeader target="safari" title="Safari" />
      </div>

      {/* BLOG CONTENT */}
      <div className="blog pb-32 md:pb-0">
        <h2>My Developer Blog</h2>
        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the full post <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE BOTTOM BAR - iPhone style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        {/* Search bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-100">
          <ShieldHalf size={18} className="text-gray-600" />
          <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex items-center justify-around px-4 py-3">
          <ChevronLeft size={24} className="text-blue-500" />
          <ChevronRight size={24} className="text-blue-500" />
          <Share size={22} className="text-blue-500" />
          <Copy size={22} className="text-blue-500" />
          <Plus size={22} className="text-blue-500" />
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari", {
  fullscreenOnMobile: true,
});

export default SafariWindow;