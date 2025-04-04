
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component to handle scrolling when hash changes
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle the scrolling
    const scrollToElement = () => {
      // Check if there's a hash in the URL
      if (location.hash) {
        // Remove the '#' character
        const elementId = location.hash.substring(1);

        // Find the element with that ID
        const element = document.getElementById(elementId);

        // If element exists, scroll to it with offset
        if (element) {
          console.log(element);
          // Calculate header height - adjust this value based on your header height
          const headerOffset = 80; // Example: 80px header height

          // Calculate element position
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          // Smooth scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        console.log("no specific subrout")
        // When there's no hash, scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      scrollToElement();
    }, 100  );

    return () => clearTimeout(timeoutId);
  }, [location, location.hash]); // Only re-run when hash changes, not entire location

  return null; // This component doesn't render anything
};

export default ScrollToHashElement;
