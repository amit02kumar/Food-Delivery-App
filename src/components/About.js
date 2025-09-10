import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
import { LOGO_URL } from "../utils/constants";

class About extends React.Component {
  static contextType = UserContext;

  render() {
    const { loggedInUser } = this.context;

    return (
      <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center pt-27">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl p-8">
          {/* Top section with image + intro */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image */}
            <img
              src={LOGO_URL}
              alt="About Us"
              className="w-56 h-56 rounded-lg object-cover shadow-md"
            />

            {/* Text */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">About Us</h1>
              <p className="text-gray-600 mb-4">
                Welcome to our food delivery website! We aim to bring delicious
                meals from your favorite restaurants right to your doorstep with
                speed and convenience. Whether it’s breakfast, lunch, or dinner —
                we’ve got you covered 🍴
              </p>
            </div>
          </div>

          {/* Extra Info Section */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🍕 Our Mission</h3>
              <p className="text-gray-600 text-sm">
                Deliver happiness through food with the fastest and most reliable
                service.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🚀 Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To be the most loved food delivery platform for every foodie in
                India.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">⭐ Our Values</h3>
              <p className="text-gray-600 text-sm">
                Customer-first, transparency, and quality in every delivery.
              </p>
            </div>
          </div>

          {/* Keep your UserClass */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <UserClass name="Amit Kumar Class Component" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
