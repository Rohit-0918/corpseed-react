import React from "react";

const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We believe that nothing is more important than our stakeholder’s reputation, growth, and confidentiality. Behaving with the highest levels of integrity is fundamental to who we are. We demonstrate a strong commitment to sustainable, transparent & responsible business practices. Adhere to the highest professional standards and credibility. We do what is right.",
    },
    {
      title: "Responsibility and Accountability",
      description:
        "We at Corpseed are personally accountable and jointly responsible for the transparency, security and on-time delivery of quality services to avoid non-compliance losses for our clients.",
    },
    {
      title: "Caring and Development",
      description:
        "Our caring approach complements our agility and speed. We make the effort to understand every stakeholder and what matters to them. We also recognize the value that each person contributes and support others to grow and work in the ways that bring out their best. We treat each other with respect, our motto is to create an environment in which people are proud and happy to work.",
    },
    {
      title: "Continous Improvements",
      description: "We never stop learning and improving.",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-10 lg:px-20 py-12 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
          Our Values define who we <br className="hidden sm:block" /> are & what
          we stand for
        </h1>
        <div className="h-[3px] w-[30%] sm:w-[10%] bg-blue-500 mx-auto my-6"></div>
        <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-gray-700 text-justify">
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
          organization to fill the gaps.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="flex flex-col md:flex-row w-[95%] sm:w-[90%] mx-auto py-10 gap-6 sm:gap-10">
        {/* Mission */}
        <div className="bg-[#edf5ff] text-black p-6 sm:p-10 flex flex-col gap-4 w-full md:w-1/2 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl font-semibold">
            Simplify Business Compliance
          </p>
          <p className="text-gray-700 text-sm sm:text-lg mt-2 text-justify">
            Our AI driven model and robust processes simplify business
            compliance whilst protecting the confidentiality and privacy of our
            customers. This enables them to save time and money.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#edf5ff] text-black p-6 sm:p-10 flex flex-col gap-4 w-full md:w-1/2 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl font-semibold">
            Reducing Compliance Cost
          </p>
          <p className="text-gray-700 text-sm sm:text-lg mt-2 text-justify">
            By focusing on reducing our customers compliance cost, we will
            achieve &amp; sustain a positive growth and profitability.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-[95%] sm:w-[90%] mx-auto py-12 sm:py-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-center">
          Our Values
        </h2>
        <div className="h-[3px] w-[30%] sm:w-[10%] bg-blue-500 mx-auto my-6"></div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          <table className="w-full border-collapse">
            <tbody>
              {values.map((value, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-300 last:border-b-0 bg-white"
                >
                  <td className="w-1/3 px-6 py-5 align-center">
                    <h3 className="text-2xl font-semibold p-5 bg-gray-100">
                      {value.title}
                    </h3>
                  </td>
                  <td className="w-2/3 px-6 py-5 align-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {values.map((v, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg p-4 bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-gray-700">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-[95%] sm:w-[90%] mx-auto py-2">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">
          Who We Are
        </h2>
        <div className="h-[3px] w-[30%] sm:w-[7%] bg-blue-600 mx-auto my-6"></div>
        <p className="text-sm sm:text-lg text-gray-800 mb-4 text-justify">
          Through helping Indian startups &amp; businesses mitigate regulatory
          compliance risks through robust processes and AI driven proprietary
          technology, we simplify business compliance whilst protecting the
          confidentiality and privacy of our customers. This enables our clients
          to save time and money, which can drive positive, sustainable change
          for our clients, our people and society at large.
        </p>
        <p className="text-sm text-gray-800 sm:text-lg mb-4 text-justify">
          Corpseed Ites Private Limited serves the needs of business,
          public-sector agencies, not-for-profits and startups. Corpseed is
          committed to quality and service excellence in all that we do,
          bringing our best to clients and earning the trust through our actions
          and behaviors both professionally and personally.
        </p>
        <p className="text-sm text-gray-800  sm:text-lg text-justify">
          We lead with a commitment to quality, transparency, privacy and
          integrity, bringing a passion for client success and a purpose to
          serve and improve the communities in which Corpseed company operate.
        </p>
      </section>

      {/* Who We Stand For */}
      <section className="w-[95%] sm:w-[90%] mx-auto py-12 sm:py-20">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">
          Who We Stand For
        </h2>
        <div className="h-[3px] w-[30%] sm:w-[7%] bg-blue-600 mx-auto my-6"></div>
        <p className="text-sm sm:text-lg text-gray-800 mb-4 text-justify">
          At Corpseed, we encourage and empower change in all we do. Every
          single day, we challenge ourselves to bring our absolute best to
          clients, to the public and to one another. We set ourselves apart
          through our affection and pride, our expertise and our eagerness, our
          inclusive culture and our focus on developing the leaders of tomorrow.
        </p>
        <p className="text-sm sm:text-lg text-gray-800 text-justify">
          It's not just what we do at Corpseed that matters: we also pay
          attention to how we do it. Our Values are our core beliefs, guiding
          and unifying our actions and behaviors. Shared across every level and
          in every state, jurisdiction and territory in which we operate, they
          are the foundation of our unique culture.
        </p>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-pink-50 py-12 sm:py-16 px-4 sm:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-6xl font-bold mb-8">From CEO Desk</h2>
          <p className="text-sm sm:text-lg text-gray-800  leading-7 sm:leading-8 text-justify">
            At Corpseed, our purpose is to build a better compliance check,
            Inspire Confidence and Empower positive Change in your business. The
            insights and quality services we provide help build trust and
            confidence in managing business regulatory compliance. We develop
            exceptional leaders who team to deliver on our commitments to all
            our stakeholders. In doing so, we play a critical role in building a
            better working environment for our people, for our customers and for
            our communities. In other words, working with entrepreneurs,
            companies, and startups to solve their most pressing challenges.
          </p>
          <p className="text-sm sm:text-lg text-gray-800 leading-7 sm:leading-8 mt-4 text-justify">
            Our caring approach complements our agility and speed. We Make the
            effort to understand every individual and what matters to them.
            Recognise the value that each person contributes &amp; Support
            others to grow and work in the ways that bring out their best. We
            treat each other with respect, believes in investing in our people
            and innovation to create an environment in which people are proud to
            associate and work with Corpseed
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.corpseed.com/assets/images/ceo.webp"
            alt="CEO Desk"
            className="w-full h-auto object-cover "
          />
        </div>
      </section>

      {/* Where We Begin From */}
      <section className="w-[95%] sm:w-[90%] mx-auto py-12 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-gray-900">
            Where We Begin From
          </h2>
          <div className="h-[3px] w-[30%] sm:w-[10%] bg-blue-600 mx-auto my-6"></div>
        </div>

        {/* Origin Story */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-14 items-center mb-14">
          <img
            src="https://www.corpseed.com/assets/images/begin-from.webp"
            alt="Corpseed Beginning"
            className="w-full  object-cover "
          />
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900">
              A Startup in 2017
            </h3>
            <p className="text-sm sm:text-lg text-gray-700 text-justify">
              Corpseed started in 2017 as a small team working out of a modest
              space in Delhi. With a strong belief that compliance should be
              simple, accessible, and transparent, we began offering services
              such as startup planning, company incorporation, and intellectual
              property solutions.
            </p>
            <p className="text-sm sm:text-lg text-gray-700 text-justify">
              In our very first year, more than 9,000 businesses trusted
              Corpseed — reinforcing our vision to become a reliable compliance
              partner for Indian enterprises.
            </p>
          </div>
        </div>

        {/* Legal Services */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-14 items-start mb-14">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                <img src="https://svgsilh.com/svg/450202.svg" alt="" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Legal Services
              </h3>
            </div>
            <p className="text-sm sm:text-lg text-gray-700 text-justify">
              Laws are designed to protect individuals, families, and
              businesses, yet legal complexity and high costs often prevent
              access to proper guidance. Corpseed exists to close this gap.
            </p>
            <p className="text-sm sm:text-lg text-gray-700 text-justify">
              By simplifying regulatory frameworks and offering affordable legal
              consulting, we help businesses stay compliant while focusing on
              growth.
            </p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-sm sm:text-lg uppercase tracking-wide text-gray-500">
              What we focus on
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-lg">
              <li>• Affordable legal compliance</li>
              <li>• Transparent processes</li>
              <li>• Reduced regulatory complexity</li>
              <li>• Scalable solutions for businesses</li>
            </ul>
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-14 items-start">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-sm sm:text-lg uppercase tracking-wide text-gray-500 text-justify">
              Our Philosophy
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-lg">
              <li>• Legal services unorganized</li>
              <li>• Technology simplifies compliance</li>
              <li>• Structured workflows improve efficiency</li>
              <li>• Expert guidance for businesses</li>
            </ul>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center p-2 justify-center rounded-full border border-gray-300">
                <svg width="35" height="35" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
                    stroke="#555"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Approach
              </h3>
            </div>
            <p className="text-sm sm:text-lg text-gray-700">
              We combine technology, legal expertise, and operational discipline
              to create compliance solutions that are simple, efficient, and
              reliable.
            </p>
            <p className="text-sm sm:text-lg text-gray-700">
              Our focus is long-term value — empowering businesses to operate
              with confidence, reduce risk, and scale sustainably.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
