import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Home page for swedish mafia band",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Store />
    </main>
  );
}
