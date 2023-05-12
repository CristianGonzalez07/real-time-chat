import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  return (
    <div className='flex justify-end p-2 lg:p-3'>
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
