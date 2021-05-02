import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

export const Toast: React.FC = () => {
  return (<ToastContainer position="top-right"/>);
};