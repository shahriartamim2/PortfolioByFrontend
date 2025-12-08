import React from 'react';

export function AppWrapper({ children }: { children: React.ReactNode }) {
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
                    
                    {/* Grid overlay */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                {/* Content */}
                <main className="relative w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
