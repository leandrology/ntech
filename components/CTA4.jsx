import React from "react";

const CTA4 = () => {
  return (
    <div>
      <div className="w-full items-center lg:px-24 max-w-7xl md:px-12 mx-auto px-8 py-2">
        <div className="relative  bottom-0 isolate overflow-hidden px-6 py-24 sm:px-24 xl:py-32">
          <h4 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Keep Updated
          </h4>

          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 dark:text-gray-300 text-gray-700">
            Stay updated with our latest posts. Subscribe to our newsletter.
          </p>

          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label for="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              className="min-w-0 flex-auto rounded-md bg-gray-200/50 border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none border border-primary-200/50 dark:border-none rounded-md dark:bg-white dark:text-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-rose-600 focus-visible:ring-black hover:bg-rose-700 hover:text-white text-white"
            >
              Subscribe to newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA4;
