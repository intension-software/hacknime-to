interface SphereProps {
  answer: 'green' | 'red' | 'white'
  active: boolean
}

function Sphere ({ answer, active }: SphereProps) {
  return (
    <>
      {active ? <div className={`rounded-full w-5 h-5 bg-${answer} ring-4 ring-${answer} ring-opacity-50`}></div> : <div className={`rounded-full w-4 h-4 bg-${answer}`}></div>}
    </>
  )
}

export default Sphere