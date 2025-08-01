import { IconProps } from '@/types/Icon'

export default function CloseIcon({ 
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}