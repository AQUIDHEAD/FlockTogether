import { useState } from 'react'
import MainMenu from './MainMenu'
import Lobby from './components/Lobby'

type Screen = 'menu' | 'host-lobby'

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu')

  if (screen === 'host-lobby') {
    return <Lobby view="host" />
  }

  return <MainMenu onHostGame={() => setScreen('host-lobby')} />
}