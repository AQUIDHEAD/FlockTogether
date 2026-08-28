type LillyPadProps = {
  /** Tailwind classes used to size/position the pad (e.g. `w-40 h-40`). */
  className?: string
  /**
   * Size in px of the hard "sticker" offset shown bottom-right of the pad,
   * matching the Level 1 (Lily Pads/Cards) elevation in `design.md`.
   */
  offset?: number
}

// A lily pad shaped like a pizza with a slice taken out.
// Drawn from the top-right rim point, around the lower arc of the circle, back
// to the top-left rim point, then along the two cut edges into the centre.
const PAD_PATH = 'M170 33.4 A100 100 0 1 1 70 33.4 L120 120 Z'

export default function LillyPad({ className, offset = 6 }: LillyPadProps) {
  const lift = Math.max(0, offset)

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {/* Hard Neutral offset behind the pad (thick "sticker" lift) */}
      <path d={PAD_PATH} fill="var(--color-peat)" transform={`translate(${lift} ${lift})`} />

      {/* The pad itself: Lily Pad Green fill with a thick Peat border */}
      <path
        d={PAD_PATH}
        fill="var(--color-lilypad)"
        stroke="var(--color-peat)"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Subtle inner vein so the pad reads as a lily pad */}
      <ellipse
        cx="120"
        cy="138"
        rx="52"
        ry="36"
        fill="var(--color-lilypad-light)"
        transform="rotate(-8 120 138)"
      />
    </svg>
  )
}