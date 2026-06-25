import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { PopularDishes } from "@/components/sections/PopularDishes";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Menu />
      <PopularDishes />
      <WhyUs />
      <Reviews />
      <Gallery />
      <Location />
    </>
  );
}
