import React from "react";
import Header from "../../components/Header";
import ProductComplianceImg from "./../../assets/Card/ProductCompliance.png";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto flex flex-row py-10 gap-5">
        {/* LEFT SECTION*/}
        <div className="w-[50%] flex flex-col gap-8 py-6 ">
          <h1 className="text-5xl font-extrabold leading-tight justify-center flex">
            Our Values define <br />
            who we are & what <br />
            we stand for
          </h1>

          {/* Blue underline */}
          <div className="h-[3px] w-full bg-blue-500"></div>

          {/* Paragraph Justified */}
          <p className="text-lg text-gray-700 leading-8 tracking-wide text-justify">
            The journey of Corpseed started with a simple thought: why do
            companies fail even after having a great idea, good execution plan,
            and cash flow. Why investors are worried about investing in Indian
            startups and mid-sized businesses. Few of the key challenges are
            changing regulatory framework, evolving environment and social
            governance, acquiring government permissions and clearances and
            compliant with internal audits etc. It seems like a pretty simple
            concept — you comply with the rules and survive, but it’s not an
            easy journey for a company to know the right set of legal and
            regulatory requirements. To manage these hurdles we came up with a
            concept of listing compliance requirements for products and services
            at one place with an AI driven model, wherein management and other
            stakeholders can have direct access to all compliance activities
            within their organization to fill the gaps?
          </p>

          {/* Blue underline */}
          <div className="h-[3px] w-full bg-blue-500"></div>
        </div>

        {/* RIGHT SECTION  */}
        <div className="w-[50%] flex justify-end items-stretch">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfkkr7KClBlmosEj8NykBEyfqlNs0nqY_ng&s"
            alt="Boat image"
            className=" w-[90%] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col  gap-10">
        {/* 1st div  */}
        <div className="border flex flex-row w-[90%] mx-auto py-8 px-10 gap-10">
          {/* left part  */}
          <div className=" py-4 px-5 w-[40%] bg-blue-600 gap-8">
            <h2 className="text-3xl font-semibold text-white ">Our Mission</h2>
            <p className="text-xl text-white">Simplify Business</p>
            <p className="text-xl text-white">Compliance</p>
          </div>
          <div className="my-auto ">
            <p className="text-lg font-normal  text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta
              nulla quis! Ut ea dolores nam, dolorem alias necessitatibus! Illo
              sint odit fuga aliquid, quaerat a. Obcaecati cumque illum
              perspiciatis.
            </p>
          </div>
        </div>
        {/* 2nd div  */}
        <div className="border flex flex-row w-[90%] mx-auto py-8 px-10 gap-10">
          {/* right part  */}
          <div className="my-auto ">
            <p className="text-lg font-normal  text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta
              nulla quis! Ut ea dolores nam, dolorem alias necessitatibus! Illo
              sint odit fuga aliquid, quaerat a. Obcaecati cumque illum
              perspiciatis.
            </p>
          </div>
          {/* left part  */}
          <div className=" py-4 px-5 w-[40%] bg-blue-600 gap-8">
            <h2 className="text-3xl font-semibold text-white ">Our Vision</h2>
            <p className="text-xl text-white">Reducing</p>
            <p className="text-xl text-white">compliance cost</p>
          </div>
        </div>
        {/* 3rd div  */}
        <div className="border flex flex-row w-[90%] mx-auto py-8 px-10 gap-10">
          {/* left part  */}
          <div className=" py-4 px-5 w-[40%] bg-blue-600 gap-8">
            <h2 className="text-3xl font-semibold text-white ">Our Mission</h2>
            <p className="text-xl text-white">Simplify Business</p>
            <p className="text-xl text-white">Compliance</p>
          </div>
          <div className="my-auto ">
            <div className="flex gap-10 flex-col">
              <p className="text-xl text-gray-700">
                {" "}
                <span className="text-xl font-bold text-black">
                  Integrity {"  "} - {"  "}{" "}
                </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                est quod et animi similique expedita necessitatibus ea? Numquam
                suscipit tempore quibusdam, maxime necessitatibus neque.
              </p>
              <p className="text-xl text-gray-700">
                <span className="text-xl font-bold text-black">
                  Responsibility and Accountability {"  "} - {"  "}{" "}
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                alias, sunt dolore nihil, cupiditate obcaecati, necessitatibus
                fugit consequuntur nam illo officia. Sint temporibus impedit
                laudantium fugiat quis iure aspernatur veniam, quidem voluptatum
                porro dicta?
              </p>
              <p className="text-xl text-gray-700">
                <span className="text-xl font-bold text-black">
                  Caring and Development {"  "} - {"  "}{" "}
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorum nam odit ipsa ab fugit veniam nihil quidem, veritatis
                illum consequatur adipisci atque debitis corrupti dignissimos
                eveniet? Dolore placeat eum necessitatibus aliquid molestias ea.
              </p>
              <p className="text-xl text-gray-600">
                <span className="text-xl font-bold text-black">
                  Contionus Developement {"  "} - {"  "}{" "}
                </span>
                Lorem ipsum, dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10  w-[90%] mx-auto py-4 px-5 flex flex-col gap-6">
          {/* Heading */}
          <div className=" flex flex-col text-center gap-4">
            <h1 className="text-5xl font-extrabold text-black justify-center">
              Who We Are
            </h1>
            <div className="h-[3px] w-[7%] bg-blue-600 flex justify-center mx-auto"></div>
          </div>

          <div className="gap-6 flex flex-col ">
            <p className="text-xl text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates cumque praesentium aut reiciendis vel nihil delectus
              voluptate expedita odit esse. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Incidunt nobis totam voluptas!Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil
              tenetur optio quos.
            </p>
            <p className="text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              facere ipsam repellendus quos reprehenderit architecto repudiandae
              inventore repellat, facilis veniam.
            </p>
            <p className="text-xl text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam id deserunt atque neque fugiat molestias? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Reiciendis, veniam.
            </p>
          </div>
        </div>
        <div className="mt-10  w-[90%] mx-auto py-4 px-5 flex flex-col gap-6">
          {/* Heading */}
          <div className=" flex flex-col text-center gap-4">
            <h1 className="text-5xl font-extrabold text-black justify-center">
              Who We Stand For
            </h1>
            <div className="h-[3px] w-[7%] bg-blue-600 flex justify-center mx-auto"></div>
          </div>

          <div className="gap-6 flex flex-col">
            <p className="text-xl text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates cumque praesentium aut reiciendis vel nihil delectus
              voluptate expedita odit esse. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Incidunt nobis totam voluptas!Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil
              tenetur optio quos.
            </p>
            <p className="text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              facere ipsam repellendus quos reprehenderit architecto repudiandae
              inventore repellat, facilis veniam.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-pink-50 py-5">
        <div className="w-[87%] mx-auto">
          <div className="flex flex-row w-full">
            {/* LEFT TEXT */}
            <div className="w-[50%] my-auto">
              <p className="text-8xl font-extrabold text-gray-900 flex flex-col gap-6">
                <span>From</span>
                <span>CEO</span>
                <span>Desk</span>
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-[50%] py-10">
              <img
                src={ProductComplianceImg}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>

          {/* DESCRIPTION TEXT */}
          <div className="flex gap-5 flex-col mt-5">
            <p className="text-lg text-gray-800 leading-8">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Perferendis eveniet magnam nam
              mollitia ullam, animi corporis quo incidunt pariatur
              consequatur?adipisicing elit. Corrupti numquam sequi nam saepe,
              ipsa, praesentium deserunt, quos incidunt delectus itaque
              temporibus reiciendis ex voluptas dicta vero debitis sed aperiam
              modi doloribus facilis eum! Corrupti tempora ut magni mollitia
              reiciendis amet.
            </p>

            <p className="text-lg  text-gray-800 leading-8">
              Lorem ipsum dolor sit amet consectet Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quod distinctio ducimus laboriosam
              ullam modi molestias natus facilis harum quia a!ur, adipisicing
              elit. A hic, reiciendis placeat atque obcaecati dolor veniam?
              Accusantium odit, velit nemo obcaecati repellat accusamus vitae
              quia, magni quis id officia quaerat, molestiae aliquid consectetur
              omnis natus. Temporibus magni recusandae odio alias!
            </p>
          </div>
        </div>
      </div>

      {/* Where we begin from */}
      <div className="w-[87%] mx-auto py-6">
        {/* Heading  */}
        <div className="">
          <p className="text-8xl font-extrabold text-gray-900 flex flex-col gap-6">
            Where We <br /> Begin From
          </p>
        </div>
        <div className="flex flex-row mt-6">
          <div className="w-[50%] flex ">
            <img src={ProductComplianceImg} alt="" className="mt-5 w-full" />
          </div>
          <div className="w-[50%] flex ">
            <div className="py-8 w-full mt-10">
              <div className="w-full h-[3px] bg-blue-600 mb-4"></div>

              <p className="text-3xl font-semibold text-blue-600 mb-3">
                A Startup in 2017
              </p>

              <p className="text-gray-800 text-lg leading-7 mb-6">
                A small team working out of a small space in Delhi starts out
                ambitiously, offering services like startup business plan for
                funding, company incorporation, intellectual property etc. Our
                services were loved by 9,000 business first year.
              </p>

              <div className="w-full h-[3px] bg-blue-600 mt-4"></div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="flex flex-row w-full">
            <div className="w-[50%] px-6">
              <div className="w-full h-[3px] bg-blue-600 mb-5"></div>

              <p className="text-gray-800 leading-8 text-lg">
                Laws were created to protect and empower us as individuals,
                families and business owners but many people don't get the help
                they need because of high fees and complexity in legal
                structure. Together, we make the legal laws & regulations work
                for you. At CorpSeed, we ensure to make change by providing
                legal consulting services at an affordable price, simple and
                available to all mankind. We are proud to say that we've been
                able to build services that thousands of people rely upon. Every
                day we spend our time and resources making it easier for people
                and businesses to get the legal help they needed so that they
                can focus on building strong businesses. Legal being an
                unorganized sector, most attorneys agree that much can be done
                and should be done to improve general access to the law by
                reducing cost.
              </p>

              <div className="w-full h-[3px] bg-blue-600 mt-5"></div>
            </div>

            <div className="w-[50%] bg-blue-600 flex flex-col justify-center items-center text-white py-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18V5m6 13V5M4 10h16M4 14h16"
                />
              </svg>

              <p className="text-4xl font-extrabold text-center">
                Legal <br /> Services
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="flex flex-row w-full">
            <div className="w-[50%] bg-blue-600 text-white flex flex-col justify-center px-16 py-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 mb-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>

              <p className="text-5xl font-extrabold leading-tight">
                Our <br /> Approach
              </p>
            </div>

            <div className="w-[50%] px-8 flex flex-col justify-center">
              <div className="w-full h-[3px] bg-blue-600 mb-6"></div>

              <p className="text-gray-800 leading-8 text-lg">
                Laws were created to protect and empower us as individuals,
                families and business owners but many people don't get the help
                they need because of high fees and complexity in legal
                structure. Together, we make the legal laws & regulations work
                for you. At CorpSeed, we ensure to make change by providing
                legal consulting services at an affordable price, simple and
                available to all mankind. We are proud to say that we've been
                able to build services that thousands of people rely upon. Every
                day we spend our time and resources making it easier for people
                and businesses to get the legal help they needed so that they
                can focus on building strong businesses. Legal being an
                unorganized sector, most attorneys agree that much can be done
                and should be done to improve general access to the law by
                reducing cost.
              </p>

              <div className="w-full h-[3px] bg-blue-600 mt-6"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default AboutUs;
