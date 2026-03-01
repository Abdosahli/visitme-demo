import React from "react";
import AboutPageTemplate from "./AboutPageTemplate";


const OurStory = () => {
  const content = [
    {
      heading: "Our Mission",
      text: "To connect people with luxury experiences in an effortless way.",
    },
    {
      heading: "Our Vision",
      text: "Redefining how the world discovers and enjoys high-end hospitality.",
    },
  ];

  return (
    <AboutPageTemplate
      title="Our Story"
      subtitle="Elegance, simplicity, and passion"
      content={content}
      image={HeroImage}
    />
  );
};

export default OurStory;
