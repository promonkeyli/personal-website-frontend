import IDock from "@/components/dock";
import Footer from "@/components/footer";
import IWindow from "@/components/window";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <IWindow />
      <IDock />
      {/*<Footer />*/}
    </div>
  );
}
