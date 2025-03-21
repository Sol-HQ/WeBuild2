import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>StreamLines</title>
        <meta
          name="Building Blocks"
          content="built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Getting a Grip"
        title=" Then the getting, of the Grasp!">
        Life, Sound, Truth, Family, Philosophy, the Color's, the Canvas's...   the 'Artist Pallet...
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Cta />
      <SectionTitle
        pretitle="Coming Soon, The Video Verse"
        title="...Elements of Flight...">
        So,
        Just like Mike, - In the beginning.
      </SectionTitle>
      <Video /> 
      <SectionTitle
        pretitle="Testimonials"
        title="Your Stories Here">
        Storie's on Art, The Mountain's and The Valley's
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Ahhhhhh.... Obviously, they will come... and that's a good thing.  
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
