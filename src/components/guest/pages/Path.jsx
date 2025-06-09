import pathImg from '../../../assets/images/tvo2.webp'
import { Link } from 'react-router-dom';

const Path = () => {
  return (
    <div className=" bg-white w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-4 items-center px-6">
        <div>
           <h1 className=" text-center text-[40px] font-bold text-black">Choose the path that gets you <br /> where you want to go</h1>
        </div>

        <div>
            <p className=" text-center text-[20px]">
                As Rwanda’s largest online high school, we’re here <br />
                 to help you achieve the goals you want for your education, your career and your life.
            </p>
        </div>

        <div className=" mt-4 grid grid-cols-1 justify-center lg:grid-cols-2 md:grid-cols-1 gap-10">
            <div className=' flex justify-center'>
                <img src={pathImg} alt="Path image" />
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-1 mt-2 lg:gap-2 md:grid-cols-1 xl:grid-cols-1 gap-2 '>
                <div>
                    <h2 className='text-2xl text-black font-semibold'>Earn my Rwanda high school diploma</h2>
                    <p className=' text-xl mt-1'>Earn the <Link to="#" className=' text-green-500 underline '>credits and credentials</Link> you need to pursue higher education and career goals.</p>
                </div>
                <div>
                    <h2 className=' text-2xl text-black font-semibold '>Prepare for university/college admissions or career accreditation</h2>
                    <p className='text-xl mt-1'>Take courses to complete prerequisites or upgrade high school marks to achieve post-secondary admission or career requirements.</p>
                </div>
                <div>
                    <h2 className='text-2xl text-black font-semibold'>Develop personally and professionally</h2>
                    <p className="text-xl mt-1">
                        Follow your own path: gain the skills employers want, prepare for a career change, or pursue a passion.
                    </p>
                </div>
                <div className='mt-4'>

                    <Link className=' bg-green-600 py-2 px-8 text-white text-center rounded-full '>Exprol your Options</Link>

                </div>
            </div>
        </div>
          
      </div>
    </div>
  );
};

export default Path;
