interface ButtonProps {
  children: string
  onClick?: () => void
  disabled?: boolean
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <div className="rounded-full border-4 border-black w-max">
      <button
        className="bg-red rounded-full text-white py-1.5 px-5 hover:ring-4 hover:ring-red hover:ring-opacity-50 active:bg-black active:ring-red active:text-white"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
