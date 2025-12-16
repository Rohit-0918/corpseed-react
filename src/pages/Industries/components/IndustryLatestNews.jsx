import React from 'react'

const IndustryLatestNews = () => {
      const IndustriesNews = [
    {
      id: 1,
      title: "Knowledge-Center",
      subTitle: "How to Cancel GST Registration",
      content:
        "Cancellation of GST registration means officially closing your GSTIN on the GST portal so that you are no longer considered a registere...",
    },
    {
      id: 2,
      title: "News",
      subTitle: "MCA Revises Small Company Criteria with Rs 10...",
      content:
        "The MCA has revised small company criteria, raising paid-up capital to INR 10 crore and turnover to INR 100 crore, easing compliance fo...",
    },
    {
      id: 3,
      title: "Law Update",
      subTitle: "New CDSCO Risk Classification Module for Medi...",
      content:
        "The Government of India has introduced a new Risk Classification Module on the CDSCO Online System for ...",
    },
  ];
  return (
    <div>
      <div className="mt-5">
          <h1 className="text-2xl font-bold mb-5">Industries Latest News</h1>

          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto">
            {IndustriesNews.map((industry) => (
              <div
                key={industry.id}
                className="min-w-[300px] md:min-w-[0] flex-1 border border-gray-300 rounded-xl p-5 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {industry.title}
                  </h3>
                  <h4 className="text-md font-medium text-gray-700 mb-2">
                    {industry.subTitle}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.content}
                  </p>
                </div>
                <div>
                  <button className="text-blue-600 font-medium mt-2 hover:underline">
                    Know More &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default IndustryLatestNews
