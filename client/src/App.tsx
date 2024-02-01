import { useState } from 'react'
import './App.css'
import VideoPlayer from './assets/VideoPlayerCom';
import axios from 'axios'
import { motion } from "framer-motion"

function App() {
  const [videoSrc, setVideoSrc] = useState('1706332639955.mp4')
  async function handelSublet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const value: string = (event.target as HTMLFormElement).elements.url.value

      const res = await axios.get(`http://localhost:3000?url=${value}`);
      console.log(res.data);
      setVideoSrc(res.data)


    } catch (error) {
      console.error('Error during request:', error);
    }

  }

  return (
    <>
      <form onSubmit={handelSublet}>
        <input type="text" name="url" className='h-11 pl-2 w-72' id="" />
        <motion.button whileTap={{ scale: 0.9 }}  type='submit' className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        download
        </motion.button >
      </form>
      <div>
        <VideoPlayer videoSrc={videoSrc ? "http://localhost:3000/" + videoSrc : ""} />
      </div>
    </>
  )
}

export default App
