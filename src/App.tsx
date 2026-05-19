
import './App.css'
import AppRoutes from './routes'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="app-shell">
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
