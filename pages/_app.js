import '../styles/globals.css'
import GlobalWrapper from '../components/GlobalWrapper'
import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return <AuthContextProvider>
      <GlobalWrapper><Component {...pageProps} /></GlobalWrapper>
  </AuthContextProvider>
}

export default MyApp
