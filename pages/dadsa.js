import {useEffect, useState} from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    // 👇️ passed function to setState
    setIsLoading(current => !current);
  };

  useEffect(() => {
    console.log('isLoading is: ', isLoading);
  }, [isLoading]);

  return (
    <div>
      <button onClick={toggleIsLoading}>Toggle loading state</button>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}
