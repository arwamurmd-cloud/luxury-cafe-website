import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/lux/SmoothScroll";
import { Navbar } from "@/components/lux/Navbar";
import { Hero } from "@/components/lux/Hero";
import { About } from "@/components/lux/About";
import { BestSellers } from "@/components/lux/BestSellers";
import { Gallery } from "@/components/lux/Gallery";
import { Reviews } from "@/components/lux/Reviews";
import { WhyUs } from "@/components/lux/WhyUs";
import { Instagram } from "@/components/lux/Instagram";
import { Contact } from "@/components/lux/Contact";
import { Footer } from "@/components/lux/Footer";

const title = "Eat Bae — Luxury Café, Coffee & Ramen in Bandra West";
const description =
  "Eat Bae is a sunlit café in Bandra West serving single-origin coffee, 18-hour tonkotsu ramen and golden-hour brunch. Reserve a table on the terrace.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BestSellers />
        <Gallery />
        <Reviews />
        <WhyUs />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
