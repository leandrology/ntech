import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae.
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3>
                <p class="my-4">
                  I recently got my hands on Neidrotech, and holy crap, I am
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme.
                </p>
                <p class="my-4">
                  Neidrotech has code in one place and I am not joking when I
                  say it took me a matter of minutes to copy the code, customise
                  it and integrate within a Laravel + Vue application.
                </p>
                <p class="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  width={50}
                  height={50}
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p class="my-4">
                  Neidrotech provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework. From
                  the most used UI components like forms and navigation bars to
                  the whole app screens designed both for desktop and mobile,
                  this UI kit provides a solid foundation for any project.
                </p>
                <p class="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  width={50}
                  height={50}
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow and variants
                </h3>
                <p class="my-4">
                  As someone who mainly designs in the browser, I have been a
                  casual user of Figma, but as soon as I saw and started playing
                  with Neidrotech my mind was 🤯.
                </p>
                <p class="my-4">
                  Everything is so well structured and simple to use (I have
                  learnt so much about Figma by just using the toolkit).
                </p>
                <p class="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application.
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  width={50}
                  height={50}
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p class="my-4">
                  This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </p>
                <p class="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team.
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  width={50}
                  height={50}
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
