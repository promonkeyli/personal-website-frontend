import Dock from "@/components/dock";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <div className="h-full flex flex-col">
        <Dock />
        {/*<Footer />*/}
      </div>
    </TooltipProvider>
  );
}
