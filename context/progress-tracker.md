# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 02 — Lobby

## Current Goal

- Complete the Feature 03 (Lobby) spec: create `src/components/Lobby.tsx` with host and player views.

## Completed

- Main Menu base implementation (title, Host Game / Join Game / How to Play buttons, shore line) per `context/features-spec/01-main-menu.md`.
- Update 1: Added 3 lily pads to the main menu screen using the `LillyPad` component from `src/components/Lilly-pad.tsx`.
- Lobby base implementation per `context/features-spec/03-lobby.md`:
  - `src/components/Lobby.tsx` with a `view: 'host' | 'player'` prop driving both layouts.
  - Room code displayed in a large sticker card at the top of both views.
  - Roster summary pill and a dynamic grid of player name chips (`auto-fill` grid) that reflows with player count.
  - Host view: red 'X' kick button on each chip (revealed on hover/focus) plus a `Start Game` CTA.
  - Player view: kick affordance and start button omitted, replaced with a `Waiting for game to start…` message.
  - Future-proofed via `roomCode`, `players`, `onStartGame`, and `onKickPlayer` props with defaults, so real room logic can be wired in later.

## In Progress

- None.

## Next Up
- TBD

## Open Questions

- None yet.

## Architecture Decisions

- N/A

## Session Notes

- Feature 03 (Lobby) executed as a self-contained reusable component (following the pattern of `LillyPad` in Feature 02); it is not yet wired into `App.tsx`, which still renders `MainMenu`, leaving room flow for a later integration step.
- Followed the Pondside design system: water gradient background, peat sticker borders with hard offsets, mallard-yellow CTA button with squish/lift interaction, and duck-egg blue player chips.