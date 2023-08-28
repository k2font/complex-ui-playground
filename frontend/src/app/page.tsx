"use client"
import { Header } from '../stories/Header'
import { Clip } from '../stories/Clip'

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
      <Clip
        name="clip1"
        video="/test1.mp4"
      />
    </main>
  )
}
