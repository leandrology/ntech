import React from "react";
import CallToAction from "@/components/CTA";
import AboutSection from "@/components/AboutSection";
const About = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Your trusted partner in delivering exceptional IT services.
          </p>
        </div>
        <AboutSection />
        <CallToAction
          description="Want to learn more about us? Contact us today."
          btnTitle="Contact Us"
        />
      </section>
    </div>
  );
};

export default About;
