import { Component, ReactNode } from 'react';
import { ToastLayout } from './ToastLayout';
import ReactDOM, { createRoot, Root } from 'react-dom/client';

class ToastController {
  private toastContainerId = `total`;
  private toastRoot: Root | null = null;

  open(text: ReactNode) {
    if (!this.toastRoot) {
      console.error('Toast container not found');
      return;
    }

    const toastElement = <ToastLayout text={text} />;
    this.toastRoot.render(toastElement);

    return toastElement;
  }
}

export default ToastController;
