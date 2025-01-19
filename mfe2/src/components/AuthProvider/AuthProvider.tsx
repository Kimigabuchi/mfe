import React, { createContext, useContext, ReactNode } from 'react';
import useStore from "../../../store/store";

// Определяем тип контекста
type AuthContextType = ReturnType<typeof useStore>;

// Создаём контекст
const AuthContext = createContext<AuthContextType | null>(null);

// Типы для провайдера
export interface AuthProviderProps {
  children: ReactNode;
}

// Провайдер
const AuthProvider: React.FC<{ children: ReactNode | null }> = ({ children }) => {
  const authStore = useStore();

  return <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>;
};

// Хук для использования контекста
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
