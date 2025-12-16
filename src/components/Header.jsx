import React, { useEffect, useState } from "react";
import Search from "./Search";

const HeaderExample = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
  
    const data = {
      "Popular Services": [
        { name: "E-Waste Dismantling", url: "/service/e-waste-management-authorization" },
        { name: "Pest Control License", url: "/service/pest-control-license"},
        { name: "Gun License", url: "/service/gun-license"},
        { name: "PESO Certificate", url: "/service/peso-certificate"},
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
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTop, setActiveTop] = useState(null);
  const [activeLeftKey, setActiveLeftKey] = useState(null);
  const [activeMiddleKey, setActiveMiddleKey] = useState(null);
  const [activeRightIndex, setActiveRightIndex] = useState(0);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileTop, setActiveMobileTop] = useState(null);
  const [activeMobileLeft, setActiveMobileLeft] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/menu/dynamic");
        if (!res.ok) throw new Error("Failed to load menu");
        const data = await res.json();
        setMenu(data || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resetSubState = () => {
    setActiveLeftKey(null);
    setActiveMiddleKey(null);
    setActiveRightIndex(0);
  };

  const [menuTimeout, setMenuTimeout] = useState(null);

  const handleTopEnter = (index) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setActiveTop(index);
    resetSubState();
  };

  const handleTopLeave = () => {
    const timeout = setTimeout(() => {
      setActiveTop(null);
      resetSubState();
    }, 50);
    setMenuTimeout(timeout);
  };

  const getLeftKeys = (categoryMap) => Object.keys(categoryMap || {});

  const getMiddleKeys = (categoryMap, leftKey) => {
    if (!categoryMap || !leftKey) return [];
    const leftVal = categoryMap[leftKey];
    if (!leftVal) return [];
    if (Array.isArray(leftVal)) return [];
    return Object.keys(leftVal);
  };

  const getRightItems = (categoryMap, leftKey, middleKey) => {
    if (!categoryMap || !leftKey) return { items: [], isBlog: false };
    const leftVal = categoryMap[leftKey];
    if (!leftVal) return { items: [], isBlog: false };

    if (Array.isArray(leftVal)) {
      return { items: leftVal, isBlog: false };
    }

    if (!middleKey) return { items: [], isBlog: false };

    const middleVal = leftVal[middleKey];
    if (!middleVal || !middleVal.length) return { items: [], isBlog: false };

    if (middleVal[0].blogName && Array.isArray(middleVal[0].blogName)) {
      return { items: middleVal, isBlog: true };
    }

    return { items: middleVal, isBlog: false };
  };

  const renderTwoLineTitle = (text) => {
    if (!text) return null;
    const parts = text.trim().split(" ");
    if (parts.length === 1) {
      return (
        <span className="flex flex-col leading-tight text-center">
          <span className="capitalize font-semibold">{parts[0]}</span>
        </span>
      );
    }
    const first = parts[0];
    const rest = parts.slice(1).join(" ");
    return (
      <span className="flex flex-col leading-tight text-center">
        <span className="capitalize font-bold">{first}</span>
        <span className="capitalize font-bold">{rest}</span>
      </span>
    );
  };

  if (loading) {
    return (
      <header className="w-full border-b border-gray-200 h-16 flex items-center justify-center"></header>
    );
  }

  if (error) {
    return (
      <header
        ref={headerRef}
        className={`w-full bg-white sticky top-0 z-50 border-b transition-all duration-100 ${
          scrolled ? "border-gray-200 shadow-md" : "border-transparent"
        }`}
      >
        <span className="text-sm text-red-500">{error}</span>
      </header>
    );
  }

  const mainMenus = menu.slice(0, Math.max(menu.length - 1, 0));
  const lastMenu = menu.length > 0 ? menu[menu.length - 1] : null;

  return (
    <header
      className={`w-full fixed  block top-0 left-0  p-2 z-50 bg-white transition-all duration-100
  ${
    scrolled
      ? "border-b border-gray-200 shadow-md"
      : "border-b border-transparent shadow-none"
  }
`}
    >
      <div className="w-full flex gap-10 items-center justify-between px-4 md:px-8 h-16">
        {/* logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
              src="https://www.corpseed.com/assets/img/brands/CORPSEED.webp"
              alt=""
            />
          </a>
        </div>

        {/* desktop center nav */}
        <nav className="hidden md:flex justify-start flex-1 ">
          <ul className="flex gap-10 text-sm font-bold text-[#14325c]">
            {mainMenus.map((item, index) => {
              const globalIndex = index;
              return (
                <li
                  key={item.serviceMenu}
                  className="relative font-bold"
                  onMouseEnter={() => handleTopEnter(globalIndex)}
                  onMouseLeave={handleTopLeave}
                >
                  <button
                    className={`pb-1 border-b-2 transition ${
                      activeTop === globalIndex
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent hover:border-blue-600"
                    }`}
                  >
                    {renderTwoLineTitle(item.serviceMenu)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* desktop right side */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#14325c]">
          <button className="flex items-center gap-2">
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
          </button>

          {lastMenu && (
            <button
              onMouseEnter={() => handleTopEnter(menu.length - 1)}
              onMouseLeave={handleTopLeave}
              className={`pb-1 border-b-2 transition ${
                activeTop === menu.length - 1
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-blue-600"
              }`}
            >
              {renderTwoLineTitle(lastMenu.serviceMenu)}
            </button>
          )}
        </div>

        {/* mobile actions */}
        <div className="flex md:hidden items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-semibold text-[#14325c]">
            <span className="w-5 h-5 rounded-full border-2 border-gray-500" />
          </button>
          <button
            className="flex flex-col justify-between w-6 h-4"
            onClick={() => {
              setIsMobileOpen((prev) => !prev);
              setActiveMobileTop(null);
              setActiveMobileLeft(null);
            }}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[3px] bg-[#14325c] transition-transform ${
                isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`h-[3px] bg-[#14325c] transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[3px] bg-[#14325c] transition-transform ${
                isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeTop !== null && menu[activeTop] && (
        <div
          className={`
    md:block w-full bg-white
    shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)]
    overflow-hidden
    transition-all duration-300 ease-in-out
    transform
    ${
      activeTop !== null
        ? "opacity-100 max-h-[500px] translate-y-0"
        : "opacity-0 max-h-0 -translate-y-2"
    }
  `}
          onMouseEnter={() => handleTopEnter(activeTop)}
          onMouseLeave={handleTopLeave}
        >
          <div className="w-full flex bg-white px-8 h-[360px]">
            {(() => {
              const { categoryMap, serviceMenu } = menu[activeTop] || {};
              if (!categoryMap) return null;

              const leftKeys = getLeftKeys(categoryMap);
              const leftKey = activeLeftKey || leftKeys[0];

              const middleKeys = leftKey
                ? getMiddleKeys(categoryMap, leftKey)
                : [];
              const middleKey =
                middleKeys.length > 0
                  ? activeMiddleKey || middleKeys[0]
                  : undefined;

              const { items: rawRightItems, isBlog } = getRightItems(
                categoryMap,
                leftKey,
                middleKey
              );

              const rightList =
                isBlog && rawRightItems[activeRightIndex]?.blogName
                  ? rawRightItems[activeRightIndex].blogName
                  : rawRightItems;

              const isWhoWeAre = serviceMenu === "Who We Are";

              // FIRST MENU 2-LEVEL
              if (isWhoWeAre) {
                const corpseedItems = categoryMap[leftKey] || [];
                return (
                  <div className="flex w-full">
                    <div className="w-1/3  border-gray-200 bg-white">
                      <button className="flex items-center justify-between w-full px-6 py-3 font-semibold text-left bg-[#1a73e8] text-white">
                        <span>{leftKey}</span>
                        <span>➜</span>
                      </button>
                    </div>

                    <div className="w-2/3 bg-white">
                      {/* Header */}
                      <div className="flex items-center gap-3 px-6 py-2 text-gray-500  border-gray-200">
                        <span>{"<"}</span>
                        <span className="font-semibold text-[14px] text-[#14325c]">
                          {leftKey}
                        </span>
                      </div>

                      {/* List */}
                      <div className="flex flex-col px-6 pt-2  gap-2 overflow-y-auto h-[300px]">
                        {corpseedItems.map((s) => (
                          <a
                            key={s.slug || s.url}
                            href={s.url}
                            className="text-[#14325c] hover:underline  hover:text-blue-500"
                          >
                            {s.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              // OTHER MENUS
              return (
                <>
                  {/* LEFT COLUMN */}
                  <div className="flex-1  border-gray-200 bg-white">
                    {leftKeys.map((key) => (
                      <button
                        key={key}
                        onMouseEnter={() => {
                          setActiveLeftKey(key);
                          setActiveMiddleKey(null);
                          setActiveRightIndex(0);
                        }}
                        className={`flex items-center px-6 justify-between w-full h-14  font-semibold text-left ${
                          key === leftKey
                            ? "bg-[#1a73e8] text-white"
                            : "text-[#14325c] hover:bg-gray-100"
                        }`}
                      >
                        <span>{key}</span>
                        <span>➜</span>
                      </button>
                    ))}
                  </div>
                  {/* MIDDLE COLUMN */}
                  <div className="flex-1 bg-white">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-6 py-2 text-gray-500">
                      <span>{"<"}</span>
                      <span className="font-semibold text-[13px] text-[#14325c]">
                        {leftKey}
                      </span>
                    </div>

                    {/* Content */}
                    {middleKeys.length === 0 ? (
                      <div className="px-6 py-1">
                        <p className="font-semibold text-[#14325c] mb-3">
                          {serviceMenu}
                        </p>
                      </div>
                    ) : (
                      <div className="px-6 py-1 overflow-y-auto h-[300px]">
                        {middleKeys.map((mKey) => (
                          <button
                            key={mKey}
                            onMouseEnter={() => {
                              setActiveMiddleKey(mKey);
                              setActiveRightIndex(0);
                            }}
                            className={`flex items-center justify-between w-full px-6 py-3 text-left rounded-md ${
                              mKey === middleKey
                                ? "bg-[#1a73e8] text-white font-semibold"
                                : "text-[#14325c] hover:bg-gray-50"
                            }`}
                          >
                            <span>{mKey}</span>
                            <span>➜</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* RIGHT / FAR-RIGHT */}
                  {isBlog ? (
                    <>
                      {/* Middle Right Column */}
                      <div className="flex-1 bg-white shadow-sm">
                        <div className="flex items-center gap-2 px-6 h-14 text-xs text-gray-500  border-gray-200">
                          <span>{"<"}</span>
                          <span className="font-semibold text-[13px] text-[#14325c]">
                            {middleKey || leftKey}
                          </span>
                        </div>
                        <div className="flex flex-col px-4 pt-3 gap-3 overflow-y-auto h-[300px]">
                          {rawRightItems.map((item, idx) => (
                            <button
                              key={item.slug || item.name}
                              onMouseEnter={() => setActiveRightIndex(idx)}
                              className={`flex items-center justify-between w-full text-left  px-4 py-2 ${
                                idx === activeRightIndex
                                  ? "bg-[#1a73e8] text-white font-semibold"
                                  : "text-[#14325c] hover:bg-gray-50"
                              }`}
                            >
                              <span>{item.name}</span>
                              <span>➜</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Far Right Column */}
                      <div className="flex-1 bg-white shadow-sm">
                        <div className="flex items-center gap-3 px-6 h-14 text-xs text-gray-500 border-gray-200">
                          <span>{"<"}</span>
                          <span className="font-medium text-normal text-[12px] text-[#14325c]">
                            {rawRightItems[activeRightIndex]?.name || ""}
                          </span>
                        </div>
                        <div className="flex flex-col px-4 pt-3 gap-3 overflow-y-auto h-[300px]">
                          {rightList.map((b) => (
                            <a
                              key={b.url}
                              href={b.url}
                              className="block text-[#14325c] hover:underline hover:text-blue-500 px-4 py-2 "
                            >
                              {b.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 bg-white shadow-sm">
                      <div className="flex items-center gap-3 px-6 h-14 text-xs text-gray-500  border-gray-200">
                        <span>{"<"}</span>
                        <span className="font-semibold text-[#14325c]">
                          {middleKeys.length === 0
                            ? leftKey
                            : middleKey || leftKey}
                        </span>
                      </div>
                      <div className="flex flex-col px-4 pt-3 gap-3 overflow-y-auto h-[300px]">
                        {rightList.map((s) => (
                          <a
                            key={s.slug || s.url}
                            href={s.url}
                            className="block text-[#14325c] hover:underline hover:text-blue-500 px-4 py-2 "
                          >
                            {s.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* MOBILE MENU – mirrors all levels */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {menu.map((item, topIndex) => {
              const { categoryMap, serviceMenu } = item;
              const leftKeys = getLeftKeys(categoryMap);
              const isTopOpen = activeMobileTop === topIndex;

              return (
                <div
                  key={serviceMenu}
                  className="border-b border-gray-100 pb-2"
                >
                  {/* top level: serviceMenu */}
                  <button
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#14325c]"
                    onClick={() => {
                      const next = isTopOpen ? null : topIndex;
                      setActiveMobileTop(next);
                      setActiveMobileLeft(null);
                    }}
                  >
                    <span>{serviceMenu}</span>
                    <span>{isTopOpen ? "−" : "+"}</span>
                  </button>

                  {isTopOpen && (
                    <div className="pl-3 flex flex-col gap-2 text-sm text-[#14325c]">
                      {leftKeys.map((leftKey) => {
                        const leftVal = categoryMap[leftKey];
                        const leftId = `${topIndex}-${leftKey}`;
                        const isLeftOpen = activeMobileLeft === leftId;

                        // 2‑level case: array directly under leftKey (e.g. Who We Are)
                        if (Array.isArray(leftVal)) {
                          return (
                            <div key={leftKey} className="mt-1">
                              <button
                                className="w-full flex items-center justify-between py-1 font-semibold"
                                onClick={() =>
                                  setActiveMobileLeft(
                                    isLeftOpen ? null : leftId
                                  )
                                }
                              >
                                <span>{leftKey}</span>
                                <span>{isLeftOpen ? "−" : "+"}</span>
                              </button>

                              {isLeftOpen && (
                                <div className="pl-3 flex flex-col gap-1 text-xs">
                                  {leftVal.map((s) => (
                                    <a
                                      key={s.slug || s.url}
                                      href={s.url}
                                      className="py-1"
                                    >
                                      {s.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        // 3‑ & 4‑level case: object under leftKey
                        const middleKeys = Object.keys(leftVal || {});
                        return (
                          <div key={leftKey} className="mt-1">
                            <p className="py-1 font-semibold">{leftKey}</p>
                            <div className="pl-3 flex flex-col gap-1 text-xs">
                              {middleKeys.map((mKey) => {
                                const services = leftVal[mKey] || [];
                                return (
                                  <div key={mKey} className="mb-1">
                                    <p className="font-semibold mb-1">{mKey}</p>
                                    <div className="pl-3 flex flex-col gap-1">
                                      {services.map((s) => (
                                        <a
                                          key={s.slug || s.url}
                                          href={s.url}
                                          className="py-1"
                                        >
                                          {s.name}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderExample;
