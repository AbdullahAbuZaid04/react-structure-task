export default function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  const buttonStyles = {
    primary:
      "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",
    secondary:
      "bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition",
    danger:
      "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${buttonStyles[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
