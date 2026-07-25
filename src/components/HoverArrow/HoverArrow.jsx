import { motion } from "framer-motion";

const HoverArrow = ({ className = "" }) => {
  return (
    <div
      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#F9452D] shadow-xl ${className}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HoverArrow;
