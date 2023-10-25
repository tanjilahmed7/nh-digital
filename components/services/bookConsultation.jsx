import Calendly from '../calendly';

const BookConsultation = ({ data }) => {
  const { title, description } = data;
  return (
    <section className='book-consultation section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-5'>
            <div
              className='section-content'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className='col-lg-7'>
            <Calendly />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
