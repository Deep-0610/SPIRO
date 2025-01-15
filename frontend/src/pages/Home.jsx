import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Cardsareng from "../components/Cardsareng";
import "./styles/styles.css";
import Card from "../components/Card";
import Smallcard from "../components/Smallcard";
import FeatureCard from "../components/FeatureCard";
import Banner from "../components/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";


function Home() {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("glass-blur");
        setTextColor("text-black");
      } else {
        setNavbarBg("transparent");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <section className="bg-main body scroll-smooth min-w-screen min-h-screen box-border">
      {/*Navbar & Hero-Section */}
      <Navbar className={`${navbarBg} ${textColor}`} />
      <div className="min-h-screen min-w-screen hero overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 top-36 left-24 w-auto h-full">
          <div className="text-white text-display xl:m-20 xl:w-1/3 w-1/2 leading-display font-semibold" >
          Empowering Your Future
          <p className="text-small text-white leading-small my-5 font-normal">Achieve your goals with flexible, high-quality <br/> programs for all levels</p>
          </div>
          <button className="bg-primary relative xl:bottom-14 xl:left-20  text-white font-semibold flex align-middle items-center py-3 px-8 rounded-lg">Get Free Demo <ChevronRight size={24} /></button>
        </div>
      </div>
      {/*MID-Section */}
      <section className="bg-white relative bg-opacity-80 bottom-12 rounded-3xl w-auto h-auto py-20 flex flex-col items-center justify-around align-middle">
        {/*Feature-Section */}
        <h1 className="text-h1 font-semibold w-2/5 text-center leading-h1" data-aos="fade-up" >
          Unlock The Future Of Education With <Link to="/login" ><span className="text-primary font-bold">SPIRO</span></Link>
        </h1>
        <div className="grid grid-flow-col grid-cols-3 gap-5  w-auto h-auto m-10">
          <div className="grid xl:w-3/4 gap-5 justify-self-end">
            <FeatureCard title="The Tech That Simplifies Your Educational World"/>
            <Card title="Seamless Sharing" subtitle="Easily collaborate and share resources." />
          </div>
          <div className="grid xl:w-full gap-5 ">
            <Smallcard title="Personalized Chatbot"/>
            <Smallcard title="Personalized Chatbot"/>
            <Smallcard title="Personalized Chatbot"/>
          </div>
          <div className="grid xl:w-3/4 gap-5 ">
          <FeatureCard title="The Tech That Simplifies Your Educational World"/>
           <Card title="Seamless Sharing" subtitle="Easily collaborate and share resources." />
          </div>
        </div>

        {/*About-Section */}
          <h1 className="text-h1 leading-h1 font-semibold w-2/5 my-10 text-center"  data-aos="fade-up">Transforming learning, one click at a time</h1>
        <div className="grid grid-flow-row gap-12 ">
          <div className="w-[790px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-right">
          </div>
          <div className="flex gap-8">
          <div className="w-[379px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-down"></div>
          <div className="w-[379px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-up"></div>
        </div>
        </div>

      {/*TESTIMONIALS
        <Cardsareng />*/}

      {/*FAQ's*/}
        <div className="FAQ justify-center items-center p-52 w-10/12">
          <h1 className="text-h1 pb-12 "  data-aos="fade-up">FAQ's</h1>
          <Faq 
            question="Is my data secure on SPIRO?"
            answer="Yes, Spiro uses advanced security measures to protect your data and ensure privacy."
          />
          <Faq
            question="How do colleges get started with SPIRO?"
            answer="Colleges can sign up on our website and start uploading content and resources for students."
          />
          <Faq
            question="How do I get support if I need help?"
            answer="You can contact our 24/7 support via live chat, email, or our help center."
          />
          <Faq
            question="Can I track my progress on Spiro?"
            answer="Yes, students can track their progress with quizzes and assignments."
          />
          <Faq
            question="Is Spiro mobile-friendly?"
            answer="Yes, Spiro is fully optimized for mobile devices, allowing easy access anytime, anywhere."
          />
        </div>
      </section>

      {/*Footer*/}
      <section className="mx-20">
      <Banner Title="Your Vision, Our Platform Let’s Connect Today!"/>
        <Footer />
      </section>
    </section>
  );
}
export default Home;
