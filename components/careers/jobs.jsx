import Link from 'next/link';
import MagneticButton from '../magneticButton';
import { fetchAllCareers } from '@/graphql/careers/GET_CAREERS';
// jobs data
const jobs = [
  {
    id: 0,
    title: 'Intern, Visualizer',
    type: 'Full time',
    deadline: 'Mar 31, 2023',
    href: '/careers/a',
  },
  {
    id: 1,
    title: 'Trainee Copywriter',
    type: 'Full time',
    deadline: 'Mar 31, 2023',
    href: '/careers/a',
  },
  {
    id: 2,
    title: 'Executive/Senior Executive, Sales & Partnerships',
    type: 'Full time',
    deadline: 'Mar 31, 2023',
    href: '/careers/a',
  },
  {
    id: 3,
    title: 'Intern, Visualizer',
    type: 'Full time',
    deadline: 'Mar 31, 2023',
    href: '/careers/a',
  },
];

const Jobs = async ({ data }) => {
  const { title } = data || {};
  const { careers, loading, error } = (await fetchAllCareers()) || {};
  return (
    <section className='jobs section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
        </div>
        <ul className='jobs-list'>
          {careers &&
            careers.map((job) => (
              <li key={job.id}>
                <div className='left'>
                  <div className='type'>{job.position}</div>
                  <h3 className='h4'>{job.title}</h3>
                  <div className='deadline'>Deadline: {job.deadline}</div>
                </div>
                <MagneticButton>
                  <Link
                    href={`careers/` + job.slug}
                    className='btn btn-stacked button--wayra'
                  >
                    See details
                  </Link>
                </MagneticButton>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Jobs;
