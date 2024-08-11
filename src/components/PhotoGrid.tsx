import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';
const UNSPLASH_ACCESS_KEY = 'tBnh7H41QaJax8sZHhOxkcu2Jrlo6rv2Thbj8R2S_Ds';

interface Props {
  imageId: number;
}

const PhotoGrid: React.FC<Props> = ({ imageId }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        params: {
          count: 9,
          client_id: UNSPLASH_ACCESS_KEY,
          seed: imageId,
        },
      });
      const newPhotos = response.data.map((photo: any) => photo.urls.regular);
      setPhotos(newPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, [imageId]);

  if (loading) {
    return <div>Loading photos...</div>;
  }

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;