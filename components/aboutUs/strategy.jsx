import Counter from '../counter';

const Strategy = ({ data }) => {
  const { description, numbers } = data || {};
  return (
    <section className='strategy section'>
      <div className='container'>
        <div className='stragegy-item'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                data-aos='fade-up'
                data-aos-duration='800'
              ></div>

              {numbers && (
                <div className='row text-center'>
                  {numbers.map((counter) => (
                    <div
                      key={counter._id}
                      className='col-md-4'
                      data-aos='fade-up'
                      data-aos-duration='800'
                    >
                      <Counter
                        count={counter.count}
                        symbol={counter.prefix}
                        title={counter.title}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
