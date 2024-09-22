const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-[100px]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-4xl font-semibold mb-6 text-blue-400">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg">
              We strive to create innovative solutions that make a positive
              impact on the world, pushing the boundaries of what&apos;s
              possible.
            </p>
          </div>
          <div className="bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-4xl font-semibold mb-6 text-purple-400">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg">
              To be at the forefront of technological innovation, creating
              solutions that shape the future and improve lives globally.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Our Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Person 1",
                role: "Lead",
                photo: "/assets/jane-doe.jpg",
              },
              {
                name: "Person 2",
                role: "Co-Lead",

                photo: "/assets/john-smith.jpg",
              },
              {
                name: "Person 3",
                role: "Website Head",
                photo: "/assets/emily-johnson.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2 text-green-400 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
