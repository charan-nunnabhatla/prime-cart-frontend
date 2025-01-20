import Canvas from "@/components/canvas";
import Header from "@/components/header";

export default function Home() {
  return (
    <div id="root" className="h-full w-full min-h-svh ">
      <div id="canva-root" className="relative h-[70%] w-full bg-gradient-to-b from-green-600 to-green-400">
        <Canvas />
      </div>
      <div
        id="header-root"
        className="fixed z-10 bg-transparent top-0 w-full h-fit">
        <Header />
      </div>

      <div className=" h-full w-full bg-blue-400"></div>
    </div>
  );
}
