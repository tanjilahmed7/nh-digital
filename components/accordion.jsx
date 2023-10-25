'use client';

import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='accordion' data-aos='fade-up' data-aos-duration='800'>
      {items &&
        items.length > 0 &&
        items.map((accordion, index) => (
          <div key={accordion._id} className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button ${
                  index === activeIndex ? '' : 'collapsed'
                }`}
                type='button'
                onClick={() => handleClick(index)}
              >
                {accordion.title}
              </button>
            </h2>
            <div
              className={`accordion-collapse ${
                index === activeIndex ? 'show' : ''
              }`}
            >
              <div className='accordion-body'>
                <div className='accordion-content'>
                  <div
                    dangerouslySetInnerHTML={{ __html: accordion.content }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
