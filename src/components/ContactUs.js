import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}! We'll get back to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex justify-center py-10 px-6 pt-27">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Customer Support</h1>
          <p className="text-gray-600 mb-6">
            Email:{" "}
            <a
              href="mailto:support@swiggy.in"
              className="text-blue-500 hover:underline"
            >
              support@hotn'hot.in
            </a>
          </p>

          <h2 className="text-xl font-semibold mb-3">Find us on</h2>
          <div className="flex gap-4 mb-6 text-blue-500 text-2xl">
            {/* Dummy social media icons with emojis */}
            <span>🔗</span>
            <span>📸</span>
            <span>👍</span>
            <span>📌</span>
            <span>✖️</span>
          </div>

          <h2 className="text-xl font-semibold mb-3">Corporate Office</h2>
          <p className="text-gray-600 mb-6">
            No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy TechVillage,
            Outer Ring Road, Devarbisnahalli, Bengaluru 560 103, Karnataka,
            India. <br />
            Corporate Identity Number: L74110KA2013PLC096530 <br />
            Registration Number: 096530
          </p>

          <button className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Get Directions
          </button>
        </div>

        {/* Right Section (Form) */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-gray-50 p-6 rounded-lg shadow-inner"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By contacting us you agree to the{" "}
            <span className="text-blue-500 font-medium cursor-pointer">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-500 font-medium cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

