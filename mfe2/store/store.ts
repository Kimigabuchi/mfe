import { create } from 'zustand';

interface AuthState {
  user: User | null; // Пользователь или null
  token: string | null; // JWT-токен или другой маркер авторизации
  isAuthenticated: boolean; // Статус аутентификации

  // Методы для управления состоянием
  login: (user: User, token: string) => void;
  logout: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const useStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (user, token) => {
    set({
      user,
      token: "test-token",
      isAuthenticated: true,
    })
  },
  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    })
  }
}));

export default useStore;
