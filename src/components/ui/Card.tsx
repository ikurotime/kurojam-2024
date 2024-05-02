type Props = {
  feature: {
    title: string
    description: string
  }
}
export default function Card({ feature }: Props) {
  return (
    <div className='flex flex-col gap-4 h-80 my-20 box-border p-8 w-80 rounded-md border border-primary-bg bg-neutral-900'>
      <span className='text-2xl font-bold'>{feature.title}</span>
      <span className='text-base'>{feature.description}</span>
    </div>
  )
}
