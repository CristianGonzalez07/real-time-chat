import { ChatWindow } from '../components';

const Home = () => {
  return (
    <>
      <div className='h-[15%] lg:h-[20%] flex justify-center items-center'>
        <h1 className='text-2xl lg:text-6xl text-white font-bold'> Real Time Chat App</h1>
      </div>
      <div className='h-[85%] lg:h-[80%] flex justify-center'>
        <ChatWindow/>       
      </div>
    </>
  )
}

export default Home
