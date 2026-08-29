export default function Button({
  text,
  onClick,
  variant = "primary",
  disabled,
}) {
  const buttonStyles = {
    primary:
      "border border-blue-500 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
    secondary:
      "border border-gray-300 bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed",
  };
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles[variant]} cursor-pointer`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
