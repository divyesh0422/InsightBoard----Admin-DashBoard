 const Button = ({ onClick, children, variant = "primary", size = "medium" }) => {
  const baseStyles = "py-2 px-4 font-semibold rounded-lg transition duration-300";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
