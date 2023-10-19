import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import IncludedServicesTab from './includedServicesTab';

// const services = [
//   {
//     id: 0,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/01.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
//   {
//     id: 1,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/02.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
//   {
//     id: 2,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/03.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
//   {
//     id: 3,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/04.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
//   {
//     id: 4,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/05.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
//   {
//     id: 5,
//     title: 'UX strategy',
//     img: {
//       src: '/images/service-details/06.png',
//       alt: 'UX strategy',
//       width: 160,
//       height: 200,
//     },
//     excerpt:
//       'Optimize your digital presence with a clear UX strategy informed by your brand’s as well as your users’ objectives.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris turpis nisi convallis duis purus tortor. Euismod est sem sollicitudin dui ultrices vulputate leo magnis. Semper risus nibh tellus ullamcorper quam ut bibendum orci bibendum. Fermentum et ullamcorper aliquet orci suscipit nunc consectetur viverra orci. Eu suspendisse amet sollicitudin vel adipiscing vel. Amet quis vitae aliquam in ultricies arcu integer.',
//   },
// ];

const IncludedServices = ({ data }) => {
  const { title, description, button_title, button_url, services } = data || {};

  return (
    <section className='included-services section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <IncludedServicesTab services={services} />
        <div className='text-center'>
          <MagneticButton>
            <Link
              href={button_url}
              className='btn btn-primary button--wayra'
              data-aos='fade-up'
              data-aos-duration='400'
            >
              {button_title}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default IncludedServices;
