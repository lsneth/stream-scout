import React from 'react'

export default function Button({
  onClick = () => {},
  children,
  className = '',
}: {
  onClick?: () => void
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${className} m-1 rounded-lg px-3 py-2 ${!className ? 'bg-accent2' : ''}`}
    >
      {children}
    </button>
  )
}
