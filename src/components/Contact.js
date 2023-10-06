import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#4a6d88]"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f460bbd-f4a8-48f6-b31c-9705e8f44d7c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#d5d9e0] text-[#d5d9e0]">
            Contact
          </p>
          <p className="text-[#d5d9e0] pt-4">Submit an inquiry.</p>
        </div>
        <input
          className="bg-[#d5d9e0] p-2 placeholder-[#001e38] outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#d5d9e0]  placeholder-[#001e38] outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#d5d9e0] placeholder-[#001e38] p-2 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#001e38] font-semibold border-2 border-[#d5d9e0] bg-[#d5d9e0] hover:text-gray-800 hover:font-semibold hover:bg-gray-300 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
