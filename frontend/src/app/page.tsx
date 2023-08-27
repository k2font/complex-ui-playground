import Image from 'next/image'
import { Header } from '../stories/Header'

export default function Home() {
  return (
    <main>
      <Header
        user={{name: "shoichiro"}}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <h1>complex-ui-playground</h1>
    </main>
  )
}
