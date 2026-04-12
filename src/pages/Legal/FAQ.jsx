import React, { useState, useEffect } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const faqData = [
  {
    id: 1,
    question: "What is VisitMe?",
    answer: "VisitMe is a platform that helps you discover the best restaurants, hotels, and cafes across Morocco with real-time data and reviews."
  },
  {
    id: 2,
    question: "How can I list my business?",
    answer: "You can list your business by clicking on the 'Add Listing' button in the navigation bar and filling out the required information about your establishment."
  },
  {
    id: 3,
    question: "Is it free to use?",
    answer: "Yes, searching and discovering places on VisitMe is completely free for all users."
  },
  {
    id: 4,
    question: "How do I contact support?",
    answer: "You can reach our support team via email at support@visitme.com or through our contact page."
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
    <Navbar/>
    <div className="faq-page">
      <div className="faq-hero">
        <h1>How can we help?</h1>
        <p>Find answers to the most frequently asked questions</p>
      </div>

      <div className="faq-container">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className={`faq-item ${activeId === item.id ? "active" : ""}`}
            onClick={() => toggleFAQ(item.id)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span>{activeId === item.id ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default FAQ;