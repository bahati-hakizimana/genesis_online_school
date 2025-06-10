import Navbar from "../Navbar";
import Footer from "../Footer"
import photo1 from "../../../../assets/images/tv023.avif";
import photo from "../../../../assets/images/whatOffertvo.webp";
import photo2 from "../../../../assets/images/tv024.webp";
import photo3 from "../../../../assets/images/tv025.webp";
import photo4 from "../../../../assets/images/tv026.svg";
import { Link } from "react-router-dom";
const WhatOffer = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white w-full py-12 ">
        <div className="max-w-7xl mx-auto  px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
            <div className=" flex flex-col space-y-6">
              <h1 className=" text-[50px] font-bold text-black">
                Make Your Goals a Reality with GENESIS ONLINE SCHOOL
              </h1>
              <p className="text-xl">
                Students study with us for many different reasons. Some live
                remotely, some want to change careers, others require
                flexibility due to personal needs, training schedules, work,
                illness, disability or family commitments. Regardless of why you
                want to further your education or what your goals are, we’re so
                glad you’ve come to us.
              </p>
            </div>

            <div>
              {/* Image */}
              <img src={photo} alt="What we offer image" />
            </div>
          </div>

          <div>
            <div className=" space-y-4 ">
              <h2 className="text-[40px] text-black font-semibold">
                Your success is our priority
              </h2>
              <p className=" text-xl ">
                As a non-profit educational organization, GENESIS SCHOOL
                considers your success our priority. Our primary purpose is to
                help you achieve your educational goal, whether it be to earn a
                few course credits or a full high school diploma. With all these
                options available to you, and personalized academic and guidance
                support available when you need it, you’re ideally set-up to
                achieve your goal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10 pt-12">
            <div className=" mt-10">
              <img src={photo1} alt="Photo2" />
            </div>
            <div className=" space-y-6 mt-10 order-2">
              <h2 className=" text-[40px] text-black font-semibold">
                Rwanda high school diploma
              </h2>
              <p className=" text-xl">
                When you complete your high school diploma at Genesis Online
                school, you will earn the credits and credentials needed to
                pursue your higher education and career goals. We make it easy
                to achieve all the requirements, including the the literacy and
                community involvement requirements that apply to you. Whatever
                your goals, the Rwanda Secondary School Diploma (OSSD) can help
                you achieve them.
              </p>

              <div>
                <Link
                  to="#"
                  className=" px-8 py-1 bg-green-600 rounded-full text-xl text-white text-center "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10 mt-32 ">
            <div className=" flex flex-col space-y-6">
                <h3 className=" text-[40px] text-black font-semibold ">Individual courses</h3>
                <p className=" text-xl ">By taking new courses or upgrading your high school marks through Genesis Online School, you can fulfill post-secondary admission requirements, advance your career, upgrade your skills, achieve a personal goal, or simply learn something new. From STEM to business studies and the arts, we offer 100+ courses across a range of subjects in both English and French.</p>
                <div>
                    <Link className=" px-4 py-1 bg-green-600 rounded-full text-xl text-white text-center ">Exprol courses</Link>
                </div>
            </div>
            <div className=" px-6 py-2 rounded-md ">
                <img src={photo2} alt=""  />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10 mt-36">
            <div>
              <img src={photo3} alt="Photo2" />
            </div>
            <div className=" space-y-6 mt-10 order-2">
              <h2 className=" text-[40px] text-black font-semibold">
                Rwanda Technical Board (RTB)
              </h2>
              <p className=" text-xl">
                When you complete your high school diploma at Genesis Online
                school, you will earn the credits and credentials needed to
                pursue your higher education and career goals. We make it easy
                to achieve all the requirements, including the the literacy and
                community involvement requirements that apply to you. Whatever
                your goals, the Rwanda Secondary School Diploma (RSSD) can help
                you achieve them.
              </p>

              <div>
                <Link
                  to="#"
                  className=" px-8 py-1 bg-green-600 rounded-full text-xl text-white text-center "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10 mt-36">
            <div>
              <img src={photo4} alt="Photo2" />
            </div>
            <div className=" mt-10 space-y-6 flex flex-col items-center order-2">
              <h2 className=" text-[40px] text-black font-semibold">
               Have more questions about how Genesis Online School serves you?
              </h2>

              <div className=" flex justify-start items-start ">
                <Link className=" px-6 py-2 bg-green-600 rounded-full text-xl text-center text-white ">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default WhatOffer;
