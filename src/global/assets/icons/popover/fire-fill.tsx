import { useId } from "react";

interface FireFillProps {
  className?: string;
  startColor?: string;
  endColor?: string;
}

export const FireFill = ({
  className = "w-12 h-12",
  startColor = "primary-500",
  endColor = "primary-700",
}: FireFillProps) => {
  const id = useId();
  
  const getColorVar = (colorName: string) => {
    if (colorName.startsWith('#') || colorName.startsWith('var(')) {
      return colorName;
    }
    return `var(--color-${colorName})`;
  };

  const start = getColorVar(startColor);
  const end = getColorVar(endColor);

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`fireFillGradient_${id}`}
          x1="24"
          y1="4"
          x2="40.499"
          y2="43.8789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
      </defs>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 4C22.6312 5.78961 18.1073 8.50034 14.2609 12.7906C10.7867 16.6656 8 21.8708 8 28.0007C8 36.8372 15.1634 44.0007 24 44.0007C32.8366 44.0007 40 36.8372 40 28.0007C40 25.2933 39.409 22.7509 38.5561 20.2065C29.9534 19.0374 27.3467 12.057 28 4ZM20 27.3931C20.6109 26.1931 21.3193 25.0538 22.0906 23.9024C23.5965 25.6738 25.2086 27.1926 26.9157 28.7555C28.6088 30.3055 30 31.9391 30 34.0002C30 37.3139 27.3137 40.0002 24 40.0002C20.6863 40.0002 18 37.3139 18 34.0002C18 31.8566 19.0007 29.356 20 27.3931Z"
        fill={`url(#fireFillGradient_${id})`}
      />
    </svg>
  );
};