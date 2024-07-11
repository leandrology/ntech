import React from "react";
import CallToAction from "@/components/CTA";
const Services = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Services
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Comprehensive IT solutions to drive your business forward.
          </p>
        </div>
        <CallToAction
          description="Interested in our services? Get in touch with our experts today."
          btnTitle="Contact Us"
        />
      </section>
    </div>
  );
};

export default Services;
