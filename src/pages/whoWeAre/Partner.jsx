import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Partner = () => {
  const benefitCards = [
    {
      title: "Earning Money",
      desc: "Earn upto 20% commission for every job you outsource to other partners.",
      img: "https://www.corpseed.com/assets/svg/Group%201006.svg",
    },
    {
      title: "Intelligent Reporting",
      desc: "Learn about new time-saving reporting at your fingertips.",
      img: "https://www.corpseed.com/assets/svg/Group%201007.svg",
    },
    {
      title: "Growth Potential",
      desc: "Become part of the network of one of the fastest growing companies.",
      img: "https://www.corpseed.com/assets/svg/Group%201008.svg",
    },
    {
      title: "Easy Registration",
      desc: "Register in less than 10 minutes, All you need is to have a business of your own.",
      img: "https://www.corpseed.com/assets/svg/Group%201009.svg",
    },
  ];

  return (
    <div>
      <div className="py-10 px-4 sm:px-6 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center text-center lg:text-left">
          <div className="lg:w-1/3 flex justify-around">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              PARTNER <br /> WITH US
            </h1>
          </div>

          <div className="lg:w-2/3">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Are you an attorney with a zeal to help people with legal services
              and a strong statistic to prove it? Let’s talk. We're looking for
              attorneys across India to provide our customers/Partners with
              sound legal advice, consulting, representation and other related
              legal services.
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="text-blue-500 cursor-pointer border-blue-500 rounded-md border-2 text-lg py-2 px-6">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-[3px] bg-gray-200 w-full"></div>

        {/* Benefits */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Advantages Of Being Part Of Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm"
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />
              <p className="text-xl font-semibold text-black">{item.title}</p>
              <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Easy Joining */}
        <div className="py-20">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-10">
            Joining Corpseed Is Really Easy
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2 bg-white p-6 sm:p-10 rounded-lg shadow-sm">
              <p className="text-xl font-semibold mb-3">Outsource A Service</p>
              <p className="text-gray-700 leading-relaxed">
                List your service on our portal and you are done. Our Help Team
                will always be there if anything goes wrong.
              </p>
            </div>

            <div className="lg:w-1/2 bg-white p-6 sm:p-10 rounded-lg shadow-sm">
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

      
    </div>
  );
};

export default Partner;
