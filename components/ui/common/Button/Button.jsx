const Button = ({
  children,
  disabled,
  variant = "purple",
  className,
  ...rest
}) => {
  const variants = {
    purple: "text-white bg-indigo-600 hover:bg-indigo-700",
    red: "text-white bg-red-600 hover:bg-red-700",
  };
  return (
    <button
      disabled={disabled}
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md border px-8 py-3 font-medium leading-[1]  text-base overflow-hidden shadow ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
