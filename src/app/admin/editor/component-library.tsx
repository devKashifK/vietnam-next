// ComponentLibrary.js
import React from "react";

const COMPONENTS = [
  { component: "Title", props: { title: "New Title", subtitle: "Subtitle" } },
  {
    component: "CTADefault",
    props: { title: "New CTA", description: "Description here" },
  },
  {
    component: "CTAWithImage",
    props: {
      title: "CTA with Image",
      description: "Description for CTA with Image",
      image: "/path/to/image.jpg",
    },
  },
  { component: "Container", props: { className: "p-4 bg-gray-100" } },
  {
    component: "iframe",
    props: { src: "https://example.com", width: "100%", height: "400px" },
  },
  // HTML elements
  { component: "div", props: { className: "p-4" } },
  {
    component: "p",
    props: { className: "text-base", children: "Sample text" },
  },
  { component: "h1", props: { className: "text-2xl", children: "Heading 1" } },
  { component: "h2", props: { className: "text-xl", children: "Heading 2" } },
  { component: "img", props: { src: "/path/to/image.jpg", alt: "Image" } },
  {
    component: "ul",
    props: {
      children: [{ component: "li", props: { children: "List item 1" } }],
    },
  },
  { component: "li", props: { children: "List item" } },
  // Basic form elements
  { component: "input", props: { type: "text", placeholder: "Enter text" } },
  {
    component: "button",
    props: { children: "Click Me", className: "btn-primary" },
  },
];

export function ComponentLibrary({ onAddComponent }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Component Library</h2>
      <ul>
        {COMPONENTS.map((comp, index) => (
          <li key={index}>
            <button
              onClick={() => onAddComponent(comp)}
              className="w-full p-2 border bg-gray-100 my-1"
            >
              {comp.component}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
