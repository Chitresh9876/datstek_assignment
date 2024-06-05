import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import Faq from './Faq';

const QnA = [
  {
    id: 1,
    question: "How to get started?",
    answer:
      "To get started simply sign up for an account on MiCounsel and follow the step-by-step process to create your legal documents online.",
  },
  {
    id: 2,
    question: "What type of document can I create?",
    answer:
      "MiCoursel offers wide range of legal document templates, including contracts, aggrements, wills ans more.",
  },
  {
    id: 3,
    question: "Is my information secure?",
    answer:
      "MiCounsel takes data security seriously. We use industry-standard encryption and have strict privacy policies in place to protect your information.",
  },
  {
    id: 4,
    question: "Can I edit my documents?",
    answer:
      "Yes, you can easily edit your documents on MiCounsel. Simply log in to your account and make the necessary changes.",
  },
  {
    id: 5,
    question: "How much does it cost?",
    answer:
      "MiCounsel offers both free and paid plans. Visit our pricing page for more information on our subscription options",
  },
];

const QuestionSection = () => {
  return (
    <Stack
      gap={2}
      direction="horizontal"
      className="justify-content-between m-5 align-items-start"
    >
      <div style={{ width: "40%" }}>
        <h1 className="fw-bold">Questions</h1>
        <p>
          Find answers to common questions about the legal document creation and
          the services provided by MiCounsel.
        </p>
        <button className="btn border-black rounded-0">Contact</button>
      </div>
      <div style={{ width: "50%" }}>
        {QnA.map((element) => (
          <Faq
            key={element?.id}
            question={element?.question}
            answer={element?.answer}
          />
        ))}
      </div>
    </Stack>
  );
}

export default QuestionSection
