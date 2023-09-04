import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f460bbd-f4a8-48f6-b31c-9705e8f44d7c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800 text-gray-700">
            Contact
          </p>
          <p className="text-gray-600 pt-4">Submit an inquiry.</p>
        </div>
        <input
          className="bg-gray-100 p-2 placeholder-gray-800 outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-100  placeholder-gray-800 outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-100 placeholder-gray-800 p-2 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-gray-800 border-2 hover:text-gray-800 hover:font-semibold hover:bg-gray-300 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
