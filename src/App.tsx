
import './App.css'
import AppRoutes from './routes'
// pages are lazy-loaded via src/routes.tsx
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ui/theme-provider'
import { AppWrapper } from './components/AppLayout'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppWrapper>
          <ScrollToTop />
          <Navbar />
          <AppRoutes />
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
