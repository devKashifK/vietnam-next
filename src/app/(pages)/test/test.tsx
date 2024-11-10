// "use client";
// import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import Measure, { withContentRect } from "react-measure";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";

// // Helper function to partition elements based on their width
// const partitionIndexed = (f, arr) => {
//   const match = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!f(arr[i], i)) break;
//     match.push(arr[i]);
//   }
//   return [match, arr.slice(match.length)];
// };

// // HOC for passing dimensions as `bounds` prop
// let withBounds = (Component) =>
//   withContentRect("bounds")(({ measureRef, contentRect, ...props }) => (
//     <div ref={measureRef}>
//       <Component bounds={contentRect.bounds} {...props} />
//     </div>
//   ));

// // OverflowMenu Component
// const OverflowMenu = withBounds(({ bounds, children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [childBounds, setChildBounds] = useState([]);

//   useEffect(() => {
//     const offscreen = document.createElement("div");
//     offscreen.style.position = "absolute";
//     offscreen.style.top = "-99999px";
//     offscreen.style.left = "-99999px";
//     offscreen.style.opacity = 0;
//     document.body.appendChild(offscreen);

//     const root = createRoot(offscreen); // Create a root for the offscreen element
//     root.render(
//       <>
//         {React.Children.map(children, (child, index) => (
//           <Measure
//             bounds
//             onResize={(contentRect) => {
//               childBounds[index] = contentRect.bounds;
//             }}
//           >
//             {({ measureRef }) => <span ref={measureRef}>{child}</span>}
//           </Measure>
//         ))}
//       </>,
//       offscreen
//     );

//     return () => {
//       document.body.removeChild(offscreen);
//     };
//   }, [bounds.width, children]);

//   // Split children into what fits and what's in overflow
//   let overFlowButtonWidth = 30;
//   let sum = 0;
//   let [fit, overflow] = partitionIndexed((_, i) => {
//     sum += childBounds[i]?.width || 0;
//     return sum <= bounds.width - overFlowButtonWidth;
//   }, children);

//   return (
//     <div>
//       {fit}
//       {overflow.length > 0 && (
//         <span onClick={() => setIsOpen(!isOpen)}>
//           <i className="material-icons" style={{ fontSize: 20 }}>
//             more_vert
//           </i>
//         </span>
//       )}
//       <Popover open={isOpen} onOpenChange={() => setIsOpen(true)}>
//         <PopoverContent>
//           <div className="flex flex-col">
//             {overflow}
//             <Button onClick={() => setIsOpen(false)}>Close</Button>
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// });

// export default OverflowMenu;

import React, { useState, useEffect, useRef } from "react";

const FlexibleMenu = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [overflowItems, setOverflowItems] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const updateMenu = () => {
      if (!menuRef.current) return;

      const containerWidth = menuRef.current.offsetWidth;
      let totalWidth = 0;
      const newVisibleItems = [];
      const newOverflowItems = [];

      items.forEach((item) => {
        const itemWidth = 100; // Adjust width as needed or calculate dynamically
        totalWidth += itemWidth;

        if (totalWidth <= containerWidth) {
          newVisibleItems.push(item);
        } else {
          newOverflowItems.push(item);
        }
      });

      setVisibleItems(newVisibleItems);
      setOverflowItems(newOverflowItems);
    };

    updateMenu();
    window.addEventListener("resize", updateMenu);
    return () => window.removeEventListener("resize", updateMenu);
  }, [items]);

  return (
    <div ref={menuRef} className="flex items-center gap-2">
      {visibleItems.map((item, index) => (
        <button key={index} className="px-4 py-2 bg-gray-200 rounded-md">
          {item}
        </button>
      ))}

      {overflowItems.length > 0 && (
        <div className="relative">
          <button className="px-4 py-2 bg-gray-300 rounded-md">More</button>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
            {overflowItems.map((item, index) => (
              <button
                key={index}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexibleMenu;
