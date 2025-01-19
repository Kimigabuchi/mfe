import dynamic from 'next/dynamic';
import React from 'react';
import type { AvatarProps } from 'buttonApp/Avatar';

// Динамически импортируем компонент Button из remote
const RemoteButton = dynamic(() => import('buttonApp/Button'), { ssr: false });
const RemoteAvatar = dynamic<AvatarProps>(() => import('buttonApp/Avatar'), { ssr: false });

import('buttonApp/Avatar').then((mod) => {
  console.log('Loaded module:', mod);
});

// const RemoteAvatar = dynamic(() =>
//   import('buttonApp/Avatar').then(mod => {
//     const Avatar = mod.Avatar;
//     return Avatar;
// }), { ssr: false });

const Home = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <RemoteButton />
      <RemoteAvatar message={"123 42342"} src="https://s3.wheelsage.org/picture/v/volvo/v60_t5_cross_country/volvo_v60_t5_cross_country_20.jpeg" />
    </div>
  );
};

export default Home;
