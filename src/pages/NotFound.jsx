import SEO from '../components/ui/SEO'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <h1 className="text-8xl font-heading font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-muted mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
        Return Home
      </Link>
    </main>
  )
}
