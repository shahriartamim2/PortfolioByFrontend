import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = (
        <>
            <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Home</span>
            </NavLink>
            <NavLink
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Blog</span>
            </NavLink>
            <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Contact</span>
            </NavLink>
        </>
    );

    return (
        <>
            <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-8">
                <div className={`max-w-4xl mx-auto transition-all duration-300 rounded-2xl sm:rounded-full ${scrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-black/20 backdrop-blur-md'
                    } border border-white/30`}>
                    <div className="px-4 sm:px-8 py-3 sm:py-4">
                        <div className="flex items-center justify-between sm:justify-center">
                            {/* Desktop Nav */}
                            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
                                {navLinks}
                            </div>

                            {/* Mobile Nav Toggler */}
                            <div className="sm:hidden flex items-center justify-between w-full">
                                <NavLink to="/" className="text-lg font-bold text-white">MyPortfolio</NavLink>
                                <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50">
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="sm:hidden pb-4 px-4">
                            <div className="flex flex-col items-center gap-4">
                                {navLinks}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
