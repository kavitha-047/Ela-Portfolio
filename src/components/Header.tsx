import React, { useState, useEffect } from "react";
export default function Header() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const spy = () => {};
    window.addEventListener("scroll", spy);
    return () => window.removeEventListener("scroll", spy);
  }, []);
  return <header>Spy Scroll Header</header>;
}
