import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";

const Form = ({inputs, onSubmit, buttonText, isLoading}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Reinicia el formulario después de enviarlo
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {inputs.map((input, index)=> {
        return (
          <div className="my-10" key={`input-${index}`}>
            <label 
              htmlFor={input.label}
              className="block mb-2 text-lg text-white font-bold"
            >
              {input.label}
            </label>
            <input
              id={input.label} 
              type={input.type}
              className="bg-transparent border-b-2 border-green-500 text-white font-bold text-sm block w-full outline-none"
              {...register(input.label, { required: true })}
            />
            {errors[input.label] && input.error}
          </div>
        )
      })}
      <div className="flex justify-center mt-20">
        <button 
          type="submit" 
          className={`text-white bg-green-500 ${isLoading ? "opacity-50": ""} rounded-lg p-3 ml-1 text-sm lg:text-lg font-bold flex items-center`}
          disabled={isLoading}  
        >
          {isLoading && <Spinner/>}
          {buttonText}
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Form;
