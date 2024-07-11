import React from "react";

const CTA2 = () => {
  return (
    <div>
      <div class="w-full items-center lg:px-24 max-w-7xl md:px-12 mx-auto px-8 py-2 pb-32">
        <div class="relative items-center">
          <div class="w-full justify-between lg:inline-flex lg:items-center">
            <div class="max-w-xl">
              <span class="text-sm text-rose-500 font-semibold uppercase tracking-widest">
                Transform your business today
              </span>
              <p class="text-black font-extrabold mt-8 text-4xl tracking-tight">
                Join over 4,000+ startups already growing with us.
              </p>
            </div>
            <div class="flex flex-col lg:ml-auto mt-12 sm:flex-row">
              <a
                class="w-full items-center inline-flex duration-200 focus:outline-none font-medium justify-center px-6 py-3 rounded-xl text-center focus-visible:outline-black lg:w-auto bg-rose-600 focus-visible:ring-black hover:bg-rose-700 hover:text-white text-white"
                href="/contact"
              >
                Contact Us &nbsp;&nbsp;
                <span class="font-bold text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
