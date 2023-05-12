import React from 'react'
import { Form } from '../components'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client';
import { SignUp } from '../graphql';
import { useAuth } from '../hooks/useAuth';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inputs = [
  {
    type:"text",
    label:"Name",
    error:<p className="text-red-600 text-xs font-bold mt-2">This field is required*</p>,
  },
  {
    type:"email",
    label:"Email",
    error:<p className="text-red-600 text-xs font-bold mt-2">This field is required*</p>,
  },
  {
    type:"password",
    label:"Password",
    error:<p className="text-red-600 text-xs font-bold mt-2">This field is required*</p>,
  }
];

const notify = (type,text) => {
  if(type === "success"){
    toast.success(text);
  }else{
    toast.error(text);
  }
};

const SignUpForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const SIGN_UP = gql`${SignUp}`;
  const [ sign_up, { loading:isLoading } ] = useMutation(SIGN_UP,
    {
      onCompleted: (data) => {
        if(data.sign_up === "Error"){
          notify("error","ups! algo salio mal al crear tu cuenta");
        }else{
          notify("success","Tu cuenta ha sido creada correctamente!");
          navigate("/login")
        }
      },
    }
  )

  return (
    !user ?
      <div className='w-full h-full flex justify-center items-center'>
        <div className="w-[50%] h-[70%]">
          <Form 
            inputs={inputs} 
            onSubmit={((data) => sign_up({
              variables:{
                user:{
                  name:data.Name,
                  email:data.Email,
                  password:data.Password
                }
              }
            }))}
            buttonText='Sign up'
            isLoading={isLoading}
          />        
          <div className='flex justify-center mt-10'>
            <p className='text-white text-md'>
              {"Do you already have an account? "}  
              <Link 
                to={"/login"}
                className='text-green-500 font-bold'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div> :
      <Navigate to="/"/>
  )
}

export default SignUpForm
