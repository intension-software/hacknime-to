interface SphereProps {
  answer: 'green' | 'red' | 'white'
}

function Sphere ({ answer }: SphereProps) {
  return (
    <div className="rounded-full w-3 h-3 bg-`${answer}`"></div>
  )
}

export default Sphere