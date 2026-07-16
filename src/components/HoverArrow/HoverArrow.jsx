import { motion } from "framer-motion";

const HoverArrow = ({ className = "" }) => {
  return (
    <div
      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center bg-accent shadow-lg ${className}`}
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white transform transition-transform duration-300 group-hover:rotate-45"
      >
        <path
          d="M4.16669 15.8333L15.8334 4.16663"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66669 4.16663H15.8334V13.3333"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HoverArrow;
