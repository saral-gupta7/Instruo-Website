import { motion } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams";

const Sponsor = () => {
  // Using placeholder images for now. Replace with actual sponsor logos later.
  const sponsors = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/200x200.png?text=TechCorp",
    },
    {
      name: "InnovateCo",
      logo: "https://via.placeholder.com/200x200.png?text=InnovateCo",
    },
    {
      name: "FutureTech",
      logo: "https://via.placeholder.com/200x200.png?text=FutureTech",
    },
    {
      name: "DataDynamics",
      logo: "https://via.placeholder.com/200x200.png?text=DataDynamics",
    },
    {
      name: "CloudSystems",
      logo: "https://via.placeholder.com/200x200.png?text=CloudSystems",
    },
    {
      name: "AIVentures",
      logo: "https://via.placeholder.com/200x200.png?text=AIVentures",
    },
    {
      name: "RoboInc",
      logo: "https://via.placeholder.com/200x200.png?text=RoboInc",
    },
    {
      name: "CyberShield",
      logo: "https://via.placeholder.com/200x200.png?text=CyberShield",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center text-white bg-black min-h-screen pt-[100px] pb-[50px] overflow-hidden">
      <BackgroundBeams />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Our Sponsors
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-12 max-w-2xl text-center text-gray-300"
      >
        We are grateful for the support of these amazing companies that make
        Instruo 2024 possible.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-6xl">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 flex flex-col items-center justify-center"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="w-32 h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-center">
              {sponsor.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
