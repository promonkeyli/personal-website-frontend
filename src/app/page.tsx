import IDock from "@/components/dock";
import Footer from "@/components/footer";
import IMenu from "@/components/menu";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <IMenu />
      <IDock />
      <Footer />
    </div>
  );
}
