interface Props {
  className?: string;
  size?: number;
}
const CheckIcon = ({ className, size = 24 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 40 41"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.111"
      d="m8.334 19.945 7.778 7.778 15.555-15.556"
    ></path>
  </svg>
);

export default CheckIcon;
