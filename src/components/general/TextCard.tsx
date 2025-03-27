import React from "react";

interface TextCardProps {
    title: string; 
    text: string;
    className?: string;
}

export default function TextCard({ title, text, className }: TextCardProps) {
  return (
    <div
      className={`${className} pt-8 pr-6 pb-5 w-full h-full flex flex-col bg-[#d3ebfb] rounded-4xl drop-shadow-[20px_20px_22.2px_rgba(0,0,0,0.2)] backdrop-blur-[50px] transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
    >
      <h1 className="text-4xl mb-3">{title}</h1>
      <p className="self-start w-[78%] text-xl">
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
