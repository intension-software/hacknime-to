interface ButtonProps {
  children: string

}

function Button({ children }: ButtonProps) {
  return (
    <div className="rounded-full border-4 border-black">
      <button className="bg-red rounded-full text-white py-1.5 px-5 hover:ring-4 hover:ring-red hover:ring-opacity-50">
        {children}
      </button>
    </div>
  )
}

export default Button
