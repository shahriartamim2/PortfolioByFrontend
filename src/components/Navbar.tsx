import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                to="/about"
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-3 sm:px-4 py-2 text-sm sm:text-base ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">About Me</span>
            </NavLink>
            <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-3 sm:px-4 py-2 text-sm sm:text-base ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">My Works</span>
            </NavLink>

            <NavLink
                to="/blog"
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-3 sm:px-4 py-2 text-sm sm:text-base ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Blog</span>
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-3 sm:px-4 py-2 text-sm sm:text-base ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
            >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Contact</span>
            </NavLink>
        </>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full">
            <div className={`transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-2xl' : 'bg-white/3 backdrop-blur-xl'} border-b border-white/20 shadow-lg shadow-black/10`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-12">
                            {navLinks}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
