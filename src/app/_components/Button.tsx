import React from 'react'

export default function Button({
  onClick = () => {},
  children,
  className = '',
  type = 'button',
}: {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${className} m-1 rounded-lg px-3 py-2 ${!className ? 'bg-accent2' : ''}`}
      type={type}
    >
      {children}
    </button>
  )
}
