import './App.css'
import { ChatWindow } from './components'

function App() {

  return (
    <div className='w-full h-screen bg-bg-primary'>
      <div className='h-[20%] flex justify-center items-center'>
        <h1 className='text-6xl text-white font-bold'> Real Time Chat App</h1>
      </div>
      <div className='h-[80%] flex justify-center'>
        <ChatWindow/>       
      </div>
    </div>
  )
}

export default App
