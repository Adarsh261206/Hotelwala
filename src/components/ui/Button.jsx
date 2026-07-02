import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-white text-text border border-border hover:bg-bg-secondary',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-muted hover:text-primary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant = 'primary', size = 'md', children, onClick, href, to, type = 'button', className = '', icon: Icon, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{Icon && <Icon className="w-5 h-5" />}{children}</Link>
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{Icon && <Icon className="w-5 h-5" />}{children}</a>
  }

  return <button type={type} onClick={onClick} className={classes} {...props}>{Icon && <Icon className="w-5 h-5" />}{children}</button>
}
