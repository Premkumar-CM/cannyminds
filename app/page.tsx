import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import ProductsUpdated from "@/components/sections/ProductsUpdated";
import AboutUpdated from "@/components/sections/AboutUpdated";
import GlobalOfficesUpdated from "@/components/sections/GlobalOfficesUpdated";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <ProductsUpdated />
        </section>
        <section id="about">
          <AboutUpdated />
        </section>
        <section id="offices">
          <GlobalOfficesUpdated />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
