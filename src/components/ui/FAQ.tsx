const QUESTIONS = [
  {
    question: '¿Qué es? 🤔',
    answer:
      'KuroJam es un evento de desarrollo, donde los participantes crearán un proyecto basado en una temática elegida por la comunidad.'
  },
  {
    question: '¿Cuándo es? 📅',
    answer: 'Del 5 al 21 de agosto de 2024.'
  },
  {
    question: 'Habrá premios? 🎁',
    answer:
      '¡Sí! Habrá premios para 3 categorías: Mejor General, Mejor Visualmente y Mejor Técnicamente.'
  },
  {
    question: '¿Cuando se deciden los ganadores? 🏆',
    answer: 'El 26 de agosto de 2024.'
  },
  {
    question: '¿Cuánto cuesta? 💰',
    answer: '¡Nada! Es un evento gratuito.'
  },
  {
    question: '¿Cómo puedo ayudar? 🤗',
    answer:
      'Puedes ayudarnos compartiendo el evento en redes sociales. ¡Muchas gracias!'
  }
]
export default function FAQ() {
  return (
    <div
      id='faq'
      className='flex flex-col w-full p-5 text-2xl m-auto justify-center  max-w-5xl gap-5'
    >
      <span className='text-6xl text-center'>PREGUNTAS FRECUENTES</span>
      <div className='flex flex-col gap-5'>
        {QUESTIONS.map((question, index) => (
          <div key={index} className='flex flex-col border p-5'>
            <span>{question.question}</span>
            <span>{question.answer}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
