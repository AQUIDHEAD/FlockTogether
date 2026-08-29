/**
 * A single player that has joined the lobby. The id is used for kicking and
 * lets each chip stay unique even when two players share a name.
 */
export type LobbyPlayer = {
  id: string
  name: string
}

export type LobbyProps = {
  /** Which role is viewing the lobby — drives layout differences. */
  view: 'host' | 'player'
  /** The room code shown at the top of both views (e.g. `016525`). */
  roomCode?: string
  /** The roster of players currently sitting in the lobby. */
  players?: LobbyPlayer[]
  /**
   * Fired when the host presses the `Start Game` button. Left undefined in the
   * player view; wiring is added once real game flow lands.
   */
  onStartGame?: () => void
  /** Fired with the player id when the host taps a chip's red kick button. */
  onKickPlayer?: (id: string) => void
}

// Placeholder roster so the lobby renders meaningfully before room logic exists.
const DEFAULT_PLAYERS: LobbyPlayer[] = [
  { id: 'p1', name: 'Ada' },
  { id: 'p2', name: 'Bao' },
  { id: 'p3', name: 'Chidi' },
  { id: 'p4', name: 'Daphne' },
  { id: 'p5', name: 'Eli' },
]

/** Big, readable room code card pinned to the top of both views. */
function RoomCode({ code }: { code: string }) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl border-4 border-peat bg-white px-8 py-5 shadow-[6px_6px_0_0_#0e1d25]">
      <span className="font-label text-xs font-bold uppercase tracking-[0.22em] text-peat/70">
        Room Code
      </span>
      <span className="font-display text-5xl font-extrabold tracking-[0.18em] text-peat">{code}</span>
    </div>
  )
}

/** Roster summary pill shown under the code. */
function RosterSummary({ count }: { count: number }) {
  return (
    <span className="rounded-pill inline-flex items-center gap-2 rounded-full border-2 border-peat bg-[#bce5fe] px-4 py-1 font-label text-xs font-bold uppercase tracking-[0.12em] text-peat">
      <span className="h-2 w-2 rounded-full bg-lilypad" aria-hidden="true" />
      {count} Player{count === 1 ? '' : 's'} Joined
    </span>
  )
}
/**
 * One player chip. In the host view a red 'X' appears in the top-right corner
 * on hover/focus to kick the player; the player view renders the chip with no
 * kick affordance.
 */
function PlayerCard({
  player,
  canKick,
  onKick,
}: {
  player: LobbyPlayer
  canKick: boolean
  onKick?: (id: string) => void
}) {
  return (
    <div className="group relative flex h-full items-center justify-center rounded-lg border-[3px] border-peat bg-[#bce5fe] px-4 py-3">
      <span className="truncate font-label text-sm font-bold text-peat">{player.name}</span>

      {canKick && (
        <button
          type="button"
          aria-label={`Kick ${player.name}`}
          title={`Kick ${player.name}`}
          onClick={() => onKick?.(player.id)}
          className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-[3px] border-peat bg-[#ba1a1a] text-white opacity-0 shadow-[2px_2px_0_0_#0e1d25] transition-all duration-150 group-hover:opacity-100 hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_0_#0e1d25] focus:opacity-100 active:translate-y-px active:shadow-none"
        >
          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M2 2l8 8M10 2l-8 8" />
          </svg>
        </button>
      )}
    </div>
  )
}
/** Primary CTA rendered only for the host. */
function StartGameButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-sm rounded-xl border-4 border-peat bg-mallard px-8 py-4 font-label text-base font-bold uppercase tracking-[0.08em] text-mallard-deep shadow-[7px_7px_0_0_#0e1d25] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0_0_#0e1d25] active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      Start Game
    </button>
  )
}

/** Non-action placeholder shown to players until the host starts the game. */
function WaitingMessage() {
  return (
    <p className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl border-4 border-peat bg-[#bce5fe]/70 px-6 py-4 font-body text-base font-semibold text-peat/80">
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-lilypad" />
        <span className="h-2 w-2 rounded-full bg-lilypad-light" />
        <span className="h-2 w-2 rounded-full bg-lilypad" />
      </span>
      Waiting for game to start…
    </p>
  )
}

export default function Lobby({
  view,
  roomCode = '------',
  players = DEFAULT_PLAYERS,
  onStartGame,
  onKickPlayer,
}: LobbyProps) {
  const isHost = view === 'host'

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-water to-water-deep font-body text-peat">
      <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-8 px-6 py-16">
        {/* Lobby code pinned at the top of both views */}
        <header className="flex w-full flex-col items-center gap-4">
          <RoomCode code={roomCode} />
          <RosterSummary count={players.length} />
        </header>

        {/* Dynamic grid of player chips that reflows with the player count */}
        <ul
          aria-label="Players in the lobby"
          className="grid w-full grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-4"
        >
          {players.map((player) => (
            <li key={player.id}>
              <PlayerCard player={player} canKick={isHost} onKick={onKickPlayer} />
            </li>
          ))}
        </ul>

        {/* Bottom region differs by role */}
        <div className="flex w-full items-center justify-center">
          {isHost ? <StartGameButton onClick={onStartGame} /> : <WaitingMessage />}
        </div>
      </main>
    </div>
  )
}