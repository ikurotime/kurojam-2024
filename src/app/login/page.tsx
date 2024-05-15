import { login } from './actions'

export default function Page() {
  return (
    <div className='min-h-dvh flex flex-col w-full items-center justify-center'>
      <form className='p-12 flex flex-col bg-stone-950 max-w-md rounded-md border border-primary-bg'>
        {/* @ts-ignore -- Typing conflict between next and html, needs check*/}
        <button formAction={login} className='text-xl'>
          Login with Github
        </button>
      </form>
    </div>
  )
}
