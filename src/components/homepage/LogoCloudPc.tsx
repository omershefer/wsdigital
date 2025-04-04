import { useNavigate } from "react-router-dom";

const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    name: "mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

interface LogoCloudProps {
  version: number;
}

// Split logos into two sets based on version
const getVersionLogos = (version: number) => {
  if (version === 1) {
    return logos.slice(0, Math.ceil(logos.length / 2));
  } else {
    return logos.slice(Math.ceil(logos.length / 2));
  }
};

const LogoCloud = ({ version }: LogoCloudProps) => {
  const versionLogos = getVersionLogos(version);

  return (
    <>
      <div
        className="relative flex gap-6 overflow-hidden p-2 w-full justify-center items-center"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div
              key={`v${version}-${index}`}
              className="flex shrink-0 flex-row justify-around gap-6"
            >
              {versionLogos.map((logo, key) => (
                <img
                  key={key}
                  src={logo.url}
                  className="h-10 w-28 px-2 brightness-0 invert"
                  alt={`${logo.name}`}
                />
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

const LogoCloudContainer = () => {
  return (
    <>
      <div
        className={`h-full w-full flex flex-col justify-center items-center transition-all duration-300`}
      >
        <div className="">
          <LogoCloud version={2} />
          <LogoCloud version={1} />
        </div>
      </div>
    </>
  );
};

const LogoCloudPc = () => {
  const navigate = useNavigate();

  return (
    <div className="mr-auto ml-auto mt-auto mb-auto group relative flex flex-col justify-center items-center max-w-[60vw] transition">
      <div className="flex flex-1 items-center justify-center w-full">
        <LogoCloudContainer />
      </div>

      {/* Fading overlay with gradient */}
      <div className="absolute flex justify-center items-center z-20 w-full lg:w-[120%] lg:h-[200%] bg-gradient-to-b from-[#2C3537]/0 via-transparent duration-300 to-[#2C3537]/0 backdrop-blur-md transition-opacity opacity-0 group-hover:opacity-100">
        <a
          onClick={() => navigate("/catalog")}
          className="text-[#adadad] underline"
        >
          לצפייה בכל השותפים שלנו
        </a>
      </div>
    </div>
  );
};

export default LogoCloudPc;
