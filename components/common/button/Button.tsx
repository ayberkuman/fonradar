import { ReactNode } from "react";

type IButton = {
  children: ReactNode;
  handleClick?: (e) => void;
  isPositive?: boolean;
};

export const Button = ({ handleClick, isPositive, children }: IButton) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        isPositive
          ? "bg-green-black-bg px-4 py-2 mx-2 rounded-md hover:bg-green text-white text-title-20-auto-medium transition-all"
          : "bg-accent-red px-4 py-2 mx-2 rounded-md hover:bg-accent-red/50 text-white text-title-20-auto-medium transition-all"
      }`}
    >
      {children}
    </button>
  );
};
