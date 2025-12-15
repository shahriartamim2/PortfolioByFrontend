import { ContentItem } from '../components/ContentCard';

export const works: ContentItem[] = [
    {
        id: 1,
        title: "Book Finder",
        description: "A web application to search and discover books. Built with React and modern web technologies.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
        sections: [
            {
                title: "Search Functionality",
                description: "Users can easily search for books by title, author, or ISBN. The search results are displayed instantly with relevant book covers and details.",
                image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
            },
            {
                title: "Book Details",
                description: "Clicking on a book reveals comprehensive information including the synopsis, publication date, page count, and user ratings.",
                image: "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?w=800&h=600&fit=crop"
            },
            {
                title: "Responsive Design",
                description: "The application is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.",
                image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop"
            },
            {
                title: "User Interface",
                description: "A clean and intuitive user interface designed to make book discovery effortless and enjoyable.",
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop"
            },
            {
                title: "Performance",
                description: "Optimized for speed and performance, providing quick load times and smooth interactions.",
                image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop"
            }
        ],
        category: "Web App",
        link: "https://ebd-finder.vercel.app/"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and blog posts. Designed with a modern aesthetic.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
        sections: [
            {
                title: "Modern Design",
                description: "Featuring a sleek, dark-themed design with glassmorphism effects and smooth animations.",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
            },
            {
                title: "Responsive Layout",
                description: "Built with Tailwind CSS to ensure the site looks great on all screen sizes.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
            },
            {
                title: "Dynamic Content",
                description: "Includes a dynamic blog and works section to easily showcase new content.",
                image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop"
            }
        ],
        category: "Website"
    },
];
