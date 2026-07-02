export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
