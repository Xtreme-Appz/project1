import '../public/styles/globals.css'
import { Provider } from 'next-auth/client'
import Header from '../components/Header'
import SideNavigation from '../components/SideNavigation'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <div className="dark:bg-green-900 min-h-screen text-white">
        <Header />
        <SideNavigation />
        <main className="container mx-auto px-6">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  )
}

export default MyApp