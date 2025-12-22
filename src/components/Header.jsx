import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNavData } from "../toolkit/slices/MenuBarSlice";
import { useNavigate } from "react-router-dom";

const loadingData = [
  "Who We are",
  "Enviorment & Sustainability",
  "Project Planning & Setup",
  "Compliance & Solutions",
  "Industries Solution",
  "All Copseed",
];
// const navigate = useNavigate();

const Header = () => {
  const [navData, setNavData] = useState([]);
  const [navLoading, setNavLoading] = useState(true);

  const [searchData, setSearchData] = useState({});
  const [searchLoading, setSearchLoading] = useState(true);

  const [activeTop, setActiveTop] = useState(null);
  const [activeLeftKey, setActiveLeftKey] = useState(null);
  const [activeMiddleKey, setActiveMiddleKey] = useState(null);
  const [activeRightIndex, setActiveRightIndex] = useState(null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileTop, setActiveMobileTop] = useState(null);
  const [activeMobileLeft, setActiveMobileLeft] = useState(null);

  const [showSearchDrawer, setShowSearchDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const searchDrawerRef = useRef(null);

  // const dispatch = useDispatch();
  // const{data, loading, error} = useSelector((state) => state.menu)
  //   useEffect(()=>{
  //   dispatch(getNavData())
  // },[dispatch])

  // --------- FETCH NAV DATA ----------
  useEffect(() => {
    const fetchNav = async () => {
      try {
        const res = await fetch("/corpseed-menu");
        const json = await res.json();
        setNavData(Array.isArray(json) ? json : []);
      } catch (e) {
        setNavData([]);
      } finally {
        setNavLoading(false);
      }
    };
    fetchNav();
  }, []);

  // --------- FETCH SEARCH DATA ----------
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const res = await fetch("/corpseed-search");
        const json = await res.json();
        setSearchData(json || {});
      } catch (e) {
        setSearchData({});
      } finally {
        setSearchLoading(false);
      }
    };
    fetchSearch();
  }, []);

  // scroll detector for header border/shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // safe fallbacks
  const safeNavData = Array.isArray(navData) ? navData : [];
  const safeSearchData =
    searchData && typeof searchData === "object" ? searchData : {};

  const resetSubState = () => {
    setActiveLeftKey(null);
    setActiveMiddleKey(null);
    setActiveRightIndex(null);
  };

  const handleTopEnter = (index) => {
    setShowSearchDrawer(false);
    setActiveTop(index);
    resetSubState();
  };

  const handleTopLeave = () => {
    setActiveTop(null);
    resetSubState();
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
    if (!categoryMap || !leftKey) return { items: [], isBlogParent: false };
    const leftVal = categoryMap[leftKey];
    if (!leftVal) return { items: [], isBlogParent: false };

    if (Array.isArray(leftVal)) {
      return { items: leftVal, isBlogParent: false };
    }

    if (!middleKey) return { items: [], isBlogParent: false };

    const middleVal = leftVal[middleKey];
    if (!middleVal || !middleVal.length)
      return { items: [], isBlogParent: false };

    if (Array.isArray(middleVal) && middleVal[0]?.blogName) {
      return { items: middleVal, isBlogParent: true };
    }

    return { items: middleVal, isBlogParent: false };
  };

  const renderTwoLineTitle = (text) => {
    if (!text) return null;
    const parts = text.trim().split(" ");
    if (parts.length === 1) {
      return (
        <span className="flex flex-col leading-tight text-center">
          <span className="capitalize font-bold">{parts[0]}</span>
        </span>
      );
    }
    const first = parts[0];
    const rest = parts.slice(1).join(" ");
    return (
      <span className="flex flex-col leading-tight text-center">
        <span className="capitalize font-bold">{first}</span>
        <span className="capitalize font-bold tracking-wide">{rest}</span>
      </span>
    );
  };

  const mainMenus = navLoading
    ? loadingData.slice(0, loadingData.length - 1).map((label) => ({
        serviceMenu: label,
        categoryMap: {},
      }))
    : safeNavData.slice(0, Math.max(safeNavData.length - 1, 0));

  const lastMenu = navLoading
    ? { serviceMenu: loadingData[loadingData.length - 1], categoryMap: {} }
    : safeNavData.length > 0
    ? safeNavData[safeNavData.length - 1]
    : null;

  const listHeightStyle = { height: "402px" };
  const searchSections = Object.entries(safeSearchData);

  // close search drawer on outside click
  useEffect(() => {
    if (!showSearchDrawer) return;

    const handleClick = (e) => {
      if (
        searchDrawerRef.current &&
        !searchDrawerRef.current.contains(e.target)
      ) {
        setShowSearchDrawer(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showSearchDrawer]);

  const openSearchDrawer = () => {
    setActiveTop(null);
    resetSubState();
    setShowSearchDrawer(true);
  };

  return (
    <header
      className={`sticky top-0 w-full bg-white  z-50 ${
        scrolled
          ? "border-b border-gray-200 shadow-md"
          : "border-b border-transparent shadow-none"
      }`}
    >
      {/* TOP BAR */}
      <div className="w-full flex gap-13 items-center justify-between px-4 md:px-10 py-3">
        {/* logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://www.corpseed.com/assets/img/brands/CORPSEED.webp"
            alt="Corpseed logo"
            className="object-contain "
          />
        </a>

        {/* desktop center nav */}
        <nav className="hidden md:flex flex-1 justify-start">
          <ul className="flex gap-5 text-sm font-bold text-[#14325c]">
            {mainMenus.map((item, index) => (
              <li
                key={item.serviceMenu}
                className="relative"
                onMouseEnter={() => handleTopEnter(index)}
              >
                <button
                  className={`flex items-center cursor-pointer justify-center px-2 py-2 border-b-2 transition-colors duration-150 ease-out ${
                    !navLoading && activeTop === index
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {renderTwoLineTitle(item.serviceMenu)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* desktop right */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#14325c]">
          <button
            onClick={openSearchDrawer}
            className="flex items-center gap-2 px-3 cursor-pointer  py-2 transition-colors duration-150 ease-out "
          >
            <span className="flex items-center justify-center rounded-full">
              <svg width="28" height="28" viewBox="0 0 15 15" fill="none">
                <path
                  d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
                  stroke="#555"
                />
              </svg>
            </span>
            <span className="font-bold">Search</span>
          </button>

          {lastMenu && (
            <button
              onMouseEnter={() => handleTopEnter(safeNavData.length - 1)}
              className={`flex items-center cursor-pointer justify-center px-2 py-2 border-b-2 transition-colors duration-150 ease-out ${
                activeTop === safeNavData.length - 1
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {renderTwoLineTitle(lastMenu.serviceMenu)}
            </button>
          )}
        </div>

        {/* mobile actions */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className="flex items-center gap-1 text-sm font-bold text-[#14325c]"
            onClick={openSearchDrawer}
          >
            <span className="w-6 h-6 rounded-full   flex items-center justify-center">
              <svg viewBox="0 0 15 15" fill="none">
                <path
                  d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
                  stroke="#555"
                />
              </svg>
            </span>
          </button>
          <button
            className="flex flex-col justify-between w-6 h-4"
            onClick={() => {
              setIsMobileOpen((p) => !p);
              setActiveMobileTop(null);
              setActiveMobileLeft(null);
            }}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[2px] bg-[#14325c] transition-transform duration-150 ease-out ${
                isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`h-[2px] bg-[#14325c] transition-opacity duration-150 ease-out ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] bg-[#14325c] transition-transform duration-150 ease-out ${
                isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      <div
        className={`
    hidden md:block
    absolute left-0 top-full
    w-full bg-white
    z-50
    transform transition-all duration-200 ease-out
    border-b border-b-gray-200 shadow-xl 
    ${
      activeTop !== null
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-2 opacity-0 pointer-events-none"
    }
  `}
        onMouseLeave={handleTopLeave}
      >
        <div className="mx-auto w-full h-[450px] bg-white overflow-hidden">
          {activeTop !== null && (
            <>
              {(() => {
                if (navLoading) {
                  return (
                    <div className="flex w-full h-full items-center justify-center text-lg text-slate-500">
                      Loading menu…
                    </div>
                  );
                }
                const activeItem = safeNavData[activeTop];
                if (!activeItem) {
                  return null;
                }

                const { categoryMap, serviceMenu } = activeItem;
                const leftKeys = getLeftKeys(categoryMap);
                const isWhoWeAre = serviceMenu === "Who We Are";

                if (isWhoWeAre) {
                  const leftKey = activeLeftKey;
                  const corpseedItems =
                    leftKey && Array.isArray(categoryMap[leftKey])
                      ? categoryMap[leftKey]
                      : [];

                  return (
                    <div className="flex w-full h-full ">
                      <div className="w-1/3 h-full border-r py-3 border-slate-200">
                        <div
                          className="overflow-y-auto scrollbar-blue pt-2 px-4"
                          style={listHeightStyle}
                        >
                          {leftKeys.map((key) => {
                            const isActive = key === leftKey;
                            return (
                              <button
                                key={key}
                                onMouseEnter={() => {
                                  setActiveLeftKey(key);
                                  setActiveMiddleKey(null);
                                  setActiveRightIndex(null);
                                }}
                                className={`group flex py-2 w-full  hover:text-[#1d4ed8] items-center justify-between rounded-md px-4 mb-1 text-sm font-semibold text-left transition-all duration-150 ease-out  mx-auto ${
                                  isActive
                                    ? "bg-[#f5f7ff] text-[#14325c] shadow-sm"
                                    : "bg-transparent text-[#14325c] hover:bg-[#f5f7ff]"
                                }`}
                              >
                                <span className="transition-all duration-150 ease-out group-hover:scale-[1.03]">
                                  {key}
                                </span>
                                <span
                                  className={`transition-all duration-150 ease-out text-blue-600 ${
                                    isActive
                                      ? "opacity-100 translate-x-1"
                                      : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1"
                                  }`}
                                >
                                  ➜
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="w-2/3 py-3 h-full bg-white">
                        <div className="flex items-center gap-3 px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                          <span className="text-xs">{"<"}</span>
                          <span className="font-semibold text-[#14325c]">
                            {leftKey || ""}
                          </span>
                        </div>
                        <div
                          className="overflow-y-auto scrollbar-blue px-6 pt-2 pb-4 gap-2"
                          style={listHeightStyle}
                        >
                          {leftKey &&
                            corpseedItems.map((s) => (
                              <a
                                key={s.slug || s.url}
                                href={s.url}
                                className="block py-2 text-sm text-[#14325c] hover:text-blue-600 hover:underline transition-colors duration-150 ease-out"
                              >
                                {s.name}
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // 3–4 LEVEL MENUS
                const leftKey = activeLeftKey;
                const middleKeys =
                  leftKey && !Array.isArray(categoryMap[leftKey])
                    ? getMiddleKeys(categoryMap, leftKey)
                    : [];
                const middleKey = activeMiddleKey;
                const { items: rawRightItems, isBlogParent } = getRightItems(
                  categoryMap,
                  leftKey,
                  middleKey
                );
                const isFourColumns =
                  isBlogParent && middleKey && activeRightIndex !== null;

                return (
                  <div
                    className="w-full h-full grid transition-all duration-400 ease-out"
                    style={{
                      gridTemplateColumns: isFourColumns
                        ? "1fr 1fr 1fr 1fr"
                        : "1fr 1fr 1fr",
                      minWidth: isFourColumns ? "100%" : "75%",
                    }}
                  >
                    {/* COLUMN 1 WITH INLINE ALL SERVICES */}
                    <div className="h-full border-r py-3 border-slate-200 bg-white transition-all duration-400 ease-out">
                      <div className="flex items-center justify-between px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          {/* <span className="text-lg">🏠</span> */}
                          <span className="font-semibold text-lg text-[#14325c]">
                            Menu
                          </span>
                        </div>
                        <a
                          href="/all-services"
                          className="font-semibold text-blue-600 hover:text-blue-700 hover:underline px-2 py-2 rounded transition-all duration-150 ease-out hover:bg-blue-50"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = "/category/all";
                          }}
                        >
                          All Services ➜
                        </a>
                      </div>

                      <div
                        className="overflow-y-auto scrollbar-blue pt-2 px-4"
                        style={listHeightStyle}
                      >
                        {leftKeys.map((key) => {
                          const isActive = key === leftKey;
                          return (
                            <button
                              key={key}
                              onMouseEnter={() => {
                                setActiveLeftKey(key);
                                setActiveMiddleKey(null);
                                setActiveRightIndex(null);
                              }}
                              className={`group flex py-2 w-full hover:text-[#1d4ed8] items-center justify-between rounded-md px-4 mb-1 text-sm font-semibold text-left transition-all duration-150 ease-out mx-auto ${
                                isActive
                                  ? "bg-[#f5f7ff] text-[#14325c] shadow-sm"
                                  : "bg-transparent text-[#14325c] hover:bg-[#f5f7ff]"
                              }`}
                            >
                              <span className="transition-all duration-150 ease-out  group-hover:scale-[1.03]">
                                {key}
                              </span>
                              <span
                                className={`transition-all duration-150 ease-out text-blue-600 ${
                                  isActive
                                    ? "opacity-100 translate-x-1"
                                    : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1"
                                }`}
                              >
                                ➜
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="h-full py-3 border-r border-slate-200 bg-white transition-all duration-400 ease-out">
                      <div className="flex items-center gap-3 px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                        <div className="flex items-center gap-3 px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                          <span className="text-xs">{"<"}</span>
                          <span className="font-semibold text-[#14325c] hover:underline">
                            {leftKey || ""}
                          </span>
                        </div>
                      </div>
                      <div
                        className="px-6 pt-2 pb-4 overflow-y-auto scrollbar-blue"
                        style={listHeightStyle}
                      >
                        {leftKey &&
                          middleKeys.map((mKey) => {
                            const isActive = mKey === middleKey;
                            return (
                              <button
                                key={mKey}
                                onMouseEnter={() => {
                                  setActiveMiddleKey(mKey);
                                  setActiveRightIndex(null);
                                }}
                                className={`group flex py-2 w-full  hover:text-[#1d4ed8] items-center justify-between rounded-md px-3 my-1 text-sm text-left transition-all duration-150 ease-out ${
                                  isActive
                                    ? "bg-[#f5f7ff] text-[#14325c] font-semibold shadow-sm"
                                    : "text-[#14325c] hover:bg-[#f5f7ff]"
                                }`}
                              >
                                <span className="transition-all duration-150 ease-out group-hover:scale-[1.03]">
                                  {mKey}
                                </span>
                                <span
                                  className={`transition-all duration-150 ease-out text-blue-600 ${
                                    isActive
                                      ? "opacity-100 translate-x-1"
                                      : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1"
                                  }`}
                                >
                                  ➜
                                </span>
                              </button>
                            );
                          })}
                      </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="h-full border-r py-3  border-slate-200 bg-white transition-all duration-400 ease-out">
                      <div className="flex items-center gap-3 px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                        <span className="text-xs">{"<"}</span>
                        <span className="font-semibold text-[#14325c]">
                          {middleKey || ""}
                        </span>
                      </div>
                      <div
                        className="px-6 pt-2 pb-4 overflow-y-auto scrollbar-blue"
                        style={listHeightStyle}
                      >
                        {middleKey &&
                          (isBlogParent
                            ? rawRightItems.map((item, idx) => {
                                const isActive = idx === activeRightIndex;
                                return (
                                  <button
                                    key={item.slug || item.name}
                                    onMouseEnter={() =>
                                      setActiveRightIndex(idx)
                                    }
                                    className={`group flex py-2  hover:text-[#1d4ed8] w-full items-center justify-between rounded-md px-3 my-1 text-sm text-left transition-all duration-150 ease-out ${
                                      isActive
                                        ? "bg-[#f5f7ff] text-[#14325c] font-semibold shadow-sm"
                                        : "text-[#14325c] hover:bg-[#f5f7ff]"
                                    }`}
                                  >
                                    <span className="transition-all duration-150 ease-out group-hover:scale-[1.03]">
                                      {item.name}
                                    </span>
                                    <span
                                      className={`transition-all duration-150 ease-out text-blue-600 ${
                                        isActive
                                          ? "opacity-100 translate-x-1"
                                          : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1"
                                      }`}
                                    >
                                      ➜
                                    </span>
                                  </button>
                                );
                              })
                            : rawRightItems.map((s) => (
                                <a
                                  key={s.slug || s.url}
                                  href={s.url}
                                  className="block py-2 text-sm text-[#14325c] hover:text-blue-600 hover:underline transition-colors duration-150 ease-out"
                                >
                                  {s.name}
                                </a>
                              )))}
                      </div>
                    </div>

                    {/* COLUMN 4 */}
                    <div
                      className={`
                        h-full bg-white transition-all duration-400 ease-out py-3
                        ${
                          isFourColumns
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105 pointer-events-none"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3 px-6 h-14 text-xs text-slate-500 border-b border-slate-100">
                        <span className="text-xs">{"<"}</span>
                        <span className="font-semibold text-[#14325c]">
                          {rawRightItems[activeRightIndex]?.name || ""}
                        </span>
                      </div>
                      <div
                        className="px-6 pt-2 pb-4 overflow-y-auto scrollbar-blue"
                        style={listHeightStyle}
                      >
                        {rawRightItems[activeRightIndex]?.blogName?.map((b) => (
                          <a
                            key={b.url}
                            href={b.url}
                            className="block py-2 text-sm text-[#14325c] hover:text-blue-600 hover:underline transition-colors duration-150 ease-out"
                          >
                            {b.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>

      {/* SEARCH DRAWER – OFFSET BELOW HEADER, MATCH NAV DRAWER HEIGHT */}
      <div
        className={`
    fixed inset-x-0 z-40 transform transition-all duration-200 ease-out
    md:top-[72px] top-[56px] border-b border-b-gray-200 shadow-xl
    ${
      showSearchDrawer
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-2 opacity-0 pointer-events-none"
    }
  `}
      >
        <div
          ref={searchDrawerRef}
          className="w-full h-[450px] bg-white overflow-hidden"
        >
          {/* header row */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search for Services, Industries, Insights and compliance update."
              className="w-full text-sm px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-150 ease-out"
            />
            <button
              onClick={() => setShowSearchDrawer(false)}
              className="ml-4 text-slate-500 hover:text-slate-700 text-lg transition-colors duration-150 ease-out"
            >
              ✕
            </button>
          </div>

          {/* body – 450px minus header height (~56px) */}
          <div className="px-8 py-4 h-[394px] overflow-y-auto scrollbar-blue border-b border-b-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {searchLoading ? (
                <div className="col-span-3 flex items-center justify-center text-sm text-slate-500">
                  Searching…
                </div>
              ) : searchSections.length === 0 ? (
                <div className="col-span-3 flex items-center justify-center text-sm text-slate-500">
                  No data found.
                </div>
              ) : (
                searchSections.map(([sectionTitle, items]) => (
                  <div key={sectionTitle}>
                    <h3 className="mb-3 text-base font-bold text-[#14325c]">
                      {sectionTitle}
                    </h3>
                    <ul className="space-y-1 text-sm">
                      {items.map((item) => (
                        <li key={item.url}>
                          <a
                            href={item.url}
                            className="block py-1 text-[#14325c] hover:text-blue-600 hover:underline transition-colors duration-150 ease-out"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      {isMobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {safeNavData.map((item, topIndex) => {
              const { categoryMap, serviceMenu } = item;
              const leftKeys = getLeftKeys(categoryMap);
              const isTopOpen = activeMobileTop === topIndex;

              return (
                <div
                  key={serviceMenu}
                  className="border-b border-slate-100 pb-1"
                >
                  {/* TOP LEVEL (serviceMenu) */}
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-[#14325c]"
                    onClick={() => {
                      const next = isTopOpen ? null : topIndex;
                      setActiveMobileTop(next);
                      setActiveMobileLeft(null);
                    }}
                  >
                    <span>{serviceMenu}</span>
                    <span className="w-4 h-4 text-slate-600">
                      {isTopOpen ? (
                        // Chevron up
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          className="w-3 h-3"
                        >
                          <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" />
                        </svg>
                      ) : (
                        // Chevron down
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-3 h-3"
                        >
                          <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* LEVEL 2: leftKeys (only when top open) */}
                  {isTopOpen && (
                    <div className="pl-2 flex flex-col gap-1 text-sm text-[#14325c]">
                      {leftKeys.map((leftKey) => {
                        const leftVal = categoryMap[leftKey];
                        const leftId = `${topIndex}-${leftKey}`;
                        const isLeftOpen = activeMobileLeft === leftId;

                        // Case 1: 2‑level (array at leftVal)
                        if (Array.isArray(leftVal)) {
                          return (
                            <div key={leftKey} className="mt-1">
                              <button
                                className="w-full flex items-center justify-between py-2 font-medium"
                                onClick={() =>
                                  setActiveMobileLeft(
                                    isLeftOpen ? null : leftId
                                  )
                                }
                              >
                                <span>{leftKey}</span>
                                <span className="w-3 h-3 text-slate-600">
                                  {isLeftOpen ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 640"
                                      className="w-3 h-3"
                                    >
                                      <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      className="w-3 h-3"
                                    >
                                      <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                    </svg>
                                  )}
                                </span>
                              </button>

                              {isLeftOpen && (
                                <div className="pl-4 flex flex-col gap-1 text-xs">
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

                        // Case 2: 3‑/4‑level (object at leftVal)
                        const middleKeys = Object.keys(leftVal || {});
                        return (
                          <div key={leftKey} className="mt-1">
                            <p className="py-2 font-semibold">{leftKey}</p>
                            <div className="pl-3 flex flex-col gap-1 text-xs">
                              {middleKeys.map((mKey) => {
                                const arr = leftVal[mKey] || [];
                                return (
                                  <div key={mKey} className="mb-1">
                                    <p className="font-semibold mb-1">{mKey}</p>
                                    <div className="pl-3 flex flex-col gap-1">
                                      {arr.map((s) =>
                                        s.blogName ? (
                                          <div key={s.slug || s.name}>
                                            <p className="font-semibold">
                                              {s.name}
                                            </p>
                                            <div className="pl-3 flex flex-col gap-1">
                                              {s.blogName.map((b) => (
                                                <a
                                                  key={b.url}
                                                  href={b.url}
                                                  className="py-1"
                                                >
                                                  {b.name}
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        ) : (
                                          <a
                                            key={s.slug || s.url}
                                            href={s.url}
                                            className="py-1"
                                          >
                                            {s.name}
                                          </a>
                                        )
                                      )}
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
