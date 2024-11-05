// ComponentSelector.js
import React from "react";
import { COMPONENT_TEMPLATES } from "./dynamic-editable-component";

export function ComponentSelector({ onSelect }) {
  const components = Object.keys(COMPONENT_TEMPLATES);

  return (
    <div className="component-selector p-4 border border-gray-300 rounded shadow-lg bg-white">
      <h4 className="font-bold">Select Component</h4>
      <ul className="mt-2">
        {components.map((component) => (
          <li key={component} className="my-1">
            <button
              onClick={() => onSelect(component)}
              className="w-full p-2 text-left border-b border-gray-200 hover:bg-gray-100"
            >
              {component}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
