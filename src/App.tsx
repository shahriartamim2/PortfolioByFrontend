
import './App.css'
import AppRoutes from './routes'
// pages are lazy-loaded via src/routes.tsx
import { AppWrapper } from './components/AppLayout'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ui/theme-provider'

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
