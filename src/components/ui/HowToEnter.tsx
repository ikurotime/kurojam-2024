const STEPS = [
  {
    title: 'Regístrate',
    description: 'Regístrate para poder enviar tu proyecto.'
  },
  {
    title: 'Crea tu equipo',
    description:
      'Puedes participar solo o en equipo hasta de 4 personas. (Puede haber excepciones)'
  },
  {
    title: 'Desarrolla tu proyecto',
    description:
      'Demuestra tus habilidades y creatividad y haz un proyecto de acorde a la temática.'
  },
  {
    title: 'Envía tu proyecto',
    description:
      'Envía tu proyecto y entrega el github a través de esta página.'
  }
]

export default function HowToEnter() {
  return (
    <div
      id='como-participar'
      className='flex flex-col w-full justify-center text-center max-w-6xl m-auto gap-5 p-20'
    >
      <span className='text-6xl'>Cómo participar</span>
      <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 text-left'>
        {STEPS.map((step, index) => (
          <div
            key={step.description}
            className={`flex flex-col${
              index % 2 === 0 ? ' bg-zinc-800 ' : ' bg-orange-600 '
            } rounded p-12 text-2xl`}
          >
            <span>{`#${index + 1}: ${step.title}`}</span>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
