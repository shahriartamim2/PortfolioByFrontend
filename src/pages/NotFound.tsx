import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Page not found.</p>
                <Link to="/" className="px-6 py-3 bg-white text-black rounded-full font-medium">Go home</Link>
            </div>
        </div>
    )
}
