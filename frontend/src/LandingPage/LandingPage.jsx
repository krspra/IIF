import React, { useRef } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "./Home/Home";
import EventGallery from "./EventGallery/EventGallery";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";

function LandingPage() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const eventRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEvent = () => {
    eventRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToHome={scrollToHome}
        scrollToEvent={scrollToEvent}
        scrollToContact={scrollToContact}
      />
      <main>
        <Home homeRef={homeRef} />
        <EventGallery eventRef={eventRef} />
        <AboutUs aboutRef={aboutRef} />
        <ContactUs contactRef={contactRef}/>
      </main>
      <Footer aboutRef={aboutRef} />
    </>
  );
}

export default LandingPage;
