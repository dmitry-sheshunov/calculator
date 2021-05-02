import React from 'react';
import './lay-out.css';
import { Toast } from '../../toast/toast';

export const RootLayOut = ({ children }: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <>
      <Toast/>
      <div className="app">
          { children }
      </div>
    </>
  );
};