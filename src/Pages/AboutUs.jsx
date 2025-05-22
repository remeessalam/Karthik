import React from "react";
import banner from "../assets/images/banners/aboutus.webp";
import PageBanner from "../Components/Website/PageBanner";
import HrLine from "../Components/HrLine";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import visionImg from "../assets/images/vision.webp";
import missionImg from "../assets/images/mission.webp";
import { ImPhone } from "react-icons/im";
import Testimonials from "../Components/Testimonials";

const AboutUs = () => {
  return (
    <>
      <PageBanner banner={banner} title="About Us" />
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-start">Our Vision</p>
          <h3 className="section-heading">
            Transforming Ideas into Intelligent Digital Solutions
          </h3>
          <HrLine />
          <p>
            At uTurn Technologies, our vision is to empower businesses worldwide
            by crafting innovative digital experiences that drive growth and
            evolution. We aim to be your trusted partner, delivering
            user-centric, scalable solutions that harness cutting-edge
            technologies like AI, automation, and custom software. By combining
            creativity with technical expertise, we strive to help brands thrive
            in a dynamic digital landscape, turning ideas into impactful
            realities.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Get In Touch
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to discuss your project</p>
                <Link to="tel:+1-XXX-XXX-XXXX" className="font-semibold">
                  +1 (XXX) XXX-XXXX
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full">
          <img
            src={visionImg}
            className="w-full h-full object-cover object-bottom rounded-lg"
            alt="Our Vision"
          />
        </div>
      </section>
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="md:block hidden w-full h-full">
          <img
            src={missionImg}
            className="w-full h-full object-cover rounded-lg"
            alt="Our Mission"
          />
        </div>
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-center">Our Mission</p>
          <h3 className="section-heading">
            Crafting Solutions That Empower Your Growth
          </h3>
          <HrLine />
          <div
            data-aos="fade-up"
            className="block md:hidden w-full aspect-square"
          >
            <img
              src={missionImg}
              className="w-full h-full object-cover rounded-lg"
              alt="Our Mission"
            />
          </div>
          <p>
            At uTurn Technologies, our mission is to empower businesses by
            delivering innovative, user-centric digital solutions that drive
            growth and success. We bridge technology and business goals through
            cutting-edge AI, web and app development, and automation,
            transforming challenges into opportunities. With a focus on
            collaboration and honest, results-driven work, we partner with you
            to build scalable solutions that thrive in an ever-evolving digital
            world.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Get In Touch
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to discuss your project</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default AboutUs;
