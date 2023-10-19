import Image from 'next/image';
import Accordion from '../accordion';

const Benefits = ({ data }) => {
  const { title, image, benefits } = data || {};
  return (
    <section className='benefits section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
        </div>
        <div className='row g-4 justify-content-center justify-content-lg-between'>
          <div className='col-lg-6 order-1 order-lg-0'>
            <Accordion items={benefits}></Accordion>
          </div>
          <div className='col-sm-10 col-lg-5'>
            <div className='section-img'>
              <Image src={image} alt='' width={445} height={445} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
