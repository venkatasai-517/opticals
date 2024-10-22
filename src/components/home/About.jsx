import React, { useState } from "react";
import Swal from "sweetalert2";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dc72e27f-92ec-4ed0-a3a5-57fd61f0a352");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsModalOpen(false); // Close the modal after submission

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "We Will Contact You Soon!",
        icon: "success",
      });
    }
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
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="number"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="w-full border rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="clgname"
                    >
                      School/Collage Name
                    </label>
                    <input
                      type="text"
                      id="clgname"
                      name="clgname"
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full border rounded-md p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                      onClick={() => setIsModalOpen(false)} // Close modal
                    >
                      Cancel
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
