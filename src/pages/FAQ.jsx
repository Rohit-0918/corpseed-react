import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Benefits of taking services from Corpseed ?",
    content:
      "At Corpseed, we are committed to offer our services to the entrepreneurs and businesses as a very cost-effective proposition. We believe that a customer is always right and the focus of any business activity should be to serve the customer with utmost loyalty. All our services come with SLAs (Service Level Agreements) for on-time service delivery and money back guarantee to ensure high level of customer satisfaction.",
  },
  {
    id: 2,
    title: "What is Corpseed cashback policy?",
    content:
      "If a customer is not satisfied with the service we provided and if he contacts our customer care helpline and files a formal complaint within 15 days of service delivery date, Corpseed would refund the entire or partial amount of Professional Fee charged for that particular service.",
  },
  {
    id: 3,
    title: "Process to register customer complaints?",
    content:
      "If a customer is having issues with our service delivery process, he has various alternatives available at his disposal to register his grievance with us. He can either email his complaint at complaints@corpseed.com or he can call our 24x7 Customer Care Helpline. Also, any customer is always welcome to visit our office to lodge a complaint with the senior management.",
  },
  {
    id: 4,
    title: "What is the process for online payment?",
    content:
      "A customer can buy our services directly from our online platform, for which he needs to make online payment. Once he clicks on Apply Now, a new window will open, a customer is required to submit the information in the respective fields and click Make Payment. A unique ticket number will be auto generated, the customer needs to quote this number as reference for any enquiry regarding his service request.",
  },
  {
    id: 5,
    title: "Is the online payment secured?",
    content:
      "All the monetary transactions performed on Corpseed online platform are secured with SSL System Protocol. We encrypt the customer information such as credit card and bank account details, before these are transmitted anywhere. We adhere to PCI DSS for data security standards for payment processing.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const cheveronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );

  const cheveronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-10">
      {/* Heading */}
      <div className="flex flex-col gap-3 md:gap-4 py-6 text-center">
        <p className="text-3xl md:text-5xl font-semibold">F. A. Q</p>
        <p className="text-base md:text-xl text-gray-600 px-2 md:px-4">
          Frequently Asked Questions
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Services We Provide
        </p>
        {data.map((item) => (
          <div key={item.id} className="rounded-md overflow-hidden shadow-sm">
            {/* Title */}
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-100 focus:outline-none text-sm md:text-base"
              onClick={() => toggleAccordion(item.id)}
            >
              <span>{item.title}</span>
              <span className="text-lg md:text-xl">
                {openId === item.id ? cheveronDown : cheveronRight}
              </span>
            </button>

            {/* Content */}
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openId === item.id
                  ? "max-h-96 py-3 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm md:text-base">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="w-full mt-8 flex flex-col gap-3 md:gap-4 text-sm md:text-base">
        <p className="text-xl">
          For job opportunities, view our{" "}
          <a className="text-blue-600" href="/join-our-team">
            open roles
          </a>
          .
        </p>
        <p className="text-xl">
          For business partnerships, visit our{" "}
          <a className="text-blue-600" href="/partner">
            forum
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQ;
