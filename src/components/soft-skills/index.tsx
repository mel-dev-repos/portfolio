import React from "react";

export default function SoftSkills() {
  const items = [
    "Time Managment",
    "Problem-Solving & Debugging",
    "Agile & TeamWork",
    "Collaborative & Communication",
  ];
  return (
    <>
      <h2 className="text-[2rem] px-10 text-white">Soft Skills</h2>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 items-center">
          {items.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-center my-4  gap-2 text-white text-lg font-semibold"
            >
              <span className="w-4 h-4 bg-gradient-to-r cursor-pointer from-purple-400 to-[#5c8ce5] rounded-full"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
