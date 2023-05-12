import PropTypes from 'prop-types';

const Content = ({title, InnerContent}) => {
  return (
    <>
      <div className='h-[15%] lg:h-[20%] flex justify-center items-center'>
        <h1 className='text-2xl lg:text-6xl text-white font-bold'>{title}</h1>
      </div>
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
