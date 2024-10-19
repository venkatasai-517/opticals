import React, { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section id="aboutus">
      <div className="grid w-11/12 m-auto mt-4 p md:grid-cols-2 md:gap-4">
        <div>
          <img src="./images/about.jpg" alt="about us" className="w-full" />
        </div>
        <div className="px-4 md:pt-16 lg:pt-32 space-y-4">
          <h2 className="text-xl md:text-4xl text-violet-700 font-bold">
            Expert in Optical Solutions, Eye Care Services, and Marketing
            Solutions
          </h2>
          <p className="text-sm font-semibold text-gray-500">
            Victory Vision specializes in providing comprehensive optical
            solutions, eye care services, stylish eyewear design, and effective
            marketing strategies to enhance your optical business's success.
          </p>
          <button
            onClick={toggleModal}
            className="bg-violet-500 outline-none text-white rounded-3xl px-8 py-3 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-150"
          >
            Contact Us
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  About Us
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="bg-red-500 text-white rounded-md px-4 py-2 mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white rounded-md px-4 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
