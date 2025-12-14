import React, { useState, useEffect } from 'react';

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-neutral-100 antialiased">
            <div className="relative isolate overflow-hidden min-h-screen">
                {/* Modern Background Effects */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-purple-950/20" />

                    {/* Animated boxes */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
                        <div className="absolute -bottom-8 right-0 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
                    </div>

                    {/* Base Grid overlay (Dim) */}
                    <div className="absolute inset-0 opacity-100 sm:opacity-50" style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }} />

                    {/* Spotlight Grid overlay (Bright) */}
                    <div 
                        className="hidden sm:block absolute inset-0 transition-opacity duration-300"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), 
                                            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                            backgroundSize: '30px 30px',
                            maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                            WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                        }} 
                    />
                </div>

                {/* Content */}
                <main className="relative w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
