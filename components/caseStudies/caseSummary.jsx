import Link from 'next/link';
import MagneticButton from '../magneticButton';

const CaseSummary = ({ data }) => {
  const {
    year,
    industry,
    team_involvement,
    services_we_proided,
    description,
    button_title,
    button_url,
  } = data || {};
  return (
    <div className='case-study-summary'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-4'>
            <h2>Summary</h2>

            {year && (
              <div className='summary-item'>
                <p className='title'>Year:</p>
                <p>{year}</p>
              </div>
            )}
            {industry && (
              <div className='summary-item'>
                <p className='title'>Industry:</p>
                <p>{industry}</p>
              </div>
            )}

            {team_involvement && (
              <div className='summary-item'>
                <p className='title'>Team involvement:</p>
                <p>{team_involvement}</p>
              </div>
            )}

            {services_we_proided && (
              <div className='summary-item'>
                <p className='title'>Services we provided:</p>
                <ul>
                  {services_we_proided.map((service, index) => (
                    <li key={index}>
                      <Link href={service.uri}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='summary-item'>
              <MagneticButton>
                <Link
                  href={button_url}
                  className='btn btn-stacked button--wayra'
                >
                  {button_title}
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_771_5516)'>
                      <path
                        d='M6.37517 3.51814L6.37517 5.16806L14.1528 5.16865L3.42889 15.8925L4.6074 17.071L15.3313 6.34716L15.3319 14.1247H16.9818L16.9818 3.51814L6.37517 3.51814Z'
                        fill='#1158E5'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_771_5516'>
                        <rect
                          width='20'
                          height='20'
                          fill='white'
                          transform='translate(0.5)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </div>
          <div className='col-lg-8'>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSummary;
