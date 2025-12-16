import React, { useEffect, useState } from "react";

const HeaderExample = () => {
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
    }, 200);
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
        className={`w-full bg-white sticky top-0 z-50 border-b transition-all duration-300 ${
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
      className={`w-full fixed  block top-0 left-0  p-2 z-50 bg-white transition-all duration-300
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 256 256"
            >
              <g fill="#1a1a1a">
                <g transform="scale(5.12,5.12)">
                  <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
                </g>
              </g>
            </svg>
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
    md:block w-full   border-b-gray-300 border-gray-200 bg-white
    overflow-hidden transition-all duration-300 ease-in-out
    ${activeTop !== null ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
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
                      <div className="flex flex-col px-6 pt-2 gap-2 overflow-y-auto h-[300px]">
                        {corpseedItems.map((s) => (
                          <a
                            key={s.slug || s.url}
                            href={s.url}
                            className="text-[#14325c] hover:underline hover:text-blue-500"
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
                    <div className="flex items-center gap-3 px-6 py-2 text-gray-500">
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
                      <div className="px-6 py-2 overflow-y-auto h-[300px]">
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
                        <div className="flex items-center gap-3 px-6 h-14 text-xs text-gray-500  border-gray-200">
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
