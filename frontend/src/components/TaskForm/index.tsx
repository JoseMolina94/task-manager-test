import { useState } from "react"
import { mutate } from "swr"
import ColorPicker from "@/components/ColorPicker"
import { TASK_COLORS, TaskInput } from "@/types/Task"

interface TaskFormProps {
  onSuccess?: () => void
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState<string>(TASK_COLORS[0].value)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim()) {
      alert('Por favor ingresa un nombre para la tarea')
      return
    }

    setIsSubmitting(true)

    const dataToSend: TaskInput = {
      name: name.trim(), 
      description: description.trim() || null,
      color: color
    }
    
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al crear la tarea')
      }

      setName('')
      setDescription('')
      setColor(TASK_COLORS[0].value)
      
      mutate('/api/tasks')
      
      if (onSuccess) {
        onSuccess()
      }
      
    } catch (error) {
      console.error('Error creating task:', error)
      alert(error instanceof Error ? error.message : 'Error al crear la tarea')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Titulo de la tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
        disabled={isSubmitting}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
        rows={3}
        disabled={isSubmitting}
      />
      
      <ColorPicker 
        selectedColor={color}
        onColorSelect={setColor}
        title="Color de la tarea"
      />
      
      <button
        type="submit"
        disabled={isSubmitting || !name.trim()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Creando...' : 'Crear tarea'}
      </button>
    </form>
  )
}