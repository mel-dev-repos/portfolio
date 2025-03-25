import React from "react";

export default function Tools() {
  return (
    <div>
      <div className="gradient-border-box w-5/6 gap-6 shadow-2xl">
        <div className="content">
          <h2 className="text-center mb-5">Tools & Tecnologies</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img src="/assets/images/visual.png" className="w-20" />
            <img src="/assets/images/figma.png" className="w-20" />
            <img src="/assets/images/github.svg"  className="w-20" />
          </div>
       
        </div>
      </div>
    </div>
  );
}
