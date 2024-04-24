import Image from "next/image";
import Bento from "./components/Bento";
import User from "./components/User";

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex items-center justify-center p-8 max-md:px-4">
      <div className="h-fit flex gap-16 justify-center items-center max-lg:flex-col max-md:gap-8">
        <section className="max-w-[600px] w-full h-full">
          <User />
        </section>
        <section className="max-w-[600px] w-full">
          <Bento />
        </section>
      </div>
    </main>
  );
}
