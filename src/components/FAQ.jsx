import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqs = [
    {
      key: "0",
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      key: "1",
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Tortor scelerisque integer nulla sed faucibus. Ultricies consectetur sed elit tincidunt in egestas.",
    },
    {
      key: "2",
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Faucibus scelerisque nunc ut adipiscing tellus. Sed turpis pulvinar sit arcu netus sem.",
    },
  ];

  return (
    <Container className="my-5 #FAF8FF py-5">
      <h3 style={{ color: '#4F46E5' }} className="text-center mb-4">Frequently asked questions</h3>
      <Accordion activeKey={activeKey}>
        {faqs.map((faq) => (
          <Accordion.Item eventKey={faq.key} key={faq.key}>
            <Accordion.Header
              onClick={() => toggleActiveKey(faq.key)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "1rem",
                position: "relative",
              }}
            >
              <span style={{ flex: 1 }}>{faq.question}</span>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {activeKey === faq.key ? "−" : "+"}
              </span>
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <style>
        {`
          .accordion-button::after {
            display: none !important;
          }
        `}
      </style>
    </Container>
  );
}

export default FAQ;
