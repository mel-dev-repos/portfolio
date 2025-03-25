import React from "react";
interface propTypes {
  title: string;
}
export default function ProgrammingLanguages({ title }: propTypes) {
  return (
    <div>
      <div className="gradient-border-box w-5/6 gap-6 shadow-2xl">
        <div className="content">
          <h2 className="text-center">{title}</h2>
          <div className="flex flex-wrap justify-center items-center">
            <img src="/assets/images/html5.png" className="w-20" />
            <img src="/assets/images/css.png" className="w-30" />
            <img src="/assets/images/js.png" className="w-15" />
          </div>
          <div className="flex items-center mt-5 gap-8">
            <img src="/assets/images/react.png" className="w-20 " />
            <img src="/assets/images/nextjs.webp" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
