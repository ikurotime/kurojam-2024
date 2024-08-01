type inputProps = {
  name: string
  label: string
  type: string
}
export default function Input({ name, label, type }: inputProps) {
  return (
    <div className='flex flex-col'>
      <label htmlFor='name'>{label}</label>
      <input
        name={name}
        type={type}
        className='px-4 py-2 bg-zinc-700 rounded text-white'
      />
    </div>
  )
}
