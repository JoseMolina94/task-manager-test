import { IconProps } from '@/types/Icon'

export default function ChevronUpIcon({ 
  className = '', 
  size = 24, 
  width, 
  height, 
  ...props 
}: IconProps) {
  return (
    <svg
      width={width || size}
      height={height || size}
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  )
} 