import Link from 'next/link';

const AwardItem = ({ award = [] }) => {
  const { title, description } = award || {};

  return (
    <div className='awards-and-recognition-item'>
      <div className='magnetic'>
        <div className='btn'>{title}</div>
      </div>
      <div className='content'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AwardItem;
