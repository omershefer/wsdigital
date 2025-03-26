import logo from "../../images/logo-black.png";
import HeaderNavButton from "./HeaderNavButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { label: "בית", onClick: () => navigate("/wsdigital") },
    { label: "עלינו", onClick: () => navigate("/wsdigital/aboutus") },
    { label: "עבודות", onClick: () => navigate("/wsdigital/catalog") },
    { label: "מחירים", onClick: () => navigate("/wsdigital/pricing") },
  ];

  return (
    <div className="flex flex-row items-center justify-between bg-[#439775] px-2 lg:px-5 w-[95vw] lg:w-[90vw] max-w-[98vw] min-h-[6vh] rounded-xl mt-3 drop-shadow-[3.55px_3.55px_22.2px_rgba(0,0,0,0.2)] backdrop-blur-[9px]">
      <img
        src={logo}
        className="min-h-5 max-h-7"
        alt="לוגו"
      />
      <nav className="flex flex-row items-center justify-center space-x-3 lg:space-x-8">
        {navItems.map(({ label, onClick }) => (
          <HeaderNavButton key={label} label={label} onClick={onClick} />
        ))}
      </nav>
    </div>
  );
}
