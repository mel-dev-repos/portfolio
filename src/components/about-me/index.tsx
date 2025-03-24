import Image from "next/image";
import React from "react";
export default function AboutMe() {
  return (
    <div id="about-me" className="text-white items-center flex">
      <div className="flex flex-col">
        <h1 className="text-[3rem] font-bold">Hello,I'm Melina Musakhani</h1>

        <span className="gradient-text">Frontend Developer</span>
        <p className="text-justify text-gray-400 w-2/3"> 
          As a passionate and detail-oriented Front-End Developer, I specialize
          in creating intuitive, dynamic, and visually appealing user
          interfaces. With extensive experience in React.js and Next.js, I am
          dedicated to building seamless and responsive web applications that
          deliver exceptional user experiences. I have a strong foundation in
          HTML, CSS, JavaScript, and modern JavaScript frameworks, allowing me
          to turn creative ideas into functional, high-performing web solutions.
          My expertise in React.js has allowed me to craft complex, state-driven
          applications while maintaining a focus on scalability, performance,
          and maintainability. Additionally, my experience with Next.js has
          empowered me to build server-side rendered (SSR) and static websites,
          providing faster load times and improved SEO performance. I thrive in
          collaborative environments and enjoy working closely with designers,
          back-end developers, and product teams to deliver solutions that meet
          business objectives and exceed user expectations. I am constantly
          expanding my skill set by staying up-to-date with the latest trends in
          front-end development and constantly refining my craft.
        </p>
        <a className="mt-10" href="/assets/cv.pdf" download="Melina_Musakhani_Resume.pdf">
          <button className="bg-gradient-to-r cursor-pointer from-purple-400 to-[#5c8ce5] text-white py-2 px-6 rounded-2xl shadow-lg">
            Download CV
          </button>
        </a>
      </div>
      <Image

        className="rounded-full w-80 h-80"
        alt="me"
        src="/assets/me.jpg"
        width={200}
        height={200}
      />
    </div>
  );
}
