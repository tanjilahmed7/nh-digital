'use client';

import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const HeroMedia = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='hero__img text-end'>
      <ModalVideo
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...props}
      />
      <video
        width='600'
        autoPlay
        src={props.video}
        type='video/mp4'
        playsInline
        muted
        loop
      >
        <track
          kind='captions'
          src={props.captions}
          srclang='en'
          label='English'
          default
        />
      </video>

      <div className='video-button'>
        <button
          type='button'
          className='popup-youtube'
          onClick={() => setIsOpen(true)}
          aria-label='Play YouTube video'
        >
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.5783 15.1201L6.73442 24.6128C5.87393 25.1318 4.78125 24.5035 4.78125 23.4928V4.50744C4.78125 3.49671 5.87393 2.88207 6.73442 3.38744L22.5783 12.8801C23.4388 13.3855 23.4388 14.6148 22.5783 15.1201Z'
              fill='white'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroMedia;
