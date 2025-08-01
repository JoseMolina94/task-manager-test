export interface Task {
  id: number
  name: string
  description: string | null
  color?: string
}

export const TASK_COLORS = [
  { name: 'white', value: '#ffffff', bg: 'bg-white', border: 'border-gray-200' },
  { name: 'light-green', value: '#dcfce7', bg: 'bg-green-50', border: 'border-green-200' },
  { name: 'light-blue', value: '#dbeafe', bg: 'bg-blue-50', border: 'border-blue-200' },
  { name: 'light-yellow', value: '#fef3c7', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  { name: 'light-purple', value: '#f3e8ff', bg: 'bg-purple-50', border: 'border-purple-200' },
  { name: 'light-pink', value: '#fce7f3', bg: 'bg-pink-50', border: 'border-pink-200' },
  { name: 'light-orange', value: '#fed7aa', bg: 'bg-orange-50', border: 'border-orange-200' },
  { name: 'light-gray', value: '#f9fafb', bg: 'bg-gray-50', border: 'border-gray-200' },
] as const