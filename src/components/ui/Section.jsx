export default function Section({ children, className = '', id, dark = false }) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${dark ? 'bg-[#F5EFE7]' : 'bg-[#FAF8F5]'} ${className}`}>
      {children}
    </section>
  )
}
