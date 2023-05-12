import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import Spinner from './Spinner';

const ChatInput = ({onSubmit, isLoading}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form 
      className='h-[10%] w-full p-3 lg:py-5 flex' 
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        id="chatInput" 
        type="text" 
        className='h-full w-[90%] rounded-lg border-2 bg-transparent border-green-500 p-3 text-white font-bold'
        {...register("message")}
      />
      <button 
        type="submit" 
        className={`text-white bg-green-500 ${isLoading ? "opacity-50": ""} rounded-lg p-3 ml-1 text-sm lg:text-lg font-bold flex items-center`}
        disabled={isLoading}  
      >
        {isLoading && <Spinner/>}
        Enviar
      </button>
    </form>
  )
}

ChatInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,

};

export default ChatInput
