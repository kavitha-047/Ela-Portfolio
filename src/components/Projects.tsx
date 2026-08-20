import React, { useState } from "react";
export default function Projects() {
  const [filter, setFilter] = useState("all");
  return <section id="projects"><h2>Filter: {filter}</h2></section>;
}
