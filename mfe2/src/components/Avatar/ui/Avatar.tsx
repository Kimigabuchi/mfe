import React from 'react';

export type AvatarProps = {
  src: string;
  alt?: string;
  size?: number;
  message?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40, message }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'inline-block',
        backgroundColor: '#ccc',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {message && (
        <span
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px',
          }}
        >
          {message}
        </span>
      )}
    </div>
  );
};

export { Avatar };
