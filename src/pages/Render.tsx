import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { splatsData, Splat } from '../data/splatsData';

declare global {
  interface Window {
    SuperSplat?: any;
  }
}

const Render: React.FC = () => {
  const { renderId } = useParams<{ renderId: string }>();
  const splat = splatsData.find((item) => item.id === renderId);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!splat) {
      setError('Splat not found');
      setIsLoading(false);
      return;
    }

    setError(null);
    setIsLoading(false);
  }, [splat]);

  return (
    <div className="w-full h-screen flex flex-col bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold text-white">3D Render Viewer</h1>
        <div className="w-24" />
      </div>

      {/* Viewer Container */}
      <div className="flex-1 relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
            <div className="text-center">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
              <p className="text-white mt-4">Loading 3D render...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
            <div className="text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        )}

        {!splat && !isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
            <p className="text-white">Splat not found.</p>
          </div>
        )}

        {splat && (
          <div className="w-full h-full">
            <iframe
              title={splat.title}
              src={splat.url}
              className="w-full h-full border-0"
              allow="fullscreen; xr-spatial-tracking"
            />
          </div>
        )}
      </div>

      {/* Controls Info */}
      <div className="bg-slate-800 border-t border-slate-700 p-4 text-sm text-slate-300">
        <p>🖱️ Drag to rotate • Scroll to zoom • Right-click to pan</p>
      </div>
    </div>
  );
};

export default Render;