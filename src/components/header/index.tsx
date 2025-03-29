import React from "react";

export default function Header() {
  const header_menu = [
    {
      title: "About me",
      link: "#about-me",
    },
    {
      title: "Skills & Tools",
      link: "#skills",
    },
    {
      title: "Experiences",
      link: "",
    },
    {
      title: "Projects",
      link: "",
    },
  ];
  return (
    <div className="flex bg-[#1E1E2F] w-full fixed top-0 text-white justify-between p-5 items-center">
      <h1>Melina Musakhani Portfolio</h1>
      <div className="flex gap-4 items-center">
        {header_menu.map(({ title, link }, index) => {
          return (
            <div key={index}>
              <a className="relative inline-block group" href={link}>
                {title}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-[#5c8ce5] group-hover:w-full transition-all duration-250"></span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
