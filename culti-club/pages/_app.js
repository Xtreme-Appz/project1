import '../styles/globals.css'
import { ThemeProvider } from '@radix-ui/react-theme'
import { darkTheme } from '../theme'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp