import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Store />
    </main>
  );
}
