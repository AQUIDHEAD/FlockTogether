Need a lobby for the host and the player

### Lobby

Create a `Lobby.tsx` inside the `src/components/` folder. `Lobby.tsx` is divided into 2 views, the 'host' view and the 'player' view. The host view will display the code at the top. Then there will be a list of player names displayed bellow the code arranged in a grid that will dynamically adjust based on the number of players. From the host view, the players can be kicked when hovering over them with a red 'x' button in the top right corner. Bellow the player list will be a 'start game' button. The 'player' view will be a modified version of the 'host' view. The only changes are that the 'start game' button is removed and the kick functionalit will not appear. Instead of a 'start game' button, a 'waiting for game to start' message will be visible. The functionality will be added in later, the lobby should be prepared for whe its added

Requirement:

- Title of the file `Lobby.tsx` in `src/components/`
- Add host view and player view layout
- Add lobby code display at the top
- Add dynamic grid list of player names
- Add hover red 'X' kick button for host view
- Add `start game` button for host view
- Add `waiting for game to start` message for player view