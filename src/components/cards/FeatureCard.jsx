export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#F5EFE7] flex items-center justify-center mb-5 group-hover:bg-[#B88E5A] transition-colors duration-500">
        {Icon && <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />}
      </div>
      <h3 className="text-xl font-heading text-text mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  )
}
