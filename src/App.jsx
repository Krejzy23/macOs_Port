import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Dock, Home, Navbar , Welcome } from "#components"
import { Resume, Safari, Terminal, Finder, Text, Image, Contact, System } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <System />
    </main>
  );
};

export default App;
