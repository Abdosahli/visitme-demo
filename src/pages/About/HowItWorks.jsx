import React from "react";
import AboutPageTemplate from "./AboutPageTemplate";
 

const HowItWorks = () => {
  const content = [
    {
      heading: "Step 1: Discover",
      text: "Find high-end restaurants, hotels, and bars instantly using our curated platform.",
    },
    {
      heading: "Step 2: Explore",
      text: "See 360° virtual tours, menus, and reviews before visiting.",
    },
    {
      heading: "Step 3: Enjoy",
      text: "Book your table, hotel, or event easily and enjoy an unforgettable experience.",
    },
  ];

  return (
    <AboutPageTemplate
      title="How It Works"
      subtitle="Luxury experiences made simple"
      content={content}
      image={HeroImage}
    />
  );
};

export default HowItWorks;
