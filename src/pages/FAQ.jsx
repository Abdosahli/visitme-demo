import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How do I book a restaurant?",
    answer:
      "Simply browse restaurants, choose your favorite one, and click the booking button to reserve a table instantly."
  },
  {
    question: "Can I see the restaurant menu before booking?",
    answer:
      "Yes, every restaurant page includes the full menu with prices so you can decide before booking."
  },
  {
    question: "Are the reviews from real customers?",
    answer:
      "Yes. Reviews are written by users who visited the restaurant and shared their experience."
  },
  {
    question: "Can I save restaurants to my favorites?",
    answer:
      "Of course! Click the heart icon on any restaurant to add it to your favorites list."
  }
];

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>

              <FaChevronDown
                className={`faq-icon ${
                  openIndex === index ? "rotate" : ""
                }`}
              />

            </div>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
};

export default FAQ;