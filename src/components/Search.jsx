import React, { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const data = {
    "Popular Services": [
      { name: "E-Waste Dismantling", url: "/service/e-waste-management-authorization" },
      { name: "Pest Control License", url: "/service/pest-control-license" },
      { name: "Gun License", url: "/service/gun-license" },
      { name: "PESO Certificate", url: "/service/peso-certificate" },
    ],
    "Popular Industry": [
      { name: "Recycling & Waste Management", url: "/industries/recycling-and-waste-management" },
    ],
    "Popular Blogs": [
      { name: "Download Appointment Letter Format in Word and PDF", url: "/knowledge-centre/appointment-letter-format" },
      { name: "Lifting of Corporate Veil under the Companies Act 2013", url: "/knowledge-centre/lifting-of-corporate-veil-under-the-companies-act-2013" },
      { name: "Download Rental Agreement Format", url: "/knowledge-centre/rental-agreement-format-download-pdf-word" },
      { name: "Roles and Functions of Ngo in India", url: "/knowledge-centre/roles-and-functions-of-ngo-in-india" },
      { name: "Registration of a pet dog in Uttar Pradesh", url: "/knowledge-centre/registration-of-a-pet-dog-in-uttar-pradesh" },
    ],
  };

  const searchData = {
    "Services": [
      { url: "https://www.corpseed.com/service/smart-india-hackathon-sih", name: "Smart India Hackathon (SIH)" },
      { url: "https://www.corpseed.com/service/haryana-state-pollution-control-board", name: "Haryana Pollution Board CTE/CTO" },
      { url: "https://www.corpseed.com/service/hallmark-registration", name: "Hallmark Registration" },
      { url: "https://www.corpseed.com/service/himachal-pradesh-state-pollution-control-board", name: "Himachal Pradesh Pollution Board CTE/CTO" },
      { url: "https://www.corpseed.com/service/health-trade-license", name: "Health Trade License" }
    ],
    "Product Based Services": [
      { url: "https://www.corpseed.com/product/epr-authorization-for-hair-dryer", name: "EPR Authorization for Hair Dryer" },
      { url: "https://www.corpseed.com/product/epr-authorization-for-other-large-appliances-for-heating", name: "EPR Authorization for Other Large Appliances for Heating" },
      { url: "https://www.corpseed.com/product/epr-registration-for-high-intensity-discharge-lamps-pressure-sodium-lamps-and-metal-halide-lamps", name: "EPR Registration for High-Intensity Discharge Lamps, Pressure Sodium Lamps and Metal Halide Lamps" },
      { url: "https://www.corpseed.com/product/epr-authorization-for-handheld-video-game-consoles", name: "EPR Authorization for Handheld Video Game Consoles" },
      { url: "https://www.corpseed.com/product/epr-authorization-for-hi-fi-recorders", name: "EPR Authorization for Hi-Fi Recorders" }
    ],
    "Knowledge Center": [
      { url: "https://www.corpseed.com/knowledge-centre/what-is-a-hackathon", name: "What is a Hackathon? A Beginner’s Guide to Innovation Marathons" },
      { url: "https://www.corpseed.com/knowledge-centre/emission-or-discharge-of-environmental-pollutants-for-beehive-hard-coke-oven", name: "Standards for Emission or Discharge of Environmental Pollutants for Beehive Hard Coke Oven" },
      { url: "https://www.corpseed.com/knowledge-centre/bis-to-mandate-hallmarking-for-silver-jewellery", name: "BIS to Mandate Hallmarking for Silver Jewellery from September 2025" },
      { url: "https://www.corpseed.com/knowledge-centre/how-to-get-consent-noc-from-haryana-state-pollution-control-board", name: "How to get Consent/NOC from Haryana State Pollution Control Board" },
      { url: "https://www.corpseed.com/knowledge-centre/new-or-renewal-of-hazardous-waste-management-authorization-in-haryana", name: "How to apply online for new or renewal of Hazardous Waste Management Authorization in Haryana" }
    ]
  };

  const filteredResults = query
    ? Object.entries(searchData).reduce((acc, [section, items]) => {
        const matches = items.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        if (matches.length > 0) acc[section] = matches;
        return acc;
      }, {})
    : null;

  const displayData = query ? filteredResults : data;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* SEARCH ICON */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 hover:bg-gray-100 rounded-full transition"
        aria-label="Search"
      >
        <svg width="28" height="28" viewBox="0 0 15 15" fill="none">
          <path
            d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
            stroke="#555"
            strokeWidth="1.2"
          />
        </svg>
      </button>

      {/* FULL WIDTH DRAWER */}
      <div
        className={`
          absolute left-0 top-full mt-3 w-screen bg-white z-50
          shadow-[0_4px_12px_rgba(0,0,0,0.15)]
          transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
        `}
      >
        <div className="px-16 py-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for Services, Products, Knowledge Center..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none "
          />
        </div>

        <div className="h-[400px] overflow-y-auto px-16 pb-6">
          <div className="grid grid-cols-3 gap-10">
            {displayData && Object.entries(displayData).length === 0 && query ? (
              <p className="text-gray-500 col-span-3">No results found</p>
            ) : (
              Object.entries(displayData).map(([section, items]) => (
                <div key={section}>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    {section}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        className="text-[#14325c] hover:text-blue-500 hover:underline text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
