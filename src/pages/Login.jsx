import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Form } from '../components'
import { useLazyQuery, gql } from '@apollo/client';
import { Login } from '../graphql/index'
import { notify } from '../utils/notify';
import { useAuth } from '../hooks/useAuth';

const inputs = [
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



const LoginForm = () => {
  const { user, login } = useAuth();
  const LOGIN = gql`${Login}`;
  const [ loginQuery, { loading } ] = useLazyQuery(LOGIN,{
    onCompleted: (data) => {
      if(data.login === "Error"){
        notify("error","Error al iniciar sesión, revisa tus datos e intenta nuevamente");
      }else{
        notify("success","Sesión iniciada correctamente!");
        login(JSON.parse(data.login))
      }
    }
  });

  return (
    !user ?
      <div className='w-full h-full flex justify-center items-center'>
        <div className="w-[50%] h-[70%]">
          <Form 
            inputs={inputs} 
            onSubmit={((data) => loginQuery({
              variables:{
                user:{
                  email:data.Email,
                  password:data.Password
                }
              }
            }))}
            buttonText='Login'
            isLoading={loading}
          />
          <div className='flex justify-center mt-10'>
            <p className='text-white text-md'>
              {"Don't have account? "}  
              <Link 
                to={"/sign-up"}
                className='text-green-500 font-bold'
              >
                Sign up
              </Link>
              </p>
          </div>
        </div>
      </div>
    : <Navigate to="/"/>
  )
}

export default LoginForm
