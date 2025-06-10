import { MdOutlineEventNote } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { GiFireSpellCast } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExperienceData = [
  {
    id: 1,
    title: "Flexible",
    description:
      "Start any time, according to your own schedule. With no set classes, you can study whenever and wherever you want. You have up to 10 months to complete whichever of our 144 innovative, media-rich courses you choose.",
    icon: <MdOutlineEventNote size={28} />,
    bgcolor: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Affordable",
    description:
      "As a Rwanda resident, you can study with Genesis Online School for just 10,000Rwf. Students already enrolled in a Rwandan high school should speak to their guidance counsellor. Prices may vary.",
    icon: <GrYoga size={28} />,
    bgcolor: "#00bcd4",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Respected",
    description:
      "Since 2023, Genesis Online School has been the distance learning partner of the Rwanda Ministry of Education. We are diploma-granting and recognized by all Canadian Colleges and Universities.",
    icon: <GiFireSpellCast size={28} />,
    bgcolor: "#fa6400",
    delay: 0.6,
  },
];

const Experience = () => {
  return (
    <div className="bg-white w-full py-24" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Experience the Genesis Online School Difference
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ExperienceData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition-all duration-300"
            >
              {/* Icon with background */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: item.bgcolor }}
              >
                <span className="text-white">{item.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        
      </div>

      <div className=" mt-8 flex justify-center items-center ">
            <Link to="#" className=" px-8 py-2 bg-green-600 rounded-full text-center text-white ">Learn More about Genesis online school</Link>
        </div>
    </div>
  );
};

export default Experience;
