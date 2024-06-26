import React from "react";
import { FaFacebook, FaPinterest } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
export const JobDetails = () => {
  return (
    <>
      <section className="bg-orange-50 relative overflow-hidden flex flex-col gap-4 px-24 py-14">
        <h3 className="text-4xl font-bold text-neutral-700">
          Senior UI / UX Designer
        </h3>
        <span className=" text-zinc-400">
          <Link className="text-neutral-900 hover:text-violet-500 transition-all ease-in-out duration-200 cursor-pointer">
            Home
          </Link>{" "}
          / Jobs listing
        </span>
        <div className="w-12 h-12 rounded-full border-[1.1rem] right-[8%] border-[#E5EAF5] absolute top-[25%]"></div>
        <div className="w-32 h-32 rounded-full border-[2rem] right-[-%] border-[#EADFF5] absolute bottom-[-25%]"></div>
        <div className="w-3 h-3 rounded-full bg-[#BEE2AE] absolute left-[1%] top-[7%]"></div>
        <div className="w-40 h-10 top-[30%] absolute left-[-5%] -rotate-[38deg] bg-[#D5C5F6] rounded-full"></div>
        <div className="w-36 h-8 top-[64%] absolute left-[-5%] -rotate-[38deg] bg-[#B9D0F8] rounded-full"></div>
        <div className="w-36 h-8 top-[98%] absolute left-[-5%] -rotate-[38deg] bg-[#FFE4CA] rounded-full"></div>
      </section>
      <section>
        <div>
          <figure>
            <img
              src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job-single/img-job-feature.png"
              alt=""
            />
          </figure>
          <h4>The AliStudio Team</h4>
          <p>
            The AliStudio Design team has a vision to establish a trusted
            platform that enables productive and healthy enterprises in a world
            of digital and remote everything, constantly changing work patterns
            and norms, and the need for organizational resiliency.
          </p>
          <p>
            The ideal candidate will have strong creative skills and a portfolio
            of work which demonstrates their passion for illustrative design and
            typography. This candidate will have experiences in working with
            numerous different design platforms such as digital and print forms.
          </p>
          <div>
            <h4>Essential Knowledge, Skills, and Experience</h4>

            <ul>
              <li>
                A portfolio demonstrating well thought through and polished end
                to end customer journeys
              </li>
              <li>
                5+ years of industry experience in interactive design and / or
                visual design
              </li>
              <li>Excellent interpersonal skills</li>
              <li>
                Aware of trends in mobile, communications, and collaboration
              </li>
              <li>
                Ability to create highly polished design prototypes, mockups,
                and other communication artifacts
              </li>
            </ul>
          </div>
          <div>
            <h4>Preferred Experience</h4>
            <ul>
              <li>
                A portfolio demonstrating well thought through and polished end
                to end customer journeys
              </li>
              <li>
                5+ years of industry experience in interactive design and / or
                visual design
              </li>
              <li>Excellent interpersonal skills</li>
              <li>
                Aware of trends in mobile, communications, and collaboration
              </li>
              <li>
                Ability to create highly polished design prototypes, mockups,
                and other communication artifacts
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <div>
              <button>Apply now</button>
              <button>Save job</button>
            </div>
            <ul>
              <li>
                <button>
                  <FaFacebook />
                  Share
                </button>
              </li>
              <li>
                <button>
                  <AiFillTwitterCircle />
                  Tweaet
                </button>
              </li>
              <li>
                <button>
                  <FaPinterest />
                  Pin
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
