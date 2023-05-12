import PropTypes from 'prop-types';
import Content from './Content';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ title, Child }) => {
  return (
  <div className='w-full h-screen bg-bg-primary'>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      transition={Slide}
      limit={1}
      toastClassName="bg-bg-secondary text-white font-bold"
    />
    <Content InnerContent={Child} title={title}/>
  </div>
  )
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  Child: PropTypes.element.isRequired,
};

export default Main
