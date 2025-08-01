import { IconProps } from '@/types/Icon'

export default function PlusIcon({ 
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
        d="M12 4v16m8-8H4"
      />
    </svg>
  )
} 