# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Bundler / Env | Vite | Fast development server and optimized production bundling |
| Framework | React + TypeScript | Client-side component model, state management, and view layer |
| UI | Tailwind CSS | Utility-first styling and responsive game interface |
| Real-time Messaging | Ably Pub/Sub (`@ably/react`) | Serverless WebSocket message broker for real-time host/player sync |
| State / Network | React Hooks + Context | Global game state, Ably channel bindings, and role-based state management |
| Matching Engine | `fast-levenshtein` / Custom Utility | Client-side Tier 1 normalization & Tier 2 string edit-distance clustering |
| Animations / FX | `canvas-confetti` / Framer Motion | Visual celebration effects and card transitions for reveal/scoring stages |

## System Boundaries

- `src/components/host` — Core host dashboard workspace handling lobby creation, real-time timer countdowns, automated answer clustering, manual override controls, and scoreboard reveals.
- `src/components/player` — Responsive mobile interface for room code entry, player name entry, answer submission forms, and round status display.
- `src/components/shared` — Reusable UI components including timer badges, answer cards, player avatar chips, and confirmation dialogs.
- `src/hooks` — Custom hooks (`useAblyRoom`, `useGameState`, `usePresence`) for pub/sub channel messaging, room state updates, and tracking player connectivity.
- `src/context` — Shared global state (`GameContext`) managing active role (Host vs. Player), current room code, player profile, and local channel state.
- `src/utils` — String processing and similarity algorithms (`normalization.ts`, `similarity.ts`) for cleaning, comparing, and grouping player answers.

## Text Matching and Clustering Model

The application processes incoming player text answers using a multi-tiered pipeline executed locally on the host client:

1. **Tier 1 Normalization**: Trims leading/trailing whitespace, converts text to lowercase, strips punctuation/symbols, and collapses consecutive spaces (e.g., `"  Pepperoni!"` → `"pepperoni"`).
2. **Tier 2 Levenshtein Distance Matching**: Calculates edit-distance similarity ratios between normalized strings. Pairs with similarity scores meeting or exceeding the configurable threshold (e.g., ratio $\ge 0.85$) are consolidated into the same canonical group.
3. **Canonical Group Selection**: The earliest submitted or most frequent answer in a cluster is designated as the primary display text for that group.
4. **Host Manual Override Interface**: Renders candidate clusters on the host screen as interactive UI cards. The host can drag-and-drop or click to split incorrectly grouped answers or merge distinct categories prior to finalizing round scores.

## Real-Time Synchronization and Room Lifecycle

- **Room Code Engine**: The host client generates a unique 6-character room code (e.g., `016525`), creating and subscribing to the Ably channel namespace `room-016525`.
- **Presence Pipeline**: Players join rooms via mobile browsers, registering their presence on the channel. The host listens to `presence.enter` and `presence.leave` events to update the active player roster instantly.
- **Serverless Host State Authority**: The host browser acts as the single authoritative game server, maintaining timer counts, score totals, round state, and processing submission queues.
- **Broadcast Pipeline**: Game phase transitions (`LOBBY` → `QUESTION` → `REVEAL` → `SCORES`) and finalized clusters are published by the host to all subscribed mobile clients over Ably channels.

## Score Calculation and Game Rules

- **Flock Majority Scoring**: Answers grouped into the largest cluster (the "Flock") score 1 point each.
- **Goose Penalty**: Players who submit a unique answer (an isolated group of 1), players who hold the minority answer when there are 3 groups or more or fail to submit in time receive the "Goose" penalty indicator, preventing score gains until passed to another player.
- **Victory Condition**: The game tracks cumulative player scores across rounds until a target threshold (e.g., 8 points) is reached by a player who does not hold the Goose.

## Invariants

1. The host client remains the sole source of truth for timer countdowns, answer clustering decisions, and cumulative player scores.
2. Automated string-similarity groupings must never commit directly to scores without providing the host an opportunity for manual override review.
3. Network disconnections or mobile screen sleeps must not wipe player data; reconnecting using the same room code and player ID restores active session state seamlessly.
4. Payload sizes over Ably channels must be kept minimal, sending light state diffs and action events rather than entire application trees to conserve bandwidth and minimize latency.