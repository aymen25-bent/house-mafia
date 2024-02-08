import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Store from "@/components/Store";

const Accueil = ({ setPage }) => {
  return (
    <main>
      <Hero setPage={setPage} />
      <Gallery />
      <Store />
    </main>
  );
};

export default Accueil;
