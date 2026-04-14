import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProcessFlow from "@/components/ProcessFlow";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* id="home" is on the outer wrapper so Home nav scrolls to very top */}
      <div id="home">
        <Carousel />
        <Hero />
      </div>
      <About />
      <ProcessFlow />
      <Products />
      <Stats />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
