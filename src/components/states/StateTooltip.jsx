export default function StateTooltip({ state, visible, position }) {
  if (!visible || !state) return null

  return (
    <div
      className="fixed z-50 bg-[#1A1A1A] text-white rounded-xl px-4 py-3 shadow-xl pointer-events-none"
      style={{
        left: position?.x || 0,
        top: (position?.y || 0) - 10,
        transform: 'translate(-50%, -100%)',
        minWidth: '180px',
      }}
    >
      <p className="font-heading text-base font-semibold text-primary">{state.name}</p>
      <p className="text-xs text-white/70 mt-0.5">
        <span className="font-numbers">{state.hotelCount}</span> Premium Hotel{state.hotelCount !== 1 ? 's' : ''}
      </p>
      <p className="text-xs text-white/50 mt-1 leading-relaxed line-clamp-2">{state.description}</p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-[#1A1A1A]" />
    </div>
  )
}
