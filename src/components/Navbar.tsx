import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ui/theme-context';

const links = [
    { to: '/about', label: 'Profile' },
    { to: '/works', label: 'Works' },
    { to: '/renders', label: '3D Renders' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            className="icon-button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
        >
            {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
        </button>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        [
            'rounded-md px-3 py-2 text-sm font-extrabold transition-colors duration-200',
            'text-[var(--ink-muted)] hover:bg-[var(--panel-muted)] hover:text-[var(--ink-strong)]',
            isActive ? 'bg-[var(--ink-strong)] text-[var(--primary-foreground)] hover:bg-[var(--ink-strong)] hover:text-[var(--primary-foreground)]' : '',
        ].join(' ');

    return (
        <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4" aria-label="Primary navigation">
            <div
                className={[
                    'mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-lg border px-3 py-2 transition-all duration-200 sm:px-4',
                    scrolled
                        ? 'border-[var(--line-strong)] bg-[var(--panel)] shadow-[var(--shadow-soft)] backdrop-blur-2xl'
                        : 'border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_86%,transparent)] backdrop-blur-xl',
                ].join(' ')}
            >
                <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--ink-strong)] text-sm font-black text-[var(--primary-foreground)]">
                        AN
                    </span>
                    <span className="hidden text-sm font-black uppercase text-[var(--ink-strong)] sm:block">
                        Abdullah Noman
                    </span>
                </NavLink>

                <div className="hidden items-center gap-1 rounded-lg border border-[var(--line)] bg-[var(--panel-solid)] p-1 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} className={navLinkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="icon-button"
                            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-[var(--line)] bg-[var(--panel-solid)] p-2 shadow-[var(--shadow)] backdrop-blur-xl md:hidden">
                    <div className="grid gap-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={navLinkClass}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
