import { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.scss';

export function OptimizedImage({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`${styles.imageWrapper} ${className || ''}`}>
      {!isLoaded && <div className={styles.placeholder} />}
      <img
        src={imageSrc}
        alt={alt}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
