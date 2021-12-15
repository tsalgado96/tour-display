import { useState } from 'react';

const Tour = props => {
  const [readMore, setReadMore] = useState(false);
  const { name, info, image, price } = props.data;
  const lessInfo = info.substring(0, 200);

  return (
    <div className='item-container'>
      <img src={image} alt={name} />
      <div className='info-container'>
        <div className='name-price'>
          <p className='name'>{name}</p>
          <p className='price'>${price}</p>
        </div>
        <p className='info'>
          {!readMore ? lessInfo : info + ' '}
          {!readMore && '... '}
          {!readMore ? (
            <button className='read-button' onClick={() => setReadMore(!readMore)}>
              read more
            </button>
          ) : (
            <button className='read-button' onClick={() => setReadMore(!readMore)}>
              show less
            </button>
          )}
        </p>
        <button className='not-interested-button' onClick={props.deleteItem}>
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
