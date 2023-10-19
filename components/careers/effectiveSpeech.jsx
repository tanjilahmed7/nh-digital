import Image from 'next/image';

const EffectiveSpeech = ({ data }) => {
  const { description, image, name, position } = data || {};
  return (
    <section className='effective-speech section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='row g-4 align-items-center justify-content-center justify-content-lg-between'>
              <div className='col-sm-10 col-lg-6'>
                <div className='section-img'>
                  <Image src={image} alt={name} width={445} height={445} />
                </div>
              </div>
              <div className='col-lg-5'>
                <h2 className='h4'>
                  <span className='line'></span> {description}
                </h2>
                <div className='effective-speech-bottom'>
                  <p>{name}</p>
                  <p className='designation'>{position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectiveSpeech;
