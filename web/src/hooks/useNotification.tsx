import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

type ToastProps = {
  title?: string;
  message?: string;
  to?: string;
};

export const useNotification = () => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    width: '24rem',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const password = async ({ message }: ToastProps) => {
    MySwal.fire({
      icon: 'info',
      position: 'center',
      title: 'Password Reset',
      text: message ?? '',
      confirmButtonText: 'Ok!',
    });
  };

  const success = async ({ title, message, to }: ToastProps) => {
    await Toast.fire({
      icon: 'success',
      title: title,
      text: message,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        to && router.push(to);
      }
    });
  };

  const error = async (toast: ToastProps) => {
    await Toast.fire({
      icon: 'error',
      title: 'Oops...Something went wrong!',
      text: toast?.message ?? '',
    });
  };

  return {
    success,
    error,
    password,
  };
};
