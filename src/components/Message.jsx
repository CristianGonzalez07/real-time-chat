import PropTypes from 'prop-types';
import { useAuth } from '../hooks' 

const Message = ({ msg }) => {
  var { user } = useAuth(); 
  user = JSON.parse(user);
  return (
    <div className={`flex ${ msg.owner === user._id? "justify-end" : "justify-start"} p-2 lg:p-3`}>
      <div className='rounded-lg bg-green-500 p-2 lg:p-3'>
        <h1 className='text-white text-sm lg:text-lg'>{msg.content}</h1>
      </div>
    </div>
  )
}

Message.propTypes = {
  msg: PropTypes.object.isRequired,
};

export default Message
