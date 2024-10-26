import React, { useState } from "react";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbarLogin";
import Footer from "./Footer";

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  margin: 10%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Question = styled.div`
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const Answer = styled.div`
  padding: 10px 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #f1f1f1;
  border-left: 3px solid #007bff;
`;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Wrestling Mania Pakistan?",
      answer:
        "Wrestling Mania Pakistan is a platform for wrestlers to showcase their skills in a professional wrestling environment.",
    },
    {
      question: "How can I book seats for an event?",
      answer:
        "You can book seats through our website by selecting your preferred event and choosing your seats from the seating chart.",
    },
    {
      question: "Are there age restrictions for events?",
      answer:
        "Generally, our events are family-friendly. However, specific age restrictions may apply depending on the event.",
    },
    {
      question: "What happens if I can't attend an event after booking?",
      answer:
        "If you can't attend, please check our refund policy. Generally, we offer refunds up to 48 hours before the event.",
    },
    {
      question: "Can I change my seat after booking?",
      answer:
        "Yes, you can change your seat if there are available options. Please contact our support team for assistance.",
    },
    {
      question: "Is there a way to get notifications for upcoming events?",
      answer:
        "Yes, you can subscribe to our newsletter to receive notifications about upcoming events and special offers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <TopNavbar />
      <FAQContainer>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleFAQ(index)}>{faq.question}</Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </div>
        ))}
      </FAQContainer>
      <Footer/>
    </>
  );
};

export default Faq;
