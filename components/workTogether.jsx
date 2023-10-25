import Link from 'next/link';
import MagneticButton from './magneticButton';

const WorkTogether = ({ data }) => {
  const {
    title,
    description,
    primary_button_title,
    primary_button_url,
    secondary_button_title,
    secondary_button_url,
  } = data || {};

  return (
    <section className='work-together section'>
      <div className='container'>
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
          {secondary_button_url && secondary_button_url && (
            <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
              <MagneticButton>
                <Link
                  href={primary_button_url}
                  className='btn btn-primary button--wayra'
                >
                  {primary_button_title}
                </Link>
              </MagneticButton>
              <span className='m-3'>or</span>
              <MagneticButton>
                <Link
                  href={secondary_button_url}
                  className='btn btn-stacked button--wayra'
                >
                  {secondary_button_title}
                </Link>
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
