import { ArrowUpRight } from 'lucide-react';
import type { KeyboardEvent } from 'react';

export interface ContentSection {
    title?: string;
    description: string;
    image: string;
}

export interface ContentItem {
    id: number;
    title: string;
    description: string;
    date?: string;
    image: string;
    images?: string[];
    sections?: ContentSection[];
    category: string;
    link?: string;
}

interface ContentCardProps {
    item: ContentItem;
    onClick: (item: ContentItem) => void;
    showDate?: boolean;
    actionLabel?: string;
}

export default function ContentCard({
    item,
    onClick,
    showDate = true,
    actionLabel = 'Read more',
}: ContentCardProps) {
    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick(item);
        }
    };

    return (
        <article
            role="button"
            tabIndex={0}
            onClick={() => onClick(item)}
            onKeyDown={handleKeyDown}
            className="surface-card group flex h-full cursor-pointer flex-col overflow-hidden focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
        >
            <div className="relative aspect-video overflow-hidden border-b border-[var(--line)] bg-[var(--panel-muted)]">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                />
                <span className="soft-label absolute right-3 top-3 bg-[var(--panel-solid)]">
                    {item.category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
                {showDate && item.date && (
                    <time className="mono-note mb-2 block" dateTime={item.date}>
                        {item.date}
                    </time>
                )}
                <h2 className="mb-2 text-lg font-bold leading-snug text-[var(--ink-strong)]">
                    {item.title}
                </h2>
                <p className="section-copy line-clamp-3 min-h-[3.5rem] text-sm">
                    {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm font-semibold text-[var(--ink-muted)] transition-colors group-hover:text-[var(--ink-strong)]">
                    <span>{actionLabel}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
            </div>
        </article>
    );
}
