'use client'

import { TASK_COLORS } from '@/types/Task'

interface ColorPickerProps {
  selectedColor?: string
  onColorSelect: (color: string) => void
  title?: string
}

export default function ColorPicker(props: ColorPickerProps) {
  const { 
    selectedColor,
    onColorSelect,
    title = "Color"
  } = props

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="flex flex-wrap gap-2">
        {TASK_COLORS.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onColorSelect(color.value)}
            className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
              selectedColor === color.value
                ? 'border-gray-600 scale-110'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color.value }}
            aria-label={`Seleccionar color ${color.name}`}
          />
        ))}
      </div>
    </div>
  )
} 