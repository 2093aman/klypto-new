"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Is Klypto safe and regulated?",
    answer:
      "Yes, Klypto prioritizes user security with end-to-end encryption, multi-layered authentication, and strict adherence to Indian regulatory norms, including KYC and TDS compliance.",
  },
  {
    question: "Do I need prior trading experience to use Klypto?",
    answer:
      "No, Klypto is suitable for traders of all experience levels. We offer educational materials and a supportive community to help beginners learn and provide advanced strategies for experienced traders.",
  },
  {
    question: "Can I trade on Klypto using a mobile device?",
    answer:
      "Yes, it is optimized for mobile trading. You can access your account, trade, and stay updated with the markets using our mobile app or a mobile-friendly website.",
  },
  {
    question: "How do I join the #Klypto community?",
    answer:
      "Joining the #Klypto community is easy. You can participate in discussions and share your experiences on our platform's community forum. Use the hashtag #Klypto on social media to connect with traders worldwide.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Side - FAQ */}
        <div>
          <h2 className="text-[30px] font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-[16px] font-normal mb-6 text-gray-700">
            Find Quick Answers To Common Queries In Our FAQs Section. Learn More About Trading,
            Easytrade Features, And More.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className=" rounded-lg overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-4 py-3 text-left text-[16px] font-bold transition-colors duration-300
                    ${
                      openIndex === index
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>

                {/* Answer with smooth accordion */}
                <div
                  className={`transition-all duration-500 overflow-hidden text-gray-700 text-[16px] font-normal
                    ${openIndex === index ? "max-h-40 px-4 py-3" : "max-h-0 px-4"}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/home/Artboard-5.webp"
            alt="FAQ Illustration"
            width={450}
            height={450}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
