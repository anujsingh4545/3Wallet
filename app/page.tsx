import Navbar from "@/components/Navbar";
import WalletGenerator from "@/components/WalletGenerator/WalletGenerator";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100dvh-90px)] flex flex-col gap-4 p-4 ">
      <Navbar/>
      <WalletGenerator/>
    </div>
  );
}
