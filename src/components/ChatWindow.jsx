import { useQuery, useSubscription, useMutation, gql } from '@apollo/client';
import { GetMessages, MessageSent, SendMessage } from '../graphql/index'
import { useState } from 'react';
import { useForm } from "react-hook-form";

const ChatWindow = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [messages, setMessages] = useState([])

  const GET_MESSAGES = gql`${GetMessages}`;
  const { loading } = useQuery(GET_MESSAGES,{
    onCompleted: (data) => {
      if(data.getMessages){
        setMessages(data.getMessages)
      }
    }
  });
  
  const MESSAGE_SENT = gql`${MessageSent}`;
  useSubscription(
    MESSAGE_SENT,{
      onData: ({data}) => {
        if(data.data.messageSent){
          setMessages([...messages, data.data.messageSent])
        }
      }
    }
  );

  const SEND_MESSAGE = gql`${SendMessage}`;
  const [ send_message ] = useMutation(SEND_MESSAGE,
    {
      onCompleted: (data) => {
        console.log({data})
      },
    }
  );

  return (
    <div className='bg-bg-secondary w-[70%] h-[90%] rounded-2xl shadow-lg'>
      <div className='h-[90%] overflow-y-scroll'>
        {!loading && messages.map(msg => (
          <div key={msg._id} className='flex justify-end p-3'>
            <div className='rounded-2xl bg-green-500 p-5'>
              <h1 className='text-white text-2xl'>{msg.content}</h1>
            </div>
          </div>
        ))}
      </div>
      <form 
        className='h-[10%] p-5 flex' 
        onSubmit={handleSubmit((data) => send_message({variables:{content:data.message}}))}
      >
        <input 
          type="text" 
          className='h-full w-[90%] rounded-2xl bg-transparent border-4 border-green-500 p-3 text-white font-bold'
          {...register("message")}
        />
        <button type="submit" className='ml-5 text-white bg-green-500 rounded-2xl p-5 font-bold text-xl'>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ChatWindow
