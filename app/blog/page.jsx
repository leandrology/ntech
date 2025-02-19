import CTA4 from "@/components/CTA4";
import React from "react";
const Blog = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Blog
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Insights, updates, and stories from the world of IT services.
          </p>
        </div>
        <CTA4 />
      </section>
    </div>
  );
};

export default Blog;
