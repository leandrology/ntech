import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGlobe,
  faMobileAlt,
  faWrench,
  faChartLine,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

import {
  FaLaptopCode,
  FaGlobe,
  FaMobileAlt,
  FaWrench,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Services
            </h2>
            <p className="text-white sm:text-xl dark:text-gray-400">
              Here at Neidrotech we provide IT solutions tailored to your
              business needs, ensuring efficiency and growth.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaLaptopCode /> <span>Software Development</span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaGlobe /> <span>Web Development</span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaMobileAlt /> <span>Mobile App Development</span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaWrench /> <span>IT Support and Managed Services</span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaChartLine />{" "}
                  <span>Data Analytics and Business Intelligence </span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Link href="/">
                <h3 className="mb-2 text-xl font-bold text-white services-h3">
                  <FaCloud /> <span>Cloud Services</span>
                </h3>
              </Link>
              <p className="text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
