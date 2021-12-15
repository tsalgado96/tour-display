import { useState, useEffect } from 'react';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then(res => {
        setOriginalData(res);
        setData(res);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteItem = id => {
    setData(data.filter(elem => elem.id !== id));
  };

  return (
    <div className='container'>
      <h1>{isLoading ? 'Loading...' : isError ? 'Error...' : 'Our Tours'}</h1>
      <span className='underline'></span>
      <div className='tours-container'>
        {data.length > 0 ? (
          data.map(elem => {
            // let { id, image, info, name, price } = elem;
            // return <Tour key={id} image={image} info={info} name={name} price={price} />;
            return <Tour key={elem.id} data={elem} deleteItem={() => deleteItem(elem.id)} />;
          })
        ) : !isLoading ? (
          <button className='refresh-button' onClick={() => setData(originalData)}>
            refresh
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
