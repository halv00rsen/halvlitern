interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  size?: "small" | "medium" | "large";
  color?: "green" | "red" | "gray";
  className?: string;
}

export const Button = ({
  children,
  className = "",
  color = "gray",
  size = "medium",
  ...props
}: Props) => {
  return (
    <button
      className={`
      ${
        color === "gray"
          ? "bg-gray-300 hover:bg-gray-400 active:bg-gray-500 focus:ring-gray-600 focus:ring-opacity-50"
          : color === "red"
          ? "bg-red-300 hover:bg-red-400 active:bg-red-500 focus:ring-red-600 focus:ring-opacity-50"
          : color === "green"
          ? "bg-green-300 hover:bg-green-400 active:bg-green-500 focus:ring-green-600 focus:ring-opacity-50"
          : ""
      }
      ${
        props.disabled
          ? "opacity-50 cursor-not-allowed pointer-events-none"
          : ""
      }
      focus:outline-none
      focus:ring-2
      transition duration-150 ease-in-out
      ${
        size === "small"
          ? "text-sm py-2 px-4 rounded"
          : size === "medium"
          ? "text-base py-3 px-6 rounded-lg"
          : "text-lg py-4 px-8 rounded-xl"
      }
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
