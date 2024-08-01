import { createClient } from '@/utils/supabase/client'
import { logout } from '@/app/logout/actions'
import { useRouter } from 'next/navigation'

export default function LogOutButton() {
  return (
    <form>
      <button formAction={logout} className='text-red-500 text-lg'>
        Cerrar sesión
      </button>
    </form>
  )
}
