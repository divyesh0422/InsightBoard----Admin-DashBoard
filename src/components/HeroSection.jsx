import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-blue-500 uppercase text-sm font-medium mb-2">A social media for learners</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Connect & <br /> learn from the experts
          </h1>
          <p className="text-gray-600 mb-6">
            Grow your career fast with the right mentor.
          </p>

          <div className="flex items-center gap-4 mb-2">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
              Join for free
            </button>
            <p className="text-sm text-gray-600">
              Already joined us? <a href="#" className="text-blue-600 underline">Log in</a>
            </p>
          </div>
        </div>

        {/* Right Images and Stats */}
        <div className="relative w-full max-w-lg">
          {/* User Photos */}
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full overflow-hidden bg-yellow-300">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="mentor1" className="object-cover w-full h-full" />
          </div>

          <div className="absolute top-20 right-0 w-20 h-20 rounded-full overflow-hidden bg-purple-300">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="mentor2" className="object-cover w-full h-full" />
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-2xl overflow-hidden bg-blue-500">
            <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="mentor3" className="object-cover w-full h-full" />
          </div>

          {/* Stats */}
          <div className="absolute top-24 left-24 bg-black text-white rounded-full px-6 py-4 text-center shadow-md">
            <p className="text-sm">Active Professionals</p>
            <h3 className="text-xl font-bold">13,422</h3>
          </div>

          <div className="absolute bottom-0 right-0 bg-green-200 text-black rounded-xl px-5 py-3 text-center shadow-md">
            <p className="text-sm">Online Courses</p>
            <h3 className="text-xl font-bold">2,582</h3>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-20 w-6 h-6 bg-red-400 rounded-full" />
          <div className="absolute bottom-8 left-10 w-12 h-12 bg-yellow-300 rounded-br-full" />
          <div className="absolute top-1/2 right-1/2 rotate-45 w-5 h-5 border-t-2 border-r-2 border-black" />
        </div>
      </div>

      {/* Trusted Logos */}
      <div className="mt-20 text-center">
        <p className="text-gray-500 mb-4">Trusted by world class creators</p>
        <div className="flex justify-center items-center gap-10 flex-wrap grayscale">
          <img src="https://via.placeholder.com/100x40?text=AUTOSPEED" alt="logo" />
          <img src="https://via.placeholder.com/100x40?text=BeautyBox" alt="logo" />
          <img src="https://via.placeholder.com/100x40?text=Pete's+Blinds" alt="logo" />
          <img src="https://via.placeholder.com/100x40?text=Cadets" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
