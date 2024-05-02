type Props = { label: string }
export default function Button({ label = 'Registrate' }: Props) {
  return (
    <button className='px-4 py-2 rounded-md bg-white text-black'>
      {label}
    </button>
  )
}
