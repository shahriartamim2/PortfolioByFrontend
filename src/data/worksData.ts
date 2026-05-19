import { ContentItem } from '../components/ContentCard';
import Merchmate1 from '../images/merchmate/merchmate1.jpeg';
import MerchMate2 from '../images/merchmate/merchmate2.jpeg';
import MerchMate3 from '../images/merchmate/fob1.jpeg';
import MerchMate4 from '../images/merchmate/fob2.jpeg';
import MerchMate5 from '../images/merchmate/fa1.jpeg';
import MerchMate6 from '../images/merchmate/fa2.jpeg';
import MerchMate7 from '../images/merchmate/pdf.png';
import MerchMate8 from '../images/merchmate/excel.png';
import Lab1 from '../images/labdip/lab1.jpeg';
import Lab2 from '../images/labdip/lab2.jpeg';
import excelPoster from "../images/dashboard/excel-poster.webp";
import powerbiPoster from "../images/dashboard/powerbi-poster.webp";

export const works: ContentItem[] = [
    // {
    //     id: 1,
    //     title: "Book Finder",
    //     description: "A web application to search and discover books. Built with React and modern web technologies.",
    //     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
    //     images: [
    //         "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
    //     ],
    //     sections: [
    //         {
    //             title: "Search Functionality",
    //             description: "Users can easily search for books by title, author, or ISBN. The search results are displayed instantly with relevant book covers and details.",
    //             image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "Book Details",
    //             description: "Clicking on a book reveals comprehensive information including the synopsis, publication date, page count, and user ratings.",
    //             image: "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "Responsive Design",
    //             description: "The application is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.",
    //             image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "User Interface",
    //             description: "A clean and intuitive user interface designed to make book discovery effortless and enjoyable.",
    //             image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "Performance",
    //             description: "Optimized for speed and performance, providing quick load times and smooth interactions.",
    //             image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop"
    //         }
    //     ],
    //     category: "Web App",
    //     link: "https://ebd-finder.vercel.app/"
    // },
    // {
    //     id: 2,
    //     title: "Portfolio Website",
    //     description: "A personal portfolio website showcasing my skills, projects, and blog posts. Designed with a modern aesthetic.",
    //     image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
    //     images: [
    //         "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    //     ],
    //     sections: [
    //         {
    //             title: "Modern Design",
    //             description: "Featuring a sleek, dark-themed design with glassmorphism effects and smooth animations.",
    //             image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "Responsive Layout",
    //             description: "Built with Tailwind CSS to ensure the site looks great on all screen sizes.",
    //             image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    //         },
    //         {
    //             title: "Dynamic Content",
    //             description: "Includes a dynamic blog and works section to easily showcase new content.",
    //             image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop"
    //         }
    //     ],
    //     category: "Website"
    // },
    {
        id: 3,
        title: "Excel - Power BI Dashboard",
        description: "A comprehensive dashboard built with Excel and Power BI to visualize key performance indicators (KPIs) and business metrics. The dashboard features interactive charts, data filters, and a modern design to provide actionable insights at a glance.",
        image: powerbiPoster,
        images: [
            powerbiPoster,
            excelPoster
        ],
        sections: [
            {
                title: "Interactive Visualizations",
                description: "The dashboard includes a variety of interactive charts and graphs that allow users to explore data trends and patterns. Users can filter data by date, category, and other dimensions to gain deeper insights.",
                image: powerbiPoster
            },
            {
                title: "Key Performance Indicators",
                description: "Displays critical KPIs in a visually appealing format, making it easy for stakeholders to monitor business performance and make informed decisions.",
                image: excelPoster
            },

        ],
        category: "Dashboard",
    },
    {
        id: 4,
        title: "MerchMate - Professional FOB Costing Calculator",
        description: "A comprehensive FOB (Free on Board) costing calculator for the garment manufacturing industry. Calculate accurate costs for T-Shirts, Shirts, Jeans with detailed fabric consumption and profit margin analysis.",
        image: Merchmate1,
        images: [
            Merchmate1,
            MerchMate2,
            MerchMate3,
            MerchMate4,
            MerchMate5,
            MerchMate6,
            MerchMate7,
            MerchMate8,

        ],
        sections: [
            {
                title: "Multi-Garment Support",
                description: "Supports multiple garment types including T-Shirts (Knit), Woven Shirts, and Denim Jeans. Each garment type has specialized calculations based on fabric consumption, dimensions, and manufacturing requirements.",
                image: ""
            },
            {
                title: "Real-Time Cost Calculations",
                description: "Instantly calculates FOB prices with comprehensive cost breakdowns including fabric costs, accessories, CM costs, washing, commercial, and testing expenses. Features adjustable profit margins with live FOB updates.",
                image: ""
            },
            {
                title: "Advanced Features",
                description: "Includes calculation history storage, universal sharing capabilities, configurable wastage allowances, and custom fabric allowances for precise pattern cutting. Built with AsyncStorage for local data persistence.",
                image: ""
            },
            {
                title: "Professional Interface",
                description: "Clean, intuitive design with a professional landing page, easy-to-read cost breakdowns, and quick access to saved calculations. Built with React Native and Expo for cross-platform compatibility.",
                image: ""
            },
            {
                title: "Technical Implementation",
                description: "Developed using React Native with Expo framework, React Navigation for seamless navigation, and complex calculation formulas for accurate fabric consumption. Supports Android 6.0+ and iOS 13.0+.",
                image: ""
            }
        ],
        category: "Mobile App",
        link: "https://github.com/abdnoman001/Merch-Mate/releases"
    },
    {
        id: 5,
        title: "Lab Dip & Shade Intelligence",
        description: "A production-ready Electron desktop application for Bangladesh textile dyeing labs. Digitizes lab dip recipe management, tracks shade quality with Delta E measurements, and reduces approval cycles by replacing Excel-based workflows with an intelligent offline system.",
        image: Lab1,
        images: [
            Lab1,
            Lab2
        ],
        sections: [
            {
                title: "Lab Dip Recipe Management",
                description: "Digital recipe versioning system with locking mechanisms and comprehensive history tracking. Replaces error-prone Excel sheets with a structured database approach, ensuring recipe consistency and auditability across the production lifecycle.",
                image: ""
            },
            {
                title: "Delta E Tracking & Shade Evaluation",
                description: "Objective colorimetric measurement tracking using industry-standard Delta E values. Tracks shade quality across multiple iterations, enabling data-driven decisions for dye recipe adjustments and buyer approval workflows.",
                image: ""
            },
            {
                title: "Shade Correction Intelligence",
                description: "Rule-based correction suggestion system that analyzes historical data and current measurements to recommend optimal dye adjustments. Reduces trial-and-error iterations and accelerates shade matching for lab technicians.",
                image: ""
            },
            {
                title: "Approval Workflow & Analytics",
                description: "Complete buyer approval process tracking with audit trails and historical success probability analysis. Provides data-driven risk assessment for approval likelihood based on past performance, helping prioritize critical orders.",
                image: ""
            },
            {
                title: "Enterprise-Grade Technical Stack",
                description: "Built with Electron 28 for cross-platform desktop deployment, React 18 + TypeScript for robust UI, SQLite for local data with PostgreSQL support for enterprise. Features role-based access control (Admin, R&D Manager, QA, Lab Technician), bcrypt encryption, and PDF/Excel export capabilities using PDFKit and XLSX libraries.",
                image: ""
            },
            {
                title: "Offline-First Architecture",
                description: "Fully functional without network connectivity, designed for factory-floor use in Bangladesh textile laboratories. Local encrypted password storage, complete database schema with 15+ tables, and comprehensive audit logging ensure data integrity and security.",
                image: ""
            }
        ],
        category: "Desktop App",
        link: "https://github.com/abdnoman001/Lab-dip---Shade-Intelligence"
    },
];
