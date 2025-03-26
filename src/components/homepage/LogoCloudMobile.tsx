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
];

const LogoCloudMobile = () => {
    const navigate = useNavigate();
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 h-full p-4"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo.url}
              className="h-10 w-28 px-2 brightness-0 invert"
              alt={logo.name}
            />
          </div>
        ))}
      </div>
      <a className="text-white underline" onClick={() => navigate("/aboutus")}>לצפייה בכל השותפים שלנו</a>
    </>
  );
};

export default LogoCloudMobile;
