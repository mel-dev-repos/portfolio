import React from "react";

export default function Header() {
  const header_menu = [
    {
      title: "About me",
      link: "",
    },
    {
      title: "Skills & Tools",
      link: "",
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
    <div className="flex text-white justify-between items-center">
      <h1>Melina Musakhani</h1>
      <div className="flex gap-4 items-center">
        {header_menu.map(({ title, link }, index) => {
          return (
            <a key={index} href={link}>
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
