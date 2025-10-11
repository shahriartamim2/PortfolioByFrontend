import React from 'react';

// Main App Layout Component
export default function AppLayout() {
    return (
        <div className="min-h-screen bg-black">
            {/* Left Border */}
            <div className="fixed left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            {/* Right Border */}
            <div className="fixed right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            {/* Main Content Area with Spacing */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                {/* Your app content goes here */}
                <div className="py-20">
                    <h1 className="text-4xl font-bold text-white mb-8">Your App Content</h1>

                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-white mb-3">Section 1</h2>
                            <p className="text-white/70">
                                This is your main content area. The borders on the left and right create a contained feel.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-white mb-3">Section 2</h2>
                            <p className="text-white/70">
                                The spacing is responsive - it adjusts based on screen size for optimal viewing.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-white mb-3">Section 3</h2>
                            <p className="text-white/70">
                                The gradient borders add a subtle, elegant touch to the dark theme.
                            </p>
                        </div>
                    </div>

                    {/* Demo content to show scroll */}
                    <div className="mt-20 space-y-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-8">
                                <h3 className="text-xl font-medium text-white mb-2">Content Block {i}</h3>
                                <p className="text-white/60">
                                    Scroll down to see how the side borders create a nice framed effect throughout your app.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Alternative: If you want this as a reusable wrapper component
export function AppWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-black text-neutral-100 antialiased">
            <div className="relative isolate overflow-hidden">
                {/* Decorative pattern background */}
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="background-pattern"
                            width="200"
                            height="200"
                            x="50%"
                            y="-1"
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#background-pattern)" />
                </svg>

                {/* Main Content Area - Full width on mobile, wrapped on larger screens */}
                <main className="max-w-7xl mx-auto px-0 md:px-16 lg:px-24">
                    {children}
                </main>
            </div>
        </div>
    );
}