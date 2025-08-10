import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  useWebP = true 
}) => {
  // Get the base name without extension
  const baseName = src.replace(/\.[^/.]+$/, '');
  const isPublicAsset = src.startsWith('/') || !src.includes('static/media');
  
  // Generate optimized paths
  const getOptimizedPath = (format) => {
    if (isPublicAsset) {
      // For public assets
      const publicPath = src.startsWith('/') ? src.slice(1) : src;
      return `/optimized/${publicPath.replace(/\.[^/.]+$/, `.${format}`)}`;
    } else {
      // For imported assets, use the optimized folder
      try {
        const optimizedSrc = require(`../assets/Images/optimized/${src.split('/').pop()?.replace(/\.[^/.]+$/, `.${format}`)}`);
        return optimizedSrc;
      } catch {
        return src; // Fallback to original
      }
    }
  };

  const webpSrc = useWebP ? getOptimizedPath('webp') : null;
  const optimizedSrc = getOptimizedPath(src.includes('.jpg') ? 'jpg' : 'png');

  return (
    <picture>
      {useWebP && webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={optimizedSrc || src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        onError={(e) => {
          // Fallback to original image if optimized version fails
          e.target.src = src;
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
