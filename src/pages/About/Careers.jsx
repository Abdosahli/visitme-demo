import React from "react";
import AboutPageTemplate from "./AboutPageTemplate";
 

const Careers = () => {
  const content = [
    {
      heading: "Join Our Team",
      text: "We are looking for talented and passionate individuals to join our luxury hospitality platform. Grow your career with us while shaping unforgettable experiences.",
    },
    {
      heading: "Why Work With Us",
      text: "Competitive salaries, flexible work environment, and opportunities to work on high-end projects with industry leaders.",
    },
    {
      heading: "Open Positions",
      text: "Frontend Developer, Backend Developer, UX/UI Designer, Marketing Manager. Apply today and become part of our journey!",
    },
  ];

  return (
    <AboutPageTemplate
      title="Careers"
      subtitle="Your future starts here"
      content={content}
      image={HeroImage}
    />
  );
};

export default Careers;
