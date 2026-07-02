const variants = {
  default: 'bg-[#F5EFE7] text-text',
  primary: 'bg-primary text-white',
  success: 'bg-[#22C55E] text-white',
  outline: 'border border-border text-muted',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export default function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  return (
    <span className={`inline-block font-body font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
