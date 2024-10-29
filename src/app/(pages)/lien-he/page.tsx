import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

const OfficeCard = ({ country, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image
        src={imageUrl}
        alt={`${country} Office`}
        width={400}
        height={300}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{country} Office</div>
        <p className="text-gray-700 text-base">Our office in {country}</p>
      </div>
    </div>
  );
};

const EnhancedContact = () => {
  return (
    <div className="container mx-auto px-4">
      <ContactForm />
      <div className="flex flex-wrap justify-center mt-8">
        <OfficeCard country="India" imageUrl="/images/india-office.jpg" />
        <OfficeCard country="Vietnam" imageUrl="/images/vietnam-office.jpg" />
        <OfficeCard country="Canada" imageUrl="/images/canada-office.jpg" />
      </div>
    </div>
  );
};

export default function page() {
  return <EnhancedContact />;
}
