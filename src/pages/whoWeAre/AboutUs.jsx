import React from "react";

const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo est quod et animi similique expedita necessitatibus ea? Numquam suscipit tempore quibusdam, maxime necessitatibus neque.",
    },
    {
      title: "Responsibility and Accountability",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus alias, sunt dolore nihil, cupiditate obcaecati, necessitatibus fugit consequuntur nam illo officia. Sint temporibus impedit laudantium fugiat quis iure aspernatur veniam, quidem voluptatum porro dicta?",
    },
    {
      title: "Caring and Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum nam odit ipsa ab fugit veniam nihil quidem, veritatis illum consequatur adipisci atque debitis corrupti dignissimos eveniet? Dolore placeat eum necessitatibus aliquid molestias ea.",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
          Our Values define <br />
          who we are & what <br />
          we stand for
        </h1>
        <div className="h-[3px] w-32 sm:w-48 lg:w-64 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 text-justify">
          The journey of Corpseed started with a simple thought: why do
          companies fail even after having a great idea, good execution plan,
          and cash flow. Why investors are worried about investing in Indian
          startups and mid-sized businesses. Few of the key challenges are
          changing regulatory framework, evolving environment and social
          governance, acquiring government permissions and clearances and
          compliant with internal audits etc. It seems like a pretty simple
          concept — you comply with the rules and survive, but it’s not an easy
          journey for a company to know the right set of legal and regulatory
          requirements. To manage these hurdles we came up with a concept of
          listing compliance requirements for products and services at one place
          with an AI driven model, wherein management and other stakeholders can
          have direct access to all compliance activities within their
          organization to fill the gaps?
        </p>
        <div className="h-[3px] w-32 sm:w-48 lg:w-64 bg-blue-500 mt-4 mx-auto"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="flex flex-col md:flex-row w-[90%] mx-auto py-16 gap-10">
        {/* Mission */}
        <div className="bg-[#f2f3ff] text-black p-10 flex flex-col gap-4 w-full md:w-1/2 rounded-lg">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-xl font-semibold">Simplify Business</p>
          <p className="text-xl font-semibold">Compliance</p>
          <p className="text-black mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta
            nulla quis! Ut ea dolores nam, dolorem alias necessitatibus! Illo
            sint odit fuga aliquid, quaerat a. Obcaecati cumque illum
            perspiciatis.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#f2f3ff] text-black p-10 flex flex-col gap-4 w-full md:w-1/2 rounded-lg">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-xl font-semibold">Reducing</p>
          <p className="text-xl font-semibold">Compliance Cost</p>
          <p className="text-black-200 mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta
            nulla quis! Ut ea dolores nam, dolorem alias necessitatibus! Illo
            sint odit fuga aliquid, quaerat a. Obcaecati cumque illum
            perspiciatis.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-[90%] mx-auto py-16">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-600">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-[90%] mx-auto py-16">
        <h2 className="text-5xl font-extrabold text-center mb-6">Who We Are</h2>
        <div className="h-[3px] w-[7%] bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          cumque praesentium aut reiciendis vel nihil delectus voluptate
          expedita odit esse. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Incidunt nobis totam voluptas! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Adipisci nihil tenetur optio quos.
        </p>
        <p className="text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut facere
          ipsam repellendus quos reprehenderit architecto repudiandae inventore
          repellat, facilis veniam.
        </p>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          id deserunt atque neque fugiat molestias? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis, veniam.
        </p>
      </section>

      {/* Who We Stand For Section */}
      <section className="w-[90%] mx-auto py-16">
        <h2 className="text-5xl font-extrabold text-center mb-6">
          Who We Stand For
        </h2>
        <div className="h-[3px] w-[7%] bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          cumque praesentium aut reiciendis vel nihil delectus voluptate
          expedita odit esse. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Incidunt nobis totam voluptas! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Adipisci nihil tenetur optio quos.
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut facere
          ipsam repellendus quos reprehenderit architecto repudiandae inventore
          repellat, facilis veniam.
        </p>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-pink-50 py-16 px-5 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-4">
            From <br /> CEO <br /> Desk
          </h2>
          <p className="text-lg text-gray-800 leading-8">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Perferendis eveniet magnam nam
            mollitia ullam, animi corporis quo incidunt pariatur consequatur?
            Adipisicing elit. Corrupti numquam sequi nam saepe, ipsa,
            praesentium deserunt, quos incidunt delectus itaque temporibus
            reiciendis ex voluptas dicta vero debitis sed aperiam modi doloribus
            facilis eum! Corrupti tempora ut magni mollitia reiciendis amet.
          </p>
          <p className="text-lg text-gray-800 leading-8 mt-4">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quod distinctio ducimus laboriosam
            ullam modi molestias natus facilis harum quia a! A hic, reiciendis
            placeat atque obcaecati dolor veniam? Accusantium odit, velit nemo
            obcaecati repellat accusamus vitae quia, magni quis id officia
            quaerat, molestiae aliquid consectetur omnis natus. Temporibus magni
            recusandae odio alias!
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.corpseed.com/assets/images/ceo.webp"
            alt="CEO Desk"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Where We Begin From Section */}
      <section className="w-[87%] mx-auto py-16">
        <h2 className="text-8xl font-extrabold mb-12">Where We Begin From</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src="https://www.corpseed.com/assets/images/begin-from.webp"
              alt="Begin From"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-4">
            <div className="h-[3px] bg-blue-600 mb-4 w-full"></div>
            <h3 className="text-3xl font-semibold text-blue-600">
              A Startup in 2017
            </h3>
            <p className="text-gray-800 leading-7">
              A small team working out of a small space in Delhi starts out
              ambitiously, offering services like startup business plan for
              funding, company incorporation, intellectual property etc. Our
              services were loved by 9,000 business first year.
            </p>
            <div className="h-[3px] bg-blue-600 mt-4 w-full"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-10 gap-6">
          <div className="md:w-1/2 bg-blue-600 text-white p-16 flex flex-col justify-center gap-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20"
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
            <h3 className="text-4xl font-extrabold">Legal Services</h3>
          </div>

          <div className="md:w-1/2 px-4 flex flex-col justify-center gap-4">
            <div className="h-[3px] bg-blue-600 w-full mb-4"></div>
            <p className="text-gray-800 leading-7">
              Laws were created to protect and empower us as individuals,
              families and business owners but many people don't get the help
              they need because of high fees and complexity in legal structure.
              Together, we make the legal laws & regulations work for you. At
              CorpSeed, we ensure to make change by providing legal consulting
              services at an affordable price, simple and available to all
              mankind. We are proud to say that we've been able to build
              services that thousands of people rely upon. Every day we spend
              our time and resources making it easier for people and businesses
              to get the legal help they needed so that they can focus on
              building strong businesses. Legal being an unorganized sector,
              most attorneys agree that much can be done and should be done to
              improve general access to the law by reducing cost.
            </p>
            <div className="h-[3px] bg-blue-600 w-full mt-4"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-10 gap-6">
          <div className="md:w-1/2 px-4 flex flex-col justify-center gap-4">
            <div className="h-[3px] bg-blue-600 w-full mb-4"></div>
            <p className="text-gray-800 leading-7">
              Laws were created to protect and empower us as individuals,
              families and business owners but many people don't get the help
              they need because of high fees and complexity in legal structure.
              Together, we make the legal laws & regulations work for you. At
              CorpSeed, we ensure to make change by providing legal consulting
              services at an affordable price, simple and available to all
              mankind. We are proud to say that we've been able to build
              services that thousands of people rely upon. Every day we spend
              our time and resources making it easier for people and businesses
              to get the legal help they needed so that they can focus on
              building strong businesses. Legal being an unorganized sector,
              most attorneys agree that much can be done and should be done to
              improve general access to the law by reducing cost.
            </p>
            <div className="h-[3px] bg-blue-600 w-full mt-4"></div>
          </div>

          <div className="md:w-1/2 bg-blue-600 text-white p-16 flex flex-col justify-center gap-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 mb-4"
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
            <h3 className="text-5xl font-extrabold leading-tight">
              Our Approach
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
