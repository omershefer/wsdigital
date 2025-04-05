import React from "react";

interface ProjectData {
  [key: string]: string | null;
}

interface PortfolioCardProps {
  data?: ProjectData;
  variant?: "imageRight" | "imageLeft";
  loading?: boolean; // Added loading prop
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  data,
  variant,
  loading = false,
}) => {
  // If loading is true, return the skeleton version
  if (loading) {
    return (
      <div className="rounded-2xl w-[90vw] px-5 py-2 mx-auto shadow-md overflow-hidden text-white bg-gray-300">
        <div
          className={`flex flex-col-reverse lg:flex-col ${
            variant === "imageRight"
              ? "lg:md:flex-row"
              : "lg:md:flex-row-reverse"
          }`}
        >
          {/* Image Section Skeleton */}
          <div className="lg:w-1/2 lg:self-end lg:flex lg:flex-1 rounded-2xl">
            <div
              className={`mt-4 lg:mt-0 lg:w-[70%] ${
                variant === "imageRight" ? "lg:ml-auto" : "lg:mr-auto"
              } bg-gray-400 animate-pulse h-64`}
            />
          </div>

          {/* Content Section Skeleton */}
          <div className="lg:md:w-[45%] lg:p-6 lg:flex lg:flex-col lg:justify-between">
            {/* Title Skeleton */}
            <div className="bg-gray-400 animate-pulse h-8 w-3/4 rounded mt-2 mb-1"></div>

            {/* Category Skeleton */}
            <div className="bg-gray-400 animate-pulse h-6 w-1/2 rounded mb-2"></div>

            {/* Description Skeleton */}
            <div className="bg-gray-400 animate-pulse h-24 w-full rounded mt-6 mb-4"></div>

            {/* Link Text Skeleton */}
            <div className="bg-gray-400 animate-pulse h-6 w-3/4 rounded mt-6 mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  // Extract values from the object
  const title = data && data["0"] ? data["0"] : "";
  const category = data && data["1"] ? data["1"] : "";
  const description = data && data["2"] ? data["2"] : "";
  const link = data && data["3"] ? data["3"] : "";
  const imageUrl = data && data["4"] ? data["4"] : "";

  // Return the regular component
  return (
    <div className="rounded-2xl w-[90%] px-5 py-2 mx-auto shadow-md overflow-hidden text-white bg-[#154b2dd6]">
      <div
        className={`flex flex-col-reverse lg:flex-col ${
          variant === "imageRight" ? "lg:md:flex-row" : "lg:md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="lg:w-1/2 lg:self-end lg:flex lg:flex-1">
          {imageUrl ? (
            <a
              className=""
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={imageUrl !== "null" ? imageUrl : ""}
                alt={title}
                className={`mt-4 lg:mt-0 lg:w-[70%] ${
                  variant === "imageRight" ? "lg:ml-auto" : "lg:mr-auto"
                } hover:scale-103 transform transition-all duration-300`}
              />
            </a>
          ) : (
            <div className="lg:w-full lg:h-64 lg:bg-gray-200 lg:flex lg:items-center lg:justify-center">
              <span className="lg:text-gray-500">No image available</span>
            </div>
          )}
        </div>
        {/* Content Section */}
        <div className="lg:md:w-[45%] lg:p-6 lg:flex lg:flex-col lg:justify-between">
          {" "}
          <div>
            <div className=" text-gray-700 col-start-4 col-span-3 row-start-1 row-span-5 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <h2 className="text-3xl mt-2 mb-1 text-[#214f36] ">{title}</h2>
              <p className="text-xl mb-2 text-[#214f36]">{category}</p>
              <p className="text-lg mt-6 mb-4">{description}</p>
              <p className="text-lg mt-6 mb-4">
                לכניסה לאתר הקליקו על התמונה או{" "}
                <a
                  className="text-green-700/70 underline"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  לחצו כאן
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
