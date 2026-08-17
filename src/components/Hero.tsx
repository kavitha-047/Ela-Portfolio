import React from "react";
export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10"><line x1="0" y1="0" x2="100" y2="100" stroke="#000" /></svg>
      </div>
      <h1>Hero Grid</h1>
    </section>
  );
}
