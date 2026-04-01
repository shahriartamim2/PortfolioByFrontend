import React from 'react';
import { useNavigate } from 'react-router-dom';
import { splatsData, Splat } from '../data/splatsData';

export default function ThreeD() {
  const navigate = useNavigate();
  const splats: Splat[] = splatsData;

  const handleCardClick = (splat: Splat) => {
    navigate(`/render/${splat.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            3D Renders
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore my collection of high-quality 3D renders created with Gaussian Splatting technology
          </p>
        </div>

        {/* Grid of 3D Splats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {splats.map((splat) => (
            <div
              key={splat.id}
              className="group relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(splat)}
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-96 bg-black border border-slate-700 rounded-lg overflow-hidden">
                <img
                  src={splat.thumbnail}
                  alt={splat.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold">View 3D</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 border-t-0 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{splat.title}</h3>
                <p className="text-slate-300 text-sm">{splat.description}</p>
              </div>

              {/* Accent */}
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            These 3D renders are interactive. Use your mouse to rotate, scroll to zoom, and right-click to pan.
          </p>
        </div>
      </div>
    </div>
  );
}


