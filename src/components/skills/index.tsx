import React from "react";
import GradientBoxes from "./components/ProgrammingLanguages";
import Tools from "./components/toolsx";

export default function Skills() {
  return (
    <div>
      <h2 className="text-[2rem] text-white">Skills & Tools</h2>
      <div className="flex justify-center items-center gap-20">
        <GradientBoxes title="Programming Languages" />
        <Tools />
      </div>
    </div>
  );
}
