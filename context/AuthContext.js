import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  inMemoryPersistence,
  setPersistence,
  getAuth

} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {

    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
        
        
      } else {
        setUser(null)
        
      }
      setLoading(false)
    })
    // console.log(user);

    return () => unsubscribe()
  }, [])

  const signup = async (email, password) => {

    try {
      await setPersistence(auth, inMemoryPersistence);
      await createUserWithEmailAndPassword(auth, email, password);

      
    } catch (error) {
        return {
				error: e.message,
			};
    }
    
  }

  const login = async (email, password) => {
    try {
      await setPersistence(auth, inMemoryPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      
    } catch (error) {
      return error;
    }
    
    
  }

  // const logout = async () => {
  //   setUser(null)
  //   await signOut(auth)
  // }

  // function forgotPassword(email) {
  //   return sendPasswordResetEmail(auth, email, {
  //     url: `http://localhost:3000/login`,
  //   })
  // }
  //   function resetPassword(oobCode, newPassword) {
  //   return confirmPasswordReset(auth, oobCode, newPassword)
  // }

  return (
    <AuthContext.Provider value={{  signup }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}