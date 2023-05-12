import { useQuery, useSubscription, useMutation, gql } from '@apollo/client';
import { GetMessages, MessageSent, SendMessage } from '../graphql/index'
import { useEffect, useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([])

  const GET_MESSAGES = gql`${GetMessages}`;
  const { loading } = useQuery(GET_MESSAGES,{
    onCompleted: (data) => {
      if(data.getMessages){
        setMessages(data.getMessages);
      }
    }
  });

  useEffect(() => {
    var chatWindow = document.getElementById("chatWindow");
    var lastMsg = chatWindow.lastChild;
    lastMsg?.scrollIntoView();
  },[messages])
  
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
  const [ send_message, { loading:isLoading } ] = useMutation(SEND_MESSAGE,
    {
      onCompleted: (data) => {
        document.getElementById("chatInput").value = "";
      },
    }
  );

  return (
    <>
      <div className='h-[90%] overflow-y-scroll pt-1' id="chatWindow">
        {!loading && messages.map(msg => (
          <Message key={msg._id} msg={msg}/>
        ))}
      </div>
      <ChatInput 
        onSubmit={(data) => data.message.trim() !== "" ? send_message({variables:{content:data.message}}) : null}
        isLoading={isLoading}
      />
    </>
  )
}

export default ChatWindow
