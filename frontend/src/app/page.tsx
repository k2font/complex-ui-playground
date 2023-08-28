"use client"
import { Clip } from '../stories/Clip'
import './index.css'

export default function Home() {
  return (
    <main>
      <div className="flex-container">
        <Clip
          name="clip1"
          video="/test1.mp4"
        />
        <Clip
          name="clip2"
          video="/test2.mp4"
        />
        <Clip
          name="clip3"
          video="/test3.mp4"
        />
        <Clip
          name="clip4"
          video="/test4.mp4"
        />
        <Clip
          name="clip5"
          video="/test5.mp4"
        />
        <Clip
          name="clip6"
          video="/test6.mp4"
        />
        <Clip
          name="clip7"
          video="/test7.mp4"
        />
        <Clip
          name="clip8"
          video="/test8.mp4"
        />
      </div>
    </main>
  )
}
