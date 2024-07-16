type Props = { label: string; className?: string }
export default function Button({
  label = 'Inscribirse',
  className = 'bg-[#F64E25] text-white '
}: Props) {
  return (
    <button className={`px-4 py-2 rounded-md text-2xl ${className}`}>
      {label}
    </button>
  )
}
