import { ContentItem } from '../components/ContentCard';
import MerchMateImage2 from '../images/history.jpg';
import MerchMateImage3 from '../images/input.jpg';
import MerchMateImage1 from '../images/landing.jpg';
import MerchMateImage4 from '../images/result.jpg';

export const works: ContentItem[] = [
    {
        id: 1,
        title: "Book Finder",
        description: "A web application to search and discover books. Built with React and modern web technologies.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
        ],
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
        images: [
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
        ],
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
    {
        id: 3,
        title: "MerchMate - Professional FOB Costing Calculator",
        description: "A comprehensive FOB (Free on Board) costing calculator for the garment manufacturing industry. Calculate accurate costs for T-Shirts, Shirts, Jeans with detailed fabric consumption and profit margin analysis.",
        image: MerchMateImage1,
        images: [
            MerchMateImage1,
            MerchMateImage2,
            MerchMateImage3,
            MerchMateImage4
        ],
        sections: [
            {
                title: "Multi-Garment Support",
                description: "Supports multiple garment types including T-Shirts (Knit), Woven Shirts, and Denim Jeans. Each garment type has specialized calculations based on fabric consumption, dimensions, and manufacturing requirements.",
                image: "/src/images/input.jpg"
            },
            {
                title: "Real-Time Cost Calculations",
                description: "Instantly calculates FOB prices with comprehensive cost breakdowns including fabric costs, accessories, CM costs, washing, commercial, and testing expenses. Features adjustable profit margins with live FOB updates.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
            },
            {
                title: "Advanced Features",
                description: "Includes calculation history storage, universal sharing capabilities, configurable wastage allowances, and custom fabric allowances for precise pattern cutting. Built with AsyncStorage for local data persistence.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Professional Interface",
                description: "Clean, intuitive design with a professional landing page, easy-to-read cost breakdowns, and quick access to saved calculations. Built with React Native and Expo for cross-platform compatibility.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
            },
            {
                title: "Technical Implementation",
                description: "Developed using React Native with Expo framework, React Navigation for seamless navigation, and complex calculation formulas for accurate fabric consumption. Supports Android 6.0+ and iOS 13.0+.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
            }
        ],
        category: "Mobile App",
        link: "https://www.linkedin.com/posts/activity-7410773504008204288-oCa7?utm_source=share&utm_medium=member_android&rcm=ACoAADED-aMB8NNHatajjLlEjbKXTA9C5_tsLAM"
    },
    {
        id: 4,
        title: "Lab Dip & Shade Intelligence",
        description: "A production-ready Electron desktop application for Bangladesh textile dyeing labs. Digitizes lab dip recipe management, tracks shade quality with ΔE measurements, and reduces approval cycles by replacing Excel-based workflows with an intelligent offline system.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092918484-8313e1f3f5e5?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&h=600&fit=crop"
        ],
        sections: [
            {
                title: "Lab Dip Recipe Management",
                description: "Digital recipe versioning system with locking mechanisms and comprehensive history tracking. Replaces error-prone Excel sheets with a structured database approach, ensuring recipe consistency and auditability across the production lifecycle.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
            },
            {
                title: "ΔE Tracking & Shade Evaluation",
                description: "Objective colorimetric measurement tracking using industry-standard ΔE values. Tracks shade quality across multiple iterations, enabling data-driven decisions for dye recipe adjustments and buyer approval workflows.",
                image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&h=600&fit=crop"
            },
            {
                title: "Shade Correction Intelligence",
                description: "Rule-based correction suggestion system that analyzes historical data and current measurements to recommend optimal dye adjustments. Reduces trial-and-error iterations and accelerates shade matching for lab technicians.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
            },
            {
                title: "Approval Workflow & Analytics",
                description: "Complete buyer approval process tracking with audit trails and historical success probability analysis. Provides data-driven risk assessment for approval likelihood based on past performance, helping prioritize critical orders.",
                image: "https://images.unsplash.com/photo-1581092918484-8313e1f3f5e5?w=800&h=600&fit=crop"
            },
            {
                title: "Enterprise-Grade Technical Stack",
                description: "Built with Electron 28 for cross-platform desktop deployment, React 18 + TypeScript for robust UI, SQLite for local data with PostgreSQL support for enterprise. Features role-based access control (Admin, R&D Manager, QA, Lab Technician), bcrypt encryption, and PDF/Excel export capabilities using PDFKit and XLSX libraries.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
            },
            {
                title: "Offline-First Architecture",
                description: "Fully functional without network connectivity, designed for factory-floor use in Bangladesh textile laboratories. Local encrypted password storage, complete database schema with 15+ tables, and comprehensive audit logging ensure data integrity and security.",
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&h=600&fit=crop"
            }
        ],
        category: "Desktop App",
        link: "https://github.com/abdnoman001/Lab-dip---Shade-Intelligence"
    },
];
