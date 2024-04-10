import { SVGProps } from "react";

export function LucideSquareUserRound(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M18 21a6 6 0 0 0-12 0"></path>
        <circle cx="12" cy="11" r="4"></circle>
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
      </g>
    </svg>
  );
}
