import * as React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import About from "../component/About";
import BannerSlider from "../component/BannerSlider";
import Product from "../component/Product";
import Gallery from "../component/Gallery";

function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <Gallery />
      <Product />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
