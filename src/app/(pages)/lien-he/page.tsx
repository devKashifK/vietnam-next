"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="max-w-[80%] mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
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
        className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
      >
        Send Message
      </button>
    </form>
  );
};

const OfficeCard = ({ country, imageUrl, address, phone, email }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-md w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg m-4 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <Image
        src={imageUrl}
        alt={`${country} Office`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-start p-4 text-white z-20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{country} Office</h3>
        <div className="flex justify-start items-start mb-2">
          <MapPin className="mr-2" size={16} />
          <p>{address}</p>
        </div>
        <div className="flex justify-start items-start mb-2">
          <Phone className="mr-2" size={16} />
          <p>{phone}</p>
        </div>
        <div className="flex items-start">
          <Mail className="mr-2" size={16} />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

const EnhancedContact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center mt-8">
        <OfficeCard
          country="Bangladesh"
          imageUrl="/bangladesh-earth-map.jpg"
          address="123 Mumbai Street, Mumbai, India"
          phone="+91 123 456 7890"
          email="india@example.com"
        />
        <OfficeCard
          country="Vietnam"
          imageUrl="/vietnam-map.jpg"
          address="456 Hanoi Road, Hanoi, Vietnam"
          phone="+84 987 654 3210"
          email="vietnam@example.com"
        />
        <OfficeCard
          country="India"
          imageUrl="/India-map.jpg"
          address="789 Toronto Avenue, Toronto, Canada"
          phone="+1 416 123 4567"
          email="canada@example.com"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default function Page() {
  return <EnhancedContact />;
}
