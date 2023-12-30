import React from "react";
import AI from "../assets/AI-Banner.svg";
import "./Styles.css";
function Landing() {
  return (
    <>
      <div className="flex md:flex-row flex-col md:p-24 p-20 gap-x-32 outer">
        <div>
          <h1 className="md:text-6xl text-7xl font-bold md:font-semibold  ">
            Manual <br />
            Inspection is <br />
            <span className="text-blue-700 font-normal md:text-6xl  ">
              Slow &amp; Error- <br /> Prone
            </span>
          </h1>
          <p className="font-normal text-6xl mt-4  md:text-lg text-[#82858d] mb-36 md:mb-8">
            AI visual inspection, powered by computer vision, revolutionises{" "}
            <br /> the inspection process in manufacturing, enhancing precision
            and <br />
            cost- effectiveness, all the while maintaining product excellence.
          </p>
          <div className="flex flex-row">
            <button className="bg-blue-700 text-xl md:text-base rounded-full hover:bg-transparent text-white font-sans font-[400] md:font-semibold hover:text-blue-700 px-16 py-10 md:py-2 md:px-4 border border-primary hover:border-blue-700 md:w-40 md:h-[3.5rem]">
              Schedule Call
            </button>
            <button
              type="button"
              className="ml-16 md:ml-10 w-44 h-44 md:h-[3.5rem] md:w-[3.5rem] inline-flex items-center rounded-full border bg-blue-700 px-14 py-16 md:p-3 text-white hover:text-blue-700 shadow-sm hover:bg-transparent "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-16 h-16 ml-1 md:h-7 md:w-7"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
              </svg>
            </button>
            <div className="hidden md:block ml-5 font-medium text-5xl md:text-base font-sans mt-4 cursor-pointer hover:text-primary">
              Watch Video
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-32 flex justify-center">
          <img
            src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
            alt=""
            className="rounded-full w-96 h-96"
          />
        </div>
      </div>

      <div className="md:h-screen mx-16">
        <div
          className="rounded-3xl w-full bg-cover"
          style={{ backgroundImage: `url(${AI})` }}
        >
          <div className="flex flex-col my-auto mx-auto p-12 md:p-8 text-black md:ml-56">
            <div className="grid grid-rows-1 gap-y-8 md:gap-y-6 xl:gap-y-4 py-16 md:py-8">
              <div className="flex md:items-baseline">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-2 md:h-2"
                >
                  <path
                    fill="#0000ff"
                    fill-rule="evenodd"
                    d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
                  ></path>
                </svg>
                <div className="font-medium md:font-bold text-3xl md:text-sm ml-5 mb-3 md:ml-4 md:mb-2">
                  <h1>The Best AI Service Provider</h1>
                </div>
              </div>
              <h2 className="text-5xl md:text-5xl xl:text-5xl font-medium mb-2 md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl">
                Crafting Tomorrow's World with{" "}
                <span className="text-blue-700 font-normal">AI Excellence</span>
              </h2>
              <p className="text-3xl md:text-lg md:max-w-2xl 2xl:max-w-4xl text-gray-500  xl:text-base mb-4 md:mb-0">
                The majority of customers lack data-driven insights and
                automation. Using AI, Ombrulla assist clients in extracting data
                from diverse sources such as photos, videos, and data lakes,
                which can assist businesses in making data-driven insights and
                improving their bottom line.
              </p>
              <div className="flex">
                <button
                  type="button"
                  className="h-16 w-16 md:w-12 md:h-12 lg:h-14 lg:w-14 inline-flex items-center rounded-full border border-transparent bg-blue-700 p-3 text-white hover:text-blue-700 shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-12 w-12 md:ml-1 md:h-7 md:w-7"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                </button>
                <div className="ml-5 font-medium text-2xl md:text-base xl:text-base font-sans mt-4 md:mt-3 xl:mt-4 cursor-pointer hover:text-blue-700">
                  Watch Corporate Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="md:w-1/2 flex flex-col pt-0 gap-y-16 md:gap-y-6">
          <div className="flex items-baseline">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
            <h3 className="text-3xl md:text-sm font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4">
              AI INFRASTRUCTURE INSPECTION
            </h3>
          </div>
          <h3 className="text-6xl md:text-5xl">
            Enhances Efficiency, Safety, and Cost-Effectiveness
          </h3>
          <ul className="list-disc text-gray-800 ml-4 space-y-6 md:space-y-2 md:max-w-none ">
            <li className="text-4xl md:text-lg">
              <span className="font-medium text-black">
                Cutting-Edge Solution
              </span>
              : Ombrulla leverages AI, drones, and IoT technologies to transform
              infrastructure inspection.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">Real-Time Insights</span>
              : Real-time insights enhance inspection efficiency, safety, and
              reduce conventional challenges.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">
                Longevity and Cost-Effectiveness
              </span>
              : Ombrulla ensures the longevity and safety of critical
              infrastructure while offering a cost-effective solution.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">
                Responsive Maintenance
              </span>
              : Enhances infrastructure management, increasing reliability and
              responsiveness, and reducing risks.
            </li>
          </ul>
          <div className="flex flex-row items-center gap-x-8">
            <button
              className="bg-blue-700 text-4xl md:text-base rounded-full
                hover:bg-transparent text-white font-sans font-[400] md:font-semibold
                hover:text-blue-700 py-16 md:py-2 md:px-4 border border-blue-700
                hover:border-secondary md:w-40 w-96 md:h-14"
              aria-label="schedule call"
            >
              Schedule Call
            </button>
            <div className="text-5xl md:text-lg hover:text-blue-700 font-medium">
              <div className="flex">
                <div>
                  <a href="" className="text-3xl md:text-base font-medium">
                    Read more
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0000FF"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 md:flex mt-12 items-center justify-center rounded-xl">
          <img
            src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp"
            class="absolute z-10 -mr-10 -mt-[8.438rem]  h-[65vh] w-[40vw] rounded-lg"
          ></img>
        </div>
      </div>

      <div className="flex flex-col md:mt-0 mt-32 md:flex-row-reverse md:h-screen justify-around px-20 md:px-[6vw] h-auto md:m-0  md:my-0">
        <div className="md:w-1/2 mt-8 flex flex-col pt-0 gap-y-16 md:gap-y-6">
          <div className="flex items-baseline">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
            <h3 className="text-3xl md:text-sm font-medium md:font-bold ml-6 md:mt-10 md:ml-4">
              AI VISUAL INSPECTION
            </h3>
          </div>
          <h3 className="text-6xl  md:text-5xl">
            Improving Quality with Greater Precision
          </h3>
          <ul className="list-disc text-gray-800 ml-4 space-y-6 md:space-y-2 md:max-w-none ">
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">
                AI Defect Detection
              </span>
              : Utilizes computer vision and machine learning to identify and
              recognise defects during visual inspections autonomously.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">Eagle-Eyed Vision</span>:
              AI algorithms can identify even the most subtle defects, including
              microscopic cracks, colour variations, and misalignments.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">
                Informed Decision-Making
              </span>
              : Valuable data is extracted from images and videos, empowering
              users to make informed, data-driven decisions.
            </li>
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">Real-Time Insights</span>
              : AI defect detection provides immediate feedback, enabling
              proactive interventions and adjustments to production processes.
            </li>
          </ul>
          <div className="flex flex-row items-center gap-x-8">
            <div>
              <button
                className="bg-blue-700 text-4xl md:text-base  rounded-full
                hover:bg-transparent text-white font-sans font-[400] md:font-semibold
                hover:text-blue-700 py-16 md:py-2 md:px-4 border border-blue-700
                hover:border-secondary md:w-40 w-96 md:h-14"
              >
                Schedule Call
              </button>
            </div>
            <div className="text-5xl md:text-lg hover:text-primary font-medium">
              <div className="flex">
                <div>
                  <a href="" className="text-3xl md:text-base font-medium">
                    Read more
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0000FF"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden basis-1/2 mt-20 mr-32 md:flex items-center justify-center">
          <img
            src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
            class="absolute z-10 -mr-10 -mt-[8.438rem]  h-[65vh] w-[40vw] rounded-lg"
          ></img>
        </div>
      </div>

      <div className="flex flex-col md:mt-0 mt-32 linear-gradient p-28 md:flex-row md:h-screen justify-around px-20 md:px-[6vw] h-auto md:m-0  md:my-0">
        <div className="md:w-1/2 flex flex-col pt-0 gap-y-16 md:gap-y-6">
          <div className="flex items-baseline">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
            <h3 className="text-3xl md:text-sm font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4">
              AI DATA ANALYTICS
            </h3>
          </div>
          <h3 className="text-6xl  md:text-5xl">
            Empowers Businesses to Make Insightful Decisions
          </h3>
          <ul className="list-disc text-gray-800 ml-4 space-y-6 md:space-y-2 md:max-w-none ">
            <li className="text-4xl  md:text-lg">
              <span className="font-medium text-black">
                Actionable Insights
              </span>
              : AI data analysis enhances decisions, personalizes customer
              experiences and improve operations.
            </li>
            <li className="text-4xl md:text-lg">
              <span className="font-medium text-black">
                Increased Customer Loyalty
              </span>
              : AI predictive analytics for personalized recommendations &amp;
              increased customer loyalty.
            </li>
            <li className="text-4xl md:text-lg">
              <span className="font-medium text-black">Quality Assurance</span>:
              AI analytics identifies and mitigates potential issues, ensuring
              the quality and reliability of products and services.
            </li>
            <li className="text-4xl md:text-lg">
              <span className="font-medium text-black">
                Efficiency and Responsiveness
              </span>
              : Customers benefit from increased efficiency, improved product
              quality, and more responsive interactions with businesses.
            </li>
          </ul>
          <div className="flex flex-row items-center gap-x-8">
            <div>
              <button
                className="bg-blue-700 text-4xl md:text-base rounded-full
                hover:bg-transparent text-white font-sans font-[400] md:font-semibold
                hover:text-blue-700 py-16 md:py-2 md:px-4 border border-blue-700
                hover:border-secondary md:w-40 w-96 md:h-14"
              >
                Schedule Call
              </button>
            </div>
            <div className="text-5xl md:text-lg hover:text-primary font-medium">
              <div className="flex">
                <div>
                  <a href="" className="text-3xl md:text-base font-medium">
                    Read more
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0000FF"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mt-56 basis-1/2 md:flex items-center justify-center">
          <img
            src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp"
            class="absolute z-10 -mr-10 -mt-[8.438rem]  h-[65vh] w-[40vw] rounded-lg"
          ></img>
        </div>
      </div>

      <div className="bg-blue-700 mt-52 p-8 flex md:flex-row flex-col">
        <div className="md:p-16 p-4 md:mt-0 mt-16 md:w-1/2">
          <img
            src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp"
            className="w-52 h-14 md:h-6 md:w-28"
            alt=""
          />
          <h2 className="text-2xl md:text-base font-normal text-white">
            <span className="text-white font-bold">PE</span>rformance -{" "}
            <span className="text-white font-bold">TR</span>acking -{" "}
            <span className="text-white font-bold">AN</span>alytics
          </h2>
          <div className="flex flex-col mt-8 md:mt-4 text-5xl md:text-4xl  text-white">
            <div>AI &amp; IoT Enabled</div>
            <div>Asset Performance Management</div>
          </div>
          <p className="text-4xl md:text-lg mt-8 md:mt-4 text-white">
            Petran offers an Asset Performance Management (APM) system that
            harnesses the power of artificial intelligence and the Internet of
            Things (IoT) to empower data-driven decision-making and enable
            proactive maintenance strategies.
          </p>
          <div className="flex md:mt-5 mt-10 ">
            <div>
              <button
                className="bg-white md:bg-transparent text-3xl md:text-base text-blue-700 md:text-white
               hover:text-black border border-white
              rounded-full  py-8 md:py-0 px-6  md:w-40 w-72 md:h-14"
              >
                Schedule Call
              </button>
            </div>
            <div className="flex ml-8 ">
              <button
                type="button"
                className="ml-2 md:ml-0 md:h-[3.5rem] md:w-[3.5rem] inline-flex items-center rounded-full border border-transparent md:border-white bg-white md:bg-transparent text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-16 h-14 ml-3 md:ml-4 md:h-6 md:w-6 text-blue-700 md:text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="ml-8 md:ml-4 text-white text-2xl md:text-base font-albert-sans mt-8 md:mt-3 cursor-pointer hover:text-primary">
                Watch Video
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-16">
          <img
            src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-16 p-4 gap-x-8">
        <div className="md:w-1/3 px-8">
          <div className="flex items-baseline">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
            <h3 className="text-3xl md:text-sm font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4">
              PRODUCTS
            </h3>
          </div>
          <h1 className="text-5xl md:text-base font-bold mt-8 mb-8">
            Our HR Tools
          </h1>
          <p className="text-3xl md:text-base text-gray-500">
            Our job grading and evaluation tool, combined with the compensation
            management tool, is a highly effective SaaS-based solution. It
            greatly assists HR consultants and managers in carrying out their
            roles with efficiency and precision.
          </p>
        </div>

        <div className="md:w-1/3 h-full bg-gray-100 rounded-3xl mx-14 md:mx-8 p-8 md:mt-0 mt-8">
          <h1 className="text-5xl md:text-3xl mb-8">
            Job Grading and Evaluation
          </h1>
          <p className=" text-3xl md:text-base text-gray-500">
            Job evaluation assesses and ranks job roles in an organization based
            on responsibilities and skills, often for compensation and
            structuring purposes.
          </p>
          <div className="w-72 md:w-56 mx-auto mt-8">
            <img
              src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp"
              alt=""
            />
          </div>
          <div className="flex mt-8 md:ml-0 ml-8">
            <div>
              <a
                href="https://jobprofiler.rewardsdna.com/login"
                target="_blank"
                className="text-xl md:text-base font-medium "
              >
                Free Trial
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0000FF"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 md:w-5 md:h-5 font-bold text-[#0000FF]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-gray-100 rounded-3xl p-8 mx-14 md:mx-8 py-8 md:mr-16 md:mt-0 mt-4">
          <h1 className="text-5xl md:text-3xl mb-8">Compensation Management</h1>
          <p className="text-3xl md:text-base text-gray-500">
            Compensation management software automates salary planning, budget
            management, and equity analysis, ensuring fair and competitive pay
            practices.
          </p>
          <div className="w-72 md:w-56 mx-auto mt-8">
            <img
              src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp"
              alt=""
            />
          </div>
          <div className="flex mt-8 md:ml-0 ml-8">
            <div>
              <a
                href="https://jobprofiler.rewardsdna.com/login"
                target="_blank"
                className="text-xl md:text-base font-medium "
              >
                Book For Demo
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0000FF"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 md:w-5 md:h-5 font-bold text-[#0000FF]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex items-baseline">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
          <h3 className="text-3xl md:text-sm font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4 mr-6">
            OUR CUSTOMERS
          </h3>
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold">They Trust Us</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-baseline">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
          <h3 className="text-3xl md:text-sm  font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-4 mr-6">
            BRANDS WE WORK WITH
          </h3>
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mt-2">
          Trusted by Thousands of Businesses
        </h1>
      </div>
      <div className="brand-section">
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp"
            alt="unv"
            className="h-32 w-32"
          />
        </div>
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp"
            alt="Dahua"
            className="h-36 w-36"
          />
        </div>
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp"
            alt="Nvidia"
            className="h-32 w-32"
          />
        </div>
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp"
            alt="Amazon"
            className="h-36 w-36"
          />
        </div>
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp  "
            alt="Hikvision"
            className="h-36 w-36"
          />
        </div>
        <div className="brand">
          <img
            src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp"
            alt="Azure"
            className="h-24 w-28"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-8">
        <div className="flex items-baseline">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
          <h3 className="text-3xl md:text-sm  font-medium md:font-bold font-albert-sans ml-6 md:mt-10 md:ml-6 mr-6">
            BLOG UPDATES
          </h3>
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-2 md:h-2"
          >
            <path
              fill="#0000ff"
              fill-rule="evenodd"
              d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
            ></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mt-2">To Read</h1>
      </div>
      <hr />
      <div className="blog-section">
        <div className="">
          <img
            src="https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp"
            className="rounded-md w-full h-52"
            alt=""
          />
          <h1 className="font-semibold mt-8">
            AI Revolutionizes Logistics and Supply Chain Management
          </h1>
          <p className="mt-2 text-gray-500">
            AI takes huge leaps in areas like Logistics and Supply chain
            management with AI Visual Inspection, AI Data Analytics, Predictive
            Maintenance etc.
          </p>
          <div className="flex row-span-1 place-items-center mt-6">
            <div className="flex-shrink-0">
              <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                <span className="sr-only">Zara Elizabeth</span>
                <img
                  src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g"
                  className="md:h-10 md:w-10 h-12 w-12 rounded-full"
                  alt="Zara Elizabeth"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-lg md:text-sm font-medium text-gray-900">
                <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                  Zara Elizabeth
                </a>
              </p>
              <div className="flex space-x-1 text-lg md:text-sm text-gray-500">
                <time date-time="2023-12-21T06:33:16.000Z">
                  December 21, 2023
                </time>
                <span aria-hidden="true">·</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp"
            className="rounded-md w-full h-52"
            alt=""
          />
          <h1 className="font-semibold mt-8">
            AI Revolutionizes Logistics and Supply Chain Management
          </h1>
          <p className="mt-2 text-gray-500">
            AI takes huge leaps in areas like Logistics and Supply chain
            management with AI Visual Inspection, AI Data Analytics, Predictive
            Maintenance etc.
          </p>
          <div className="flex row-span-1 place-items-center mt-6">
            <div className="flex-shrink-0">
              <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                <span className="sr-only">Zara Elizabeth</span>
                <img
                  src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g"
                  className="md:h-10 md:w-10 h-12 w-12 rounded-full"
                  alt="Zara Elizabeth"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-lg md:text-sm font-medium text-gray-900">
                <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                  Zara Elizabeth
                </a>
              </p>
              <div className="flex space-x-1 text-lg md:text-sm text-gray-500">
                <time date-time="2023-12-21T06:33:16.000Z">
                  December 21, 2023
                </time>
                <span aria-hidden="true">·</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png"
            className="rounded-md w-full h-52"
            alt=""
          />
          <h1 className="font-semibold mt-8">
            AI Revolutionizes Logistics and Supply Chain Management
          </h1>
          <p className="mt-2 text-gray-500">
            AI takes huge leaps in areas like Logistics and Supply chain
            management with AI Visual Inspection, AI Data Analytics, Predictive
            Maintenance etc.
          </p>
          <div className="flex row-span-1 place-items-center mt-6">
            <div className="flex-shrink-0">
              <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                <span className="sr-only">Zara Elizabeth</span>
                <img
                  src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g"
                  className="md:h-10 md:w-10 h-12 w-12 rounded-full"
                  alt="Zara Elizabeth"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-lg md:text-sm font-medium text-gray-900">
                <a href="https://blog.ombrulla.com/author/ombrullaadmin/">
                  Zara Elizabeth
                </a>
              </p>
              <div className="flex space-x-1 text-lg md:text-sm text-gray-500">
                <time date-time="2023-12-21T06:33:16.000Z">
                  December 21, 2023
                </time>
                <span aria-hidden="true">·</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
