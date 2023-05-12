import PropTypes from 'prop-types';
import { useAuth } from '../hooks'

const Content = ({title, InnerContent}) => {
  const {user, logout} = useAuth()
  return (
    <>
      <div className='h-[15%] lg:h-[20%] flex justify-center items-center'>
        <h1 className='text-2xl lg:text-6xl text-white font-bold'>{title}</h1>
      </div>
      {user && <button 
        className='absolute top-0 right-0 text-white bg-green-500 rounded-lg p-3 ml-1 text-sm lg:text-lg font-bold flex items-center m-5'
        onClick={() => logout()} 
      >
        Cerrar Sesión
      </button>}
      <div className='h-[85%] lg:h-[80%] flex justify-center'>
        <div className='bg-bg-secondary w-[90%] lg:w-[70%] h-[90%] rounded-lg shadow-lg'>
          {InnerContent}       
        </div>
      </div>
  
    </>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  InnerContent: PropTypes.element.isRequired,
};


export default Content
