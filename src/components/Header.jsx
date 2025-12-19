import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData, getNavData } from "../toolkit/slices/MenuBarSlice";
import { initialSearchData, searchData } from "./Data.js";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);
  const searchDrawerRef = useRef(null);
  const dispatch = useDispatch();
  const loadingData = [
    "Who We are",
    "Enviorment & Sustainability",
    "Project Planning & Setup",
    "Compliance & Solutions",
    "Industries Solution",
    "All Copseed",
  ];

  const firstLineLoadingData = loadingData[0];
  const restLoadingData = loadingData.slice(1).join(" ");

  console.log(firstLineLoadingData);
  console.log(restLoadingData);

  const filteredResults = query
    ? Object.entries(searchData).reduce((acc, [section, items]) => {
        const matches = items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        if (matches.length > 0) acc[section] = matches;
        return acc;
      }, {})
    : null;

  const displayData = query ? filteredResults : initialSearchData;

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

  // const {data} = useSelector((state)=>state.menu)
  // useEffect(()=>{
  //   dispatch(getNavData())
  // },[dispatch])

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
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveTop(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchDrawerRef.current &&
        !searchDrawerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const [drawerOpen, setDrawerOpen] = useState(false);
  // LOADING / ERROR

  if (loading) {
    return (
      <>
        <header
          className={`sticky top-0 w-full block p-2 z-50 bg-white ${
            scrolled
              ? "border-b border-gray-200 shadow-md"
              : "border-b border-transparent shadow-none"
          }`}
        >
          <div className="w-full flex gap-10 items-center justify-between px-4 md:px-8 h-16">
            {/* logo */}
            <div className="flex items-center gap-2">
              <a href="/">
                <img
                  src="https://www.corpseed.com/assets/img/brands/CORPSEED.webp"
                  alt="Corpseed"
                />
              </a>
            </div>

            {/* desktop center nav */}
            <nav className="hidden md:flex justify-start flex-1">
              <ul className="flex gap-10 text-sm font-bold text-[#14325c]">
                {loadingData.slice(0, -1).map((title, index) => (
                  <li key={index} className="relative font-bold">
                    <button
                      onClick={() => setDrawerOpen(true)}
                      className="pb-1 border-b-2 border-transparent block h-8 text-sm font-bold text-[#14325c]"
                    >
                      {renderTwoLineTitle(title)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* desktop right side */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#14325c]">
              {/* SEARCH ICON */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 rounded-full cursor-pointer"
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

              {/* LAST MENU ITEM */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="pb-1 border-b-2 border-transparent block h-8 font-bold text-[#14325c]"
              >
                {renderTwoLineTitle(loadingData.at(-1))}
              </button>
            </div>

            {/* mobile actions */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-[#14325c]"
              >
                <svg width="28" height="28" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
                    stroke="#555"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Drawer */}
        {drawerOpen && (
          <div className="fixed top-16 left-0 w-full h-[450px] bg-white z-50 shadow-lg px-8 py-4 flex flex-col">
            {/* Centered Loading Text */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <h3 className="text-3xl font-semibold text-[#14325c] mb-2">
                No Data...
              </h3>
            </div>

            {/* Close button */}
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 text-[#555] text-xl font-bold"
            >
              &times;
            </button>
          </div>
        )}
      </>
    );
  }

  if (error) {
    return (
      <header
        className={`w-full bg-white sticky top-0 z-50 border-b ${
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
      className={`sticky top-0 w-full block p-2 z-50 bg-white ${
        scrolled
          ? "border-b border-gray-200 shadow-md"
          : "border-b border-transparent shadow-none"
      }`}
    >
      {/* TOP BAR */}
      <div className="w-full flex gap-10 items-center justify-between px-4 md:px-8 h-16">
        {/* logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
              src="https://www.corpseed.com/assets/img/brands/CORPSEED.webp"
              alt="Corpseed"
            />
          </a>
        </div>

        {/* desktop center nav */}
        <nav className="hidden md:flex justify-start flex-1 ">
          <ul className="flex gap-10 text-sm font-bold text-[#14325c]">
            {mainMenus.map((item, index) => {
              const globalIndex = index;
              return (
                <li key={item.serviceMenu} className="relative font-bold">
                  <button
                    onClick={() => {
                      const next =
                        activeTop === globalIndex ? null : globalIndex;
                      setActiveTop(next);
                      if (next === null) resetSubState();
                    }}
                    className={`pb-1 border-b-2  ${
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
          {/* SEARCH ICON (trigger) */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 hover:bg-gray-100 rounded-full  cursor-pointer"
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

          {/* LAST MENU ITEM ON RIGHT */}
          {lastMenu && (
            <button
              onClick={() => {
                const idx = menu.length - 1;
                const next = activeTop === idx ? null : idx;
                setActiveTop(next);
                if (next === null) resetSubState();
              }}
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
            <svg width="28" height="28" viewBox="0 0 15 15" fill="none">
              <path
                d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
                stroke="#555"
                strokeWidth="1.2"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setIsMobileOpen((prev) => !prev);
              setActiveMobileTop(null);
              setActiveMobileLeft(null);
            }}
            aria-label="Toggle navigation"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <span
              className={`
      absolute h-[3px] w-6 bg-[#14325c] rounded
      transition-all duration-300 ease-in-out
      ${isMobileOpen ? "rotate-45" : "-translate-y-2"}
    `}
            />

            <span
              className={`
      absolute h-[3px] w-6 bg-[#14325c] rounded
      transition-all duration-300 ease-in-out
      ${isMobileOpen ? "opacity-0" : ""}
    `}
            />

            <span
              className={`
      absolute h-[3px] w-6 bg-[#14325c] rounded
      transition-all duration-300 ease-in-out
      ${isMobileOpen ? "-rotate-45" : "translate-y-2"}
    `}
            />
          </button>
        </div>
      </div>

      {/* SEARCH DRAWER – full width, under navbar, animated*/}
      <div
        className={`
          absolute left-0 top-full  w-screen bg-white z-40
          shadow-[0_4px_12px_rgba(0,0,0,0.15)]
          transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"}
        `}
      >
        <div className="px-16 py-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for Services, Products, Knowledge Center..."
            className="w-full px-4 py-2 border border-gray-300  focus:outline-none "
          />
        </div>

        <div className="h-[450px] overflow-y-auto px-16 pb-6">
          <div className="grid grid-cols-3 gap-10">
            {displayData &&
            Object.entries(displayData).length === 0 &&
            query ? (
              <p className="text-gray-500 col-span-3">No results found</p>
            ) : (
              displayData &&
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

      {/* DESKTOP MEGA MENU – always mounted, same animation as search           */}
      <div
        ref={dropdownRef}
        className={`
    absolute left-0 top-full w-full flex justify-center pb-3 bg-white z-30
    shadow-[0_4px_12px_rgba(0,0,0,0.15)]
    overflow-hidden
    transition-all duration-500 ease-in-out
    ${
      activeTop !== null
        ? "opacity-100 max-h-[450px] h-fit translate-y-0 pointer-events-auto"
        : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
    }
  `}
      >
        {activeTop !== null && menu[activeTop] && (
          <div className="w-full flex bg-white px-8 h-auto">
            {(() => {
              const { categoryMap, serviceMenu } = menu[activeTop] || {};
              if (!categoryMap) return null;

              const leftKeys = getLeftKeys(categoryMap);
              const leftKey = activeLeftKey || leftKeys[0];

              const middleKeys = leftKey
                ? getMiddleKeys(categoryMap, leftKey)
                : [];
              const middleKey =
                middleKeys.length > 0 ? activeMiddleKey || middleKeys[0] : null;

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
                    <div className="w-1/3 border-gray-200 py-2 bg-white">
                      <button className="flex items-center justify-between w-full px-6 py-2   font-semibold text-left bg-[#1a73e8] text-white">
                        <span>{leftKey}</span>
                        <span>➜</span>
                      </button>
                    </div>

                    <div className="w-2/3 bg-white">
                      <div className="flex items-center gap-3 px-6 py-2 text-gray-500 border-gray-200">
                        <span>{"<"}</span>
                        <span className="font-semibold text-[14px] text-[#14325c]">
                          {leftKey}
                        </span>
                      </div>

                      <div className="flex flex-col px-6 pt-2 gap-2 overflow-y-auto h-[440px]">
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
                  <div className="flex-1 border-gray-200 bg-white">
                    {leftKeys.map((key) => (
                      <button
                        key={key}
                        onMouseEnter={() => {
                          setActiveLeftKey(key);
                          setActiveMiddleKey(null);
                          setActiveRightIndex(0);
                        }}
                        className={`flex items-center px-6 justify-between w-full py-2 font-semibold text-left ${
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
                    <div className="flex items-center gap-2 px-6 py-2 text-gray-500">
                      <span>{"<"}</span>
                      <span className="font-semibold text-[13px] text-[#14325c]">
                        {leftKey}
                      </span>
                    </div>

                    {middleKeys.length === 0 ? (
                      <div className="px-6 py-2">
                        <p className="font-semibold text-[#14325c] mb-3">
                          {serviceMenu}
                        </p>
                      </div>
                    ) : (
                      <div className="px-6 py-1 overflow-y-auto h-[440px]">
                        {middleKeys.map((mKey) => (
                          <button
                            key={mKey}
                            onMouseEnter={() => {
                              setActiveMiddleKey(mKey);
                              setActiveRightIndex(0);
                            }}
                            className={`flex items-center justify-between w-full px-6 py-2 text-left ${
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
                      <div className="flex-1 bg-white shadow-sm">
                        <div className="flex items-center gap-2 px-6 py-2 text-xs text-gray-500 border-gray-200">
                          <span>{"<"}</span>
                          <span className="font-semibold text-[13px] text-[#14325c]">
                            {middleKey || leftKey}
                          </span>
                        </div>
                        <div className="flex flex-col px-4 p-3 gap-3 overflow-y-auto h-[440px]">
                          {rawRightItems.map((item, idx) => (
                            <button
                              key={item.slug || item.name}
                              onMouseEnter={() => setActiveRightIndex(idx)}
                              className={`flex items-center justify-between w-full text-left px-4 py-2 ${
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

                      <div className="flex-1 bg-white shadow-sm">
                        <div className="flex items-center gap-3 px-6 py-2 text-xs text-gray-500 border-gray-200">
                          <span>{"<"}</span>
                          <span className="font-medium text-normal text-[12px] text-[#14325c]">
                            {rawRightItems[activeRightIndex]?.name || ""}
                          </span>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1 overflow-y-auto ">
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
                      <div className="flex items-center gap-3 px-6 py-2 text-xs text-gray-500 border-gray-200">
                        <span>{"<"}</span>
                        <span className="font-semibold text-[#14325c]">
                          {middleKeys.length === 0
                            ? leftKey
                            : middleKey || leftKey}
                        </span>
                      </div>
                      <div className="flex flex-col px-4 py-3 gap-1 overflow-y-auto h-[400px]">
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
        )}
      </div>

      {/* MOBILE MENU*/}

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
                                    <div className="pl-3 flex overflow-y-auto flex-col gap-1">
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

export default Header;
