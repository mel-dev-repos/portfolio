import React from "react";

export default function SoftSkills() {
  const items = [
    "Time Managment",
    "Problem-Solving & Debugging",
    "Agile & TeamWork",
    "Collaborative & Communication",
  ];
  return (
    <div className="flex items-center">
      {items.map((item: string) => {
        return (
          <div className="text-white 
          " key={item}>
            <span className="w-5 h-5 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full"></span>
            <span >{item}</span>
          </div>
        );
      })}
    </div>
  );
}
