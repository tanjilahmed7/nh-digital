import Link from 'next/link';
import MagneticButton from './magneticButton';

const ProjectDiscussion = ({ data }) => {
  const { title, button_title, button_url } = data || {};
  return (
    <section className='project-in-mind section'>
      <div className='container'>
        <h2>{title}</h2>
        {button_url && button_title && (
          <MagneticButton>
            <Link href={button_url} className='btn btn-primary button--wayra'>
              {button_title}
            </Link>
          </MagneticButton>
        )}
      </div>
    </section>
  );
};

export default ProjectDiscussion;
