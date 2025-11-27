import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { img, svg } from "framer-motion/client";

const Partner = () => {
  const benefitCards = [
    {
      title: "Earning Money",
      desc: "Earn upto 20% commission for every job you outsource to other partners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="26" fill="#eaf3ff" />
          <g
            fill="none"
            stroke="#1e6bf7"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 24c0-3.5 2.8-6 6-6h12c3.2 0 6 2.5 6 6v4c0 9-6 14-12 16-1.5.4-3.2.6-4.8.6s-3.3-.2-4.8-.6c-6-2-12-7-12-16v-4z" />
            <path d="M28 20c0 2.5 4 2.5 4 2.5s4 0 4-2.5" />
            <path d="M33.5 30.5c1.5 0 2.5.8 2.5 2.2 0 1.6-1.2 2.1-3 2.9-1.8.8-2.5 1.6-2.5 2.6 0 1.2 1 2.2 2.5 2.2" />
          </g>
        </svg>
      ),
    },
    {
      title: "Intelligent Reporting",
      desc: "Learn about new time-saving reporting at your fingertips.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="26" fill="#eaf3ff" />
          <g
            fill="none"
            stroke="#1e6bf7"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 34c3-3 8-3 11 0l6 4 6-4c3-3 8-3 11 0" />
            <path d="M18 36c1.8 1.2 4.2 1.4 6.2.4l5.6-3.2" />
            <path d="M30 38l4 2 6-3" />
            <path d="M12 44h6" />
            <path d="M46 44h6" />
          </g>
        </svg>
      ),
    },
    {
      title: "Growth Potential",
      desc: "Become part of the network of one of the fastest growing companies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="26" fill="#eaf3ff" />
          <g
            fill="none"
            stroke="#1e6bf7"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="18" y="34" width="4.8" height="10" rx="1" />
            <rect x="27" y="28" width="4.8" height="16" rx="1" />
            <rect x="36" y="22" width="4.8" height="22" rx="1" />
            <rect x="45" y="16" width="4.8" height="28" rx="1" />
            <path d="M16 46L28 34l10-6 10-6" />
            <path d="M52 14v8h-8" />
          </g>
        </svg>
      ),
    },
    {
      title: "Easy Registration",
      desc: "Register in less than 10 minutes, All you need is to have a business of your own.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="26" fill="#eaf3ff" />
          <g
            fill="none"
            stroke="#1e6bf7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 14h14l6 6v24a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
            <path d="M36 14v8h8" />
            <path d="M26 26h20" />
            <path d="M26 30h14" />
            <circle cx="34" cy="40" r="6" />
            <path d="M34 34v6h6" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-row gap-10 w-[90%] mx-auto py-10 justify-center">
          <p className="text-4xl font-bold py-3 leading-tight">
            PARTNER <br /> WITH US
          </p>

          <p className="flex flex-col text-center text-lg font-normal text-gray-700 w-[60%] leading-relaxed">
            Are you an attorney with a zeal to help people with legal services
            and a strong statistic to prove it? Let’s talk. We're looking for
            attorneys across India to provide our customers/Partners with sound
            legal advice, consulting, representation and other related legal
            services.
          </p>

          <div className="flex py-6">
            <button className="text-blue-500 border-blue-500 rounded-md border-2 text-lg py-1 px-4">
              Register <br /> Now
            </button>
          </div>
        </div>

        <div className="w-[90%] h-[4/3px] bg-gray-200 mx-auto"></div>

        <div>
          <div className="py-10 text-center">
            <p className="text-3xl text-black font-semibold">
              Advantages Of Being Part Of Our Community
            </p>
          </div>

          <div className="w-[90%] mx-auto flex justify-between items-stretch px-4 gap-6">
            {benefitCards.map((item, index) => (
              <div
                key={index}
                className="w-[25%] bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center  "
              >
                <div className="mb-4">{item.icon}</div>

                <p className="text-xl font-semibold text-black">{item.title}</p>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20 w-[90%] mx-auto">
          <p className="text-center text-3xl text-gray-800 py-10 font-semibold">
            Joining Corpseed Is Really Easy
          </p>

          <div className="flex flex-row justify-between">
            <div className="w-[48%] p-10 rounded-lg bg-white shadow-sm">
              <p className="text-xl font-semibold mb-3">Outsource A Service</p>
              <p className="text-gray-700 leading-relaxed">
                List your service on our portal and you are done. Our Help Team
                will always be there if anything goes wrong.
              </p>
            </div>

            <div className="w-[48%] p-10 rounded-lg bg-white shadow-sm">
              <p className="text-xl font-semibold mb-3">
                Easy Delivery of Service
              </p>
              <p className="text-gray-700 leading-relaxed">
                Enjoy hassle-free delivery of service. Let another expert
                partner of CorpSeed handle it end to end and you will be paid up
                to 15%. Isn't that simple?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partner;
