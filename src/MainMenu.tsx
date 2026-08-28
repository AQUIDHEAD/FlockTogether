import type { ReactNode } from 'react'

function ShoreLine() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 z-30 h-36 w-full overflow-hidden">
      {/* Grass lip along the top */}
      <div className="absolute inset-x-0 top-0 h-8 border-b-4 border-peat bg-grass" />
      {/* Sandy beach */}
      <div className="absolute inset-x-0 top-8 bottom-0 border-b-4 border-peat bg-sand" />
      {/* Wavy edge where the water meets the shore */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-16 w-full text-sand"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          stroke="#0e1d25"
          strokeWidth="5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          d="M0,22 C80,46 170,4 260,22 C350,42 450,6 560,20 C660,38 760,8 870,20 C980,40 1080,4 1190,22 C1300,44 1380,14 1440,24 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  )
}

type MenuButtonProps = {
  children: ReactNode
  bgClass?: string
}

function MenuButton({ children, bgClass = 'bg-mallard text-mallard-deep' }: MenuButtonProps) {
  return (
    <button
      type="button"
      className={`${bgClass} w-full rounded-lg border-4 border-peat px-8 py-4 font-label text-sm font-bold uppercase tracking-[0.08em] shadow-[4px_4px_0_0_#0e1d25] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0_0_#0e1d25] active:translate-x-1 active:translate-y-1 active:shadow-none`}
    >
      {children}
    </button>
  )
}

export default function MainMenu() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-water to-water-deep font-body text-peat">
      <ShoreLine />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-8 px-6 pb-16 pt-44 text-center">
        <h1 className="rotate-[1deg] font-display text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-6xl">
          Flock
          <span className="block">Together</span>
        </h1>

        <p className="max-w-xs font-body text-lg font-medium text-peat/80">
          A pondside game of making your friends&apos; answers flock together.
        </p>

        <div className="flex w-64 flex-col gap-4 sm:w-72">
          <MenuButton>Host Game</MenuButton>
          <MenuButton bgClass="bg-lilypad text-white">Join Game</MenuButton>
          <MenuButton bgClass="bg-ivory text-peat">How to Play</MenuButton>
        </div>
      </main>
    </div>
  )
}