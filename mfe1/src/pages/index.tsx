import dynamic from 'next/dynamic';
import React, {ReactNode} from 'react';
// import type { AvatarProps } from 'buttonApp/Avatar';
import type { AuthProviderProps } from 'buttonApp/AuthProvider';
import AuthProvider from "../../../mfe2/src/components/AuthProvider/AuthProvider"

// Динамически импортируем компонент Button из remote
const RemoteButton = dynamic(() => import('buttonApp/Button'), { ssr: false });
// const RemoteAvatar = dynamic<AvatarProps>(() => import('buttonApp/Avatar'), { ssr: false });
// const RemoteAuthProvider = dynamic(() => import('buttonApp/AuthProvider'), { ssr: false });

// import('buttonApp/Avatar').then((mod) => {
//   console.log('Loaded module:', mod);
// });

// const RemoteAvatar = dynamic(() =>
//   import('buttonApp/Avatar').then(mod => {
//     const Avatar = mod.Avatar;
//     return Avatar;
// }), { ssr: false });

// const RemoteButton = dynamic(() =>
//   import('buttonApp/Button').then(mod => {
//     const Button: React.FC = mod.default;
//     console.log("mod", mod)
//     console.log("Button", Button, typeof(Button))
//     return Button;
// }), { ssr: false });

const RemoteAuthProvider = dynamic(() =>
  import('buttonApp/AuthProvider').then(mod => {
    const AuthProvider: React.FC<AuthProviderProps> = mod.default;
    console.log("mod", mod)
    console.log("AuthProvider", AuthProvider, typeof(AuthProvider))
    return AuthProvider;
}), { ssr: false });


export interface AuthProviderProps {
  children: ReactNode;
}

const Home: React.FC = () => {
  console.log(1, RemoteButton, typeof(RemoteButton))
  console.log(2, RemoteAuthProvider, typeof(RemoteAuthProvider))

  

  const Button2: React.FC = () => {
    return <button><span>R-Button</span></button>;
  };

  return (
    // <AuthProvider>
      <div>
        1
        <RemoteButton><Button2 /></RemoteButton>
        <RemoteAuthProvider>23</RemoteAuthProvider>
      </div>
      // <h1>Host Application</h1> */}
      
    // </AuthProvider>
  );
};

export default Home;
