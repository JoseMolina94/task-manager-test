'use client'

import { useState, useRef, useEffect } from 'react'
import { Task, TASK_COLORS } from "@/types/Task"
import { ChevronDownIcon, ChevronUpIcon } from '@/components/Icons'

interface TaskCardProps {
  task: Task
}

export default function TaskCard(props: TaskCardProps) {
  const { task } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [task.description])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const colorConfig = TASK_COLORS.find(c => c.value === task.color) || TASK_COLORS[0]

  return (
    <div 
      className={`border rounded-md shadow-sm overflow-hidden ${colorConfig.bg} ${colorConfig.border}`}
    >
      <button
        onClick={toggleExpanded}
        className="w-full cursor-pointer p-3 text-left hover:bg-opacity-80 transition-colors flex items-center justify-between"
      >
        <h3 className="font-bold text-gray-800">
          {task.name}
        </h3>
        {task.description && (
          <div className="flex items-center">
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            )}
          </div>
        )}
      </button>
      
      {task.description && (
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? `${contentHeight}px` : '0px',
            opacity: isExpanded ? 1 : 0
          }}
        >
          <div ref={contentRef} className="px-3 pb-3">
            <p className="text-sm text-gray-700">
              {task.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}