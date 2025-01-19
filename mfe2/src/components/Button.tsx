"use client"

import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode; // Тип ReactNode позволяет передавать любые валидные React-элементы
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
