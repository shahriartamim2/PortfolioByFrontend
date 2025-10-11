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

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 px-8">
                <div className={`max-w-4xl mx-auto transition-all duration-300 rounded-full ${scrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-black/20 backdrop-blur-md'
                    } border border-white/30`}>
                    <div className="px-8 py-4">
                        <div className="flex items-center justify-center gap-12">
                            <NavLink
                                to="/"
                                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
                            >
                                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                                <span className="relative z-10">Home</span>
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
                            >
                                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                                <span className="relative z-10">Blog</span>
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }: { isActive: boolean }) => `text-white/80 font-medium transition-all duration-300 relative group px-4 py-2 rounded-full ${isActive ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
                            >
                                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                                <span className="relative z-10">Contact</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
