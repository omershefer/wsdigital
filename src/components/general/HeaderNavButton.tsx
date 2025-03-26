interface HeaderNavButtonProps {
  label: string;
  onClick?: () => void;
}

export default function HeaderNavButton({
  label,
  onClick,
}: HeaderNavButtonProps) {
  return (
    <div>
      <button
        className="flex flex-row items-center font-primary px-0.5 lg:px-2 whitespace-nowrap hover:text-gray-300 active:opacity-70"
        aria-label={`ניווט ל ${label}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
