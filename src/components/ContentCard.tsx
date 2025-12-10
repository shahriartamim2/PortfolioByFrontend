import React from 'react';

export interface ContentItem {
    id: number;
    title: string;
    description: string;
    date?: string;
    image: string;
    category: string;
    link?: string; // Optional link for external works
}

interface ContentCardProps {
    item: ContentItem;
    onClick: (item: ContentItem) => void;
    showDate?: boolean;
    actionLabel?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
    item,
    onClick,
    showDate = true,
    actionLabel = "Read more"
}) => {
    return (
        <article
            onClick={() => onClick(item)}
            className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-98 transform"
        >
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-black/60 backdrop-blur-sm text-white/90 text-xs rounded-full border border-white/20">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
                {showDate && item.date && (
                    <time className="text-xs sm:text-sm text-white/40">{item.date}</time>
                )}
                <h2 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 sm:mb-3 group-hover:text-white/90 transition-colors leading-snug line-clamp-2">
                    {item.title}
                </h2>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.description}
                </p>

                <div className="mt-3 sm:mt-4 flex items-center text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="text-xs sm:text-sm font-medium">{actionLabel}</span>
                    <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </article>
    );
};

export default ContentCard;
