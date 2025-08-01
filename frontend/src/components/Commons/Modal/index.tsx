'use client'

import { CloseIcon } from '@/components/Icons'
import { ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string
  title?: string
  showCloseButton?: boolean
}

const widthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full mx-4',
}

export default function Modal({
  isOpen,
  onClose,
  children,
  width = 'md',
  title,
  showCloseButton = true,
}: ModalProps) {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return ( isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black opacity-25 transition-opacity"
        onClick={handleBackdropClick}
      />
      
      <div
        className={`relative bg-white rounded-lg shadow-xl w-full mx-4 ${
          typeof width === 'string' && widthClasses[width as keyof typeof widthClasses]
            ? widthClasses[width as keyof typeof widthClasses]
            : width
        }`}
        style={
          typeof width === 'string' && !widthClasses[width as keyof typeof widthClasses] 
          ? { maxWidth: width } 
          : {}
        }
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}

        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  ))
}
