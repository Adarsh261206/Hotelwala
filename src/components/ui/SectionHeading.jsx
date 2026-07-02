export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed" style={align === 'center' ? {} : { marginLeft: 0 }}>
          {subtitle}
        </p>
      )}
      <div className={`flex items-center gap-2 mt-5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-primary/40" />
        <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
        <span className="h-px w-8 bg-primary/40" />
      </div>
    </div>
  )
}
