import logo from "../../images/logo-black.png";

import phoneIcon from "../../images/phone-icon-black.png";
import mailIcon from "../../images/mail-icon-black.png";
import contactIcon from "../../images/contact-icon-black.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();


  const items = [
    {
      id: 1,
      text: "0505774708",
      href: "tel:0505774708",
      whiteIcon: phoneIcon,
    },
    {
      id: 2,
      text: "0524773053",
      href: "tel:0524773053",
      whiteIcon: phoneIcon,
    },
    {
      id: 3,
      text: "wizman.sheffer.digital@gmail.com",
      href: "mailto:wizman.sheffer.digital@gmail.com",
      whiteIcon: mailIcon,
    },
    {
      id: 4,
      text: "טופס יצירת קשר",
      href: "#contact-form",
      whiteIcon: contactIcon,
    },
  ];

  return (
    <div className="flex flex-col h-[50vh] w-[100vw] bg-[#439775] py-8 px-4 font-primary">
      {/* Top Section */}
      <div className="flex flex-row w-full lg:p-3 h-[20%] justify-between items-center">
        <h2 className="text-3xl">ויצמן-שפר דיגיטל.</h2>
        <img src={logo} alt="לוגו" className="h-12" />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col w-full h-[70%]">
        {/* Navigation */}
        <div className="flex flex-1 items-end justify-center text-white">
          <nav>
            <ul className="flex flex-row gap-8 items-center">
              {[
                { label: "בית", onClick: () => navigate("/home") },
                { label: "עלינו", onClick: () => navigate("/aboutus") },
                { label: "קטלוג", onClick: () => navigate("/catalog") },
                { label: "מחירים", onClick: () => navigate("/pricing") },
                {
                  label: "נגישות",
                  onClick: () => navigate("/accessibility"),
                },
              ].map(({ label, onClick }) => (
                <li key={label}>
                  <button
                    className="text-black hover:opacity-80 active:opacity-65"
                    onClick={onClick}
                  >
                    <span className="underline">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact info */}
        <div className="flex flex-1 items-center justify-center text-white">
          <div>
            <ul className="flex flex-1 flex-row gap-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`transition-all duration-300 active:opacity-75 flex flex-row items-center gap-x-1 hover:scale-130`}
                >
                  <a href={item.href} className="h-full w-full">

                  <img src={item.whiteIcon} alt="" className="h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-row w-full p-3 h-[10%] items-center justify-center">
        <div className="text-center py-4 text-black">
          <p className="text-xs">
            © {new Date().getFullYear()} ויצמן שפר דיגיטל. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </div>
  );
}
