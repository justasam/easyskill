import { createContext } from 'react'

type AuthContextType = {
  signIn?: (data: any) => Promise<void>
  signOut?: () => void
}

const AuthContext = createContext<AuthContextType>({})

export default AuthContext
