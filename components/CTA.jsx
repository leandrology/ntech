import React from "react";
import Link from "next/link";

const CallToAction = ({ btnTitle, description, subDescription }) => {
  return (
    <div>
      <section className="cta container px-6 py-12 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {description}
        </h2>
        {subDescription && subDescription.trim() !== "" && (
          <h3 className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
            {subDescription}
          </h3>
        )}
        {btnTitle && btnTitle.trim() !== "" && (
          <Link href="/contact">
            <btn className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-lg bg-rose-600 focus-visible:ring-black hover:bg-rose-700 hover:text-white">
              {btnTitle}
            </btn>
          </Link>
        )}
      </section>
    </div>
  );
};

export default CallToAction;
