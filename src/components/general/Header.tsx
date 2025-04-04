import logo from "../../images/logo-black.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Header() {
  const navigate = useNavigate();
  const navRef = useRef(null);

  const navItems = [
    { label: "בית", onClick: () => navigate("/"), ariaLabel: "נווט לדף הבית" },
    {
      label: "עלינו",
      onClick: () => navigate("/aboutus"),
      ariaLabel: "מידע עלינו",
    },
    {
      label: "עבודות",
      onClick: () => navigate("/catalog"),
      ariaLabel: "צפייה בעבודות",
    },
    {
      label: "מחירים",
      onClick: () => navigate("/pricing"),
      ariaLabel: "מידע על מחירים",
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between bg-[#439775] px-2 lg:px-5 w-[95%] lg:w-[90%] mx-auto max-w-[98vw] min-h-[6vh] rounded-xl mt-3 drop-shadow-[3.55px_3.55px_22.2px_rgba(0,0,0,0.2)] backdrop-blur-[9px]">
      <img src={logo} className="min-h-5 max-h-7" alt="לוגו האתר" />
      <nav
        ref={navRef}
        className="flex flex-row items-center justify-center space-x-3 lg:space-x-8"
        aria-label="ניווט ראשי"
      >
        {navItems.map(({ label, onClick, ariaLabel }) => (
          <button
            tabIndex={0}
            key={label}
            onClick={onClick}
            aria-label={ariaLabel}
            className="px-3 py-2 text-black rounded-md transition-all active:ring-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#439775] hover:bg-[#3a8465]"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
