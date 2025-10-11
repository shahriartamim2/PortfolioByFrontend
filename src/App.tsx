
import './App.css'
import AppRoutes from './routes'
// pages are lazy-loaded via src/routes.tsx
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <main>
            <AppRoutes />
          </main>
      </ThemeProvider>


    </>
  )
}

export default App
