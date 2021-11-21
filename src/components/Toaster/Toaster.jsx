import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Toaster = ({ error, success, text }) => {
  if (error) toast.error(text);
  if (success) toast.success(text);
  if(!error && !success) toast(text);

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
    />
  );
};

export default Toaster;
