import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndustriesData } from "../../toolkit/slices/IndustriesSlice";
import ScheduleACallback from "../../components/ScheduleACallback";
import EPRCommon from "./components/EPRCommon";
import StepsCorpseed from "./components/StepsCorpseed";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Carousel from "./components/Carousel";
import IndustryLatestNews from "./components/IndustryLatestNews";
import Call from "./../../components/Call";

const IndustryPage = () => {
  const content = [
    {
      tab: "Overview",
      title: "<h2>How to Setup Automobiles Industry In India</h2>",
      content: `<p style="text-align: justify;">A business like an Automobile, has to be driven to get results.</p>
      <p>The assembly of parts to create cars, trucks, and other motor vehicles is known as automotive manufacturing. This procedure is intricate and includes various phases, such as designing the vehicle and its parts, putting together the components, testing the vehicle, and ultimately handing it over to customers. The production of automobiles necessitates specialized machinery, expert technicians, and a range of raw materials.</p>`,
    },
    {
      tab: "Project Planning",
      title: "<h2>Project Planning for Automobile Industry</h2>",
      content: `<p>Effective project management is crucial within the automotive sector to ensure the successful development and delivery of products.</p>
      <p>Customers are becoming the focal point of the automotive ecosystem due to their growing purchasing power and preferences.</p>`,
    },
    {
      tab: "Technology",
      title: "<h2>Technology/Machinery Used in the Automobile Industry</h2>",
      content: `<p>Utilizing CNC machines in the automotive sector involves creating various automobile components through processes like casting, turning, drilling, grinding, and milling. CNC technology sped up the manufacturing process.</p>`,
    },
    {
      tab: "Compliance",
      title: "<h2>Compliance required in the Automobile Industry</h2>",
      content: `<p>Regulations for car manufacturers include safety and emission standards, certification, roadworthiness, and manufacturing criteria.</p>`,
    },
    {
      tab: "Layout Design",
      title: "<h2>Layout Design Consultation for Automobile Industry</h2>",
      content: `<p>Plant layout design organizes equipment and services to improve space efficiency while maintaining high-quality output.</p>`,
    },
    {
      tab: "Operations",
      title: "<h2>Operations related to Automobile Sector</h2>",
      content: `<p>Managing operations in automotive assembly, particularly in the paint shop, is a complicated task.</p>`,
    },
    {
      tab: "Waste Management",
      title: "<h2>Waste Management of Automobiles Industry</h2>",
      content: `<p>Methods include reducing, recovering, recycling, reusing, landfilling, and incinerating.</p>`,
    },
    {
      tab: "ESG",
      title: "<h2>ESG of Automobile Industry</h2>",
      content: `<p>The automotive sector faces growing demands to tackle environmental, social, and governance concerns.</p>`,
    },
    {
      tab: "ESDD/Audit",
      title:
        "<h2>Environmental Social Due Diligence/Audit in Automobile Industry</h2>",
      content: `<p>Companies need to assess suppliers and distributors to reduce operational, ESG, and integrity risks.</p>`,
    },
    {
      tab: "Raw Materials",
      title: "<h2>Natural Raw Materials used in Automobile</h2>",
      content: `<p>Iron, Aluminum, Rubber, and Petroleum are key materials used in automobile manufacturing.</p>`,
    },
    {
      tab: "Government Scheme",
      title: "<h2>Scheme of Government Related to the Automobile Industry</h2>",
      content: `<p>The PLI-Auto Scheme aims to enhance production of Advanced Automotive Technology (AAT) Products and support localization.</p>`,
    },
    {
      tab: "Why Corpseed",
      title: "<h2>Why Corpseed</h2>",
      content: `<p>Corpseed offers specialized automotive consulting services for project planning, technology adoption, compliance, operations, ESG, and government schemes.</p>`,
    },
  ];

  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.industries);
  const [activeFaq, setActiveFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    message: "",
  });

  const contentRefs = useRef([]);
  const tabsContainerRef = useRef(null);

  const scrollToContent = (index) => {
    contentRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 150;
      tabsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const enquiryFormTitle = data?.data?.industryTitle || "";

  useEffect(() => {
    dispatch(getIndustriesData(slug));
  }, [slug, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const industryTitle = data?.data?.industryTitle || "";
  const industryDescription = data?.data?.metaDescription || "";
  const popularIndustries = data?.data?.relatedIndustries?.map((industry) => ({
    title: industry.industryTitle,
    slug: industry.industrySlug,
    metaDescription: industry.metaDescription,
  }));

  const faq = data?.data?.faqs?.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
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
    <>
      {/* Hero Section */}
      <div
        className="w-full bg-black h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: `url('YOUR_IMAGE_URL_HERE')` }}
      >
        <div className="w-full sm:w-4/5 lg:w-2/5 px-4 sm:px-10 md:px-20 flex flex-col gap-2 sm:gap-4 text-white">
          <button className="bg-blue-500 text-white p-1 sm:p-2 text-xs sm:text-sm w-max">
            Includes Free Support
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {industryTitle}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            {industryDescription}
          </p>
        </div>

        {/* Call positioned bottom-right, half inside & half outside */}
<div className="absolute right-15 bottom-0 translate-y-[30%] hidden sm:block">
  <Call />
</div>

      </div>

      <div className="py-15 px-4  sm:px-6 md:px-10 lg:px-20 mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 justify-between">
          <EPRCommon />
          <ScheduleACallback />
        </div>

        {/* Carousel */}
        <Carousel />

        {/* Popular Industries */}
        <div className="py-3">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
            Popular Industries
          </h1>

          {/* Container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-visible sm:overflow-x-auto">
            {popularIndustries?.map((industry, index) => (
              <div
                key={index}
                className="w-full sm:min-w-[250px] md:min-w-[280px] p-2"
              >
                <div className="border border-gray-300 bg-[#25366e] rounded-lg shadow-md p-4 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base line-clamp-3 mt-2">
                    {industry.metaDescription}
                  </p>
                  <a
                    href={`/industry/${industry.slug}`}
                    className="mt-auto text-white hover:text-blue-400 no-underline text-sm sm:text-base"
                  >
                    KNOW MORE {">"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs & Form */}
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[700px] h-auto">
          {/* Tabs */}
          <div className="w-full lg:w-2/3 flex flex-col lg:h-full h-auto">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 p-2 overflow-x-hidden">
              <button
                onClick={() => scrollTabs("left")}
                className="px-3 cursor-pointer py-2"
              >
                &lt;
              </button>
              <div
                ref={tabsContainerRef}
                className="flex gap-2 flex-1 overflow-x-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {content.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToContent(index)}
                    className="px-3 sm:px-4 py-2 cursor-pointer rounded-md text-black whitespace-nowrap hover:bg-gray-100 focus:outline-none"
                  >
                    {item.tab}
                  </button>
                ))}
                <style>
                  {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
                </style>
              </div>
              <button
                onClick={() => scrollTabs("right")}
                className="px-3 py-2 cursor-pointer"
              >
                &gt;
              </button>
            </div>

            {/* Tabs Content */}
            <div className="p-4 flex-1 overflow-y-auto lg:h-full h-auto">
              {content.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="mb-8"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className="mb-4 text-lg sm:text-xl font-semibold"
                  />
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              ))}
              <StepsCorpseed />
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/3 lg:h-fit ">
            <div className="bg-gray-50 shadow p-4 sm:p-6 rounded-md h-full">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 flex flex-col bg-white p-4 sm:p-6 rounded-md h-full"
              >
                <p className="text-lg sm:text-xl text-center mb-2 text-gray-700 font-semibold">
                  Enquire Now for
                </p>
                <p className="text-lg sm:text-xl text-center mb-4 text-blue-500 font-semibold">
                  {enquiryFormTitle}
                </p>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full border-b border-gray-200 px-2 sm:px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full border-b border-gray-200 px-2 sm:px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phone: value }))
                  }
                  containerClass="!w-full"
                  inputClass="!w-full !border-0 !border-b !border-gray-200 !rounded-none !py-2 !pl-16 !pr-3 !focus:outline-none !focus:border-blue-500"
                  buttonClass="!border-0 !bg-transparent !left-3 !top-1/2 !-translate-y-1/2 !scale-125"
                  dropdownClass="!border-0"
                  placeholder="Phone Number *"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City *"
                  required
                  className="w-full border-b border-gray-200 px-2 sm:px-3 py-2 focus:outline-none focus:border-blue-500"
                />

                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="py-2 px-6 sm:px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Get Free Consultation
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-center mt-2">
                  By registering you have read and agree to the{" "}
                  <a
                    href="/pages/terms-of-use"
                    className="text-blue-500 no-underline"
                  >
                    Terms of use
                  </a>{" "}
                  &{" "}
                  <a
                    href="/pages/privacy-policy"
                    className="text-blue-500 no-underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="py-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faq?.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-md">
                <button
                  className="w-full text-left px-4 sm:px-6 py-3 hover:bg-blue-50 font-medium flex justify-between items-center text-sm sm:text-base"
                  onClick={() => toggleFaq(index)}
                >
                  {item.title}
                  <span>
                    {activeFaq === index ? cheveronDown : cheveronRight}
                  </span>
                </button>
                {activeFaq === index && (
                  <div
                    className="px-4 sm:px-6 py-3 bg-white text-gray-700 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <IndustryLatestNews />
      </div>
    </>
  );
};

export default IndustryPage;
