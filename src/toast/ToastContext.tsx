import { createContext, ReactNode, useContext, useState } from 'react';
import ToastController from './ToastController';

const ToastContext = createContext<{
  toastController: ToastController | null;
}>({
  toastController: null,
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastController] = useState(new ToastController());

  return (
    <ToastContext.Provider
      value={{
        toastController: toastController,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { toastController } = useContext(ToastContext);

  return toastController;
};

export default ToastProvider;
