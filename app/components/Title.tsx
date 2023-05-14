interface Props {
  children: React.ReactNode;
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  className?: string;
}

export const Title = ({ children, level = "1", className = "" }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const getTextSize = () => {
    switch (level) {
      case "1":
        return "text-6xl";
      case "2":
        return "text-5xl";
      case "3":
        return "text-4xl";
      case "4":
        return "text-3xl";
      case "5":
        return "text-2xl";
      case "6":
        return "text-1xl";
      default:
        return "text-1xl";
    }
  };

  return (
    <Tag
      className={`font-sans font-bold text-primary ${getTextSize()} ${className}`}
    >
      {children}
    </Tag>
  );
};
