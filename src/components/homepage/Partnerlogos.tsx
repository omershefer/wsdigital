import React, { useState, useEffect } from "react";

// Define types for props and logo objects
interface Logo {
  src: string;
  alt?: string;
}

interface RowData {
  logos: Logo[];
  offset: number;
  speed: number;
}

interface PartnerLogoSlideshowProps {
  logos: Logo[];
  speed?: number;
  rowCount?: number;
  logoSize?: string;
}

// Helper function to calculate opacity for fade in/out effect
function calculateOpacity(
  position: number,
  index: number,
  total: number
): number {
  // Position of this logo in the overall flow (normalized from 0 to 1)
  const relativePos = index / total - (position % 1);

  // Fade in/out zones (as percentage of the total width)
  const fadeZone = 0.1;

  if (relativePos < 0 || relativePos > 1) {
    return 0; // Outside visible area
  } else if (relativePos < fadeZone) {
    return relativePos / fadeZone; // Fade in from left
  } else if (relativePos > 1 - fadeZone) {
    return (1 - relativePos) / fadeZone; // Fade out to right
  }

  return 1; // Fully visible
}

const PartnerLogoSlideshow: React.FC<PartnerLogoSlideshowProps> = ({
  logos = [],
  speed = 20, // Lower = faster
  rowCount = 3,
  logoSize = "w-24 h-24",
}) => {
  const [position, setPosition] = useState<number>(0);

  // Calculate how many logos to show per row (distribute evenly)
  const getRowLogos = (rowIndex: number): Logo[] => {
    const logosPerRow = Math.ceil(logos.length / rowCount);
    const start = rowIndex * logosPerRow;
    return logos.slice(start, start + logosPerRow);
  };

  // Create staggered rows of logos
  const rows: RowData[] = Array.from({ length: rowCount }, (_, index) => ({
    logos: getRowLogos(index),
    offset: Math.random() * 100, // Random offset for scattering effect
    speed: speed + (Math.random() * 10 - 5), // Slight speed variation
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 50); // Animation refresh rate

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">שותפים שלנו</h2>
      <div className="relative w-full">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center mb-8 relative"
            style={{
              right: `${(position / row.speed) % 200}%`,
              transform: `translateX(${row.offset}px)`,
            }}
          >
            {/* First set of logos */}
            {row.logos.map((logo, index) => (
              <div
                key={`logo-${rowIndex}-${index}`}
                className={`mx-12 transform transition-opacity duration-1000 flex-shrink-0 ${logoSize} flex items-center justify-center`}
                style={{
                  opacity: calculateOpacity(
                    position / row.speed,
                    index,
                    row.logos.length
                  ),
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt || "Partner Logo"}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}

            {/* Duplicate logos for infinite scrolling */}
            {row.logos.map((logo, index) => (
              <div
                key={`logo-dup-${rowIndex}-${index}`}
                className={`mx-12 transform transition-opacity duration-1000 flex-shrink-0 ${logoSize} flex items-center justify-center`}
                style={{
                  opacity: calculateOpacity(
                    position / row.speed,
                    index + row.logos.length,
                    row.logos.length * 2
                  ),
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt || "Partner Logo"}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogoSlideshow;
