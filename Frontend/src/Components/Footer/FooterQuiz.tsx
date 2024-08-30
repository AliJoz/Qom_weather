import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  { question: "آیا اطلاعات داده شده درست می‌باشد؟", answer: "بله  " },
  { question: "راه ارتباطی با ما چگونه است؟", answer: "تماس با: 137" },
  {
    question: "برای ارتباط بیشتر باید چکار کنم؟ ",
    answer: <Link to="https://qom.ir/site/contact">اینجا کلیک کنید</Link>,
  },
  // { question: "سوال 4", answer: "پاسخ سوال 4" },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="text-center  text-zinc-800 dark:text-zinc-100 font-bold pt-4 text-2xl tracking-tighter">
        {" "}
        ارتباط با ما
      </h2>
      <div className="direction-rtl p-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="mb-2 bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-zinc-600 dark:to-zinc-900"
          >
            <div
              className="cursor-pointer p-3 border bg-boxFooter text-zinc-900 text-center tracking-tighter font-bold font-yekan  leading-tight rounded-lg "
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="cursor-pointer mt-2 p-3 border text-neutral-50 bg-gray-400  dark:bg-gray-600   text-center tracking-tighter font-bold font-yekan  leading-tight rounded-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
