interface ButtonProps {
  children: string

}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-red rounded-full text-white py-1.5 px-5">
      {children}
    </button>
  )
}

export default Button
