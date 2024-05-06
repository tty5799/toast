import { createContext, ReactNode, useContext, useRef, useState } from 'react';
import ToastController from './ToastController';
import ReactDOM from 'react-dom/client';

const ToastContext = createContext<{
  toastController: ToastController | null;
}>({
  toastController: null,
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastControllerRef = useRef<ToastController | null>(null);

  let toastContainer = document.getElementById('total');

  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = `total`;
    document.body.appendChild(toastContainer);
  }

  ReactDOM.createRoot(toastContainer);

  if (!toastControllerRef.current) {
    toastControllerRef.current = new ToastController();
  }

  return (
    <ToastContext.Provider
      value={{
        toastController: toastControllerRef.current,
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
