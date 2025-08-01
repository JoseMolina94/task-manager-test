'use client'

import { useState } from 'react'
import TaskCard from '@/components/TaskCard'
import TaskForm from '@/components/TaskForm'
import Modal from '@/components/Commons/Modal'
import { PlusIcon } from '@/components/Icons'
import { Task } from '@/types/Task'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: tasks, error, isLoading } = useSWR<Task[]>('/api/tasks', fetcher)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    error ? (
      <div className="max-w-xl mx-auto py-10 px-4">
        <h1 className="page-title">
          Lista de Tareas
        </h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error al cargar las tareas. Por favor, intenta de nuevo.
        </div>
      </div>
    ) : (
      <div className="max-w-xl mx-auto py-10 px-4">
        <div className="flex items-center border-b justify-between pb-4 mb-6">
          <h1 className="page-title">
            Lista de Tareas
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
            aria-label="Crear nueva tarea"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        <div>
          {
            isLoading
              ? (
                <div className="flex justify-center">
                  <p className="text-gray-600">Loading...</p>
                </div>
              ) : tasks && tasks.length > 0
                ? (
                  <div className="space-y-2">
                    {tasks.map((task: Task, index: number) => (
                      <TaskCard
                        key={`task-item-${index}`}
                        task={task}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center">
                    No hay tareas creadas aún.
                  </p>
                )
          }
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Crear Nueva Tarea"
          width="md"
        >
          <TaskForm onSuccess={handleCloseModal} />
        </Modal>
      </div>
    )
  )
}