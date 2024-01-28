
import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    geo.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coords, error };
};

const App = () => {
  const { coords, error } = useGeolocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
    </div>
  );
};

export default App;
