import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';

const JoinUs = ({ data }) => {
	const { title, description, image_one, image_two, button_text, button_url } =
		data || {};
	return (
    <section className='join-our-team section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0 align-items-center'>
          <div className='col-lg-7'>
            <div className='d-flex align-items-center gap-3'>
              <div className='join-our-team-img'>
                <Image
                  src={image_one}
                  alt=''
                  width={310}
                  height={278}
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              </div>
              <div className='join-our-team-img'>
                <Image
                  src={image_two}
                  alt=''
                  width={310}
                  height={278}
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <h2 data-aos='fade-up' data-aos-duration='200'>
              {title}
            </h2>
            <p>{description}</p>
            {button_text && button_url && (
              <MagneticButton>
                <Link
                  href='/careers'
                  className='btn btn-primary button--wayra download'
                  data-aos='fade-up'
                  data-aos-duration='400'
                >
                  {button_text}
                </Link>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
