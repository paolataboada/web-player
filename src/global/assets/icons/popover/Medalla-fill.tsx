import { useId } from "react";

interface MedallaFillProps {
  className?: string;
  startColor?: string;
  endColor?: string;
}

export const MedallaFill = ({
  className = "w-12 h-12",
  startColor = "primary-500",
  endColor = "primary-700",
}: MedallaFillProps) => {
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
      <path
        d="M22.4401 18.6457H25.5586L26.5222 15.6795L23.9991 13.8467L21.476 15.6795L22.4401 18.6457Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M22.6678 11.5216V8.6185C20.1673 9.04055 18.0581 10.6262 16.9181 12.7975L19.6776 13.6954L22.6678 11.5216Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M16.0929 15.3298C15.7288 17.8041 16.5335 20.2923 18.2924 22.0877L19.996 19.7416L18.8535 16.2272L16.0929 15.3298Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        d="M31.0812 12.797C29.9412 10.6257 27.8319 9.04004 25.3314 8.61799V11.5211L28.3217 13.6923L31.0812 12.797Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        d="M41.3165 7.17491C39.1129 7.17491 37.3206 5.38158 37.3206 3.17799V1.84619H10.6796V3.17799C10.6796 5.38158 8.88679 7.17491 6.68371 7.17491H5.35192C5.06064 15.6729 5.88884 23.6293 9.82064 31.1523H38.1812C42.114 23.6272 42.9406 15.6729 42.6494 7.17491H41.3165ZM24.0001 27.1554C18.1242 27.1554 13.3437 22.3749 13.3437 16.4985C13.8796 2.38055 34.1227 2.38517 34.6565 16.4985C34.6565 22.3749 29.876 27.1554 24.0001 27.1554Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        d="M28.0042 19.7421L29.7073 22.0882C31.4642 20.2929 32.2714 17.8067 31.9068 15.3303L29.1468 16.2282L28.0042 19.7421Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        d="M22.1519 21.3088L20.4473 23.6549C22.6811 24.7698 25.3196 24.7698 27.5545 23.6549L25.8499 21.3088H22.1519Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <path
        d="M22.6683 46.1539V33.8154H11.2924C14.1678 38.5985 18.0145 42.8144 22.6683 46.1539Z"
        fill={`url(#paint7_linear_${id})`}
      />
      <path
        d="M25.3314 46.1539C29.9858 42.8144 33.8319 38.5985 36.7073 33.8154H25.3314V46.1539Z"
        fill={`url(#paint8_linear_${id})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint7_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <linearGradient
          id={`paint8_linear_${id}`}
          x1="15.8186"
          y1="3.51638"
          x2="40.6406"
          y2="46.7914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
      </defs>
    </svg>
  );
};