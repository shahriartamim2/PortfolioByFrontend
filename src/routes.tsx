import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const MyWorks = lazy(() => import('./pages/MyWorks'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ThreeD = lazy(() => import('./pages/ThreeD'))
const Render = lazy(() => import('./pages/Render'))

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/works" element={<MyWorks />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogId" element={<BlogDetail />} />
                <Route path="/works/:workId" element={<WorkDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/renders" element={<ThreeD />} />
                <Route path="/render/:renderId" element={<Render />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
