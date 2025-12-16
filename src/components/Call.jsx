import React from "react";

const Call = () => {
  return (
    <div className="bg-[#f2f3ff] p-5 h-fit w-fit flex flex-col gap-5">
      <p className="flex gap-5">
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2H2V0H0V2ZM2 6H0V4H2V6ZM2 10H0V8H2V10ZM16 14H18V12H16V14ZM16 16H18V18H16V16ZM0 14H2V12H0V14ZM6 2H4V0H6V2ZM10 18H8V16H10V18ZM6 18H4V16H6V18ZM0 18H2V16H0V18ZM13 0C15.76 0 18 2.24 18 5V10H16V5C16 3.35 14.65 2 13 2H8V0H13Z"
              fill="black"
              fillOpacity="0.54"
            ></path>
          </svg>{" "}
        </span>
        <span>Why Wait.&nbsp;&nbsp;Start Now!</span>
      </p>

      <p className="flex gap-3">
        <span>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34417 10.3404C7.72417 13.0525 9.9475 15.2662 12.6596 16.6558L14.7679 14.5475C15.0267 14.2887 15.41 14.2025 15.7454 14.3175C16.8188 14.6721 17.9783 14.8637 19.1667 14.8637C19.6938 14.8637 20.125 15.295 20.125 15.8221V19.1667C20.125 19.6938 19.6938 20.125 19.1667 20.125C10.1679 20.125 2.875 12.8321 2.875 3.83333C2.875 3.30625 3.30625 2.875 3.83333 2.875H7.1875C7.71458 2.875 8.14583 3.30625 8.14583 3.83333C8.14583 5.03125 8.3375 6.18125 8.69208 7.25458C8.7975 7.59 8.72083 7.96375 8.4525 8.23208L6.34417 10.3404Z"
              fill="black"
            ></path>
          </svg>
        </span>
        <span className="text-[#2b63f9] cursor-pointer ">
            Call 7558640644 {"-"} Harshita
        </span>
      </p> 
      <p className="text-[#868e96] px-8">We are available 24/7</p>
    </div>
  );
};

export default Call;
