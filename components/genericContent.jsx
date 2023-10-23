import Link from 'next/link';
import MagneticButton from './magneticButton';

const GenericContent = ({ content, applyLink }) => {
  return (
    <section className='career-details section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            {applyLink && (
              <>
                <hr />
                <MagneticButton>
                  <Link
                    target='__blank'
                    href={applyLink}
                    className='btn btn-primary button--wayra'
                  >
                    Apply now
                  </Link>
                </MagneticButton>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericContent;
