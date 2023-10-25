import Counter from '../counter';

const Strategy = ({ data }) => {
  const { title, strategy_items } = data || {};
  return (
    <section className='strategy section'>
      <div className='container'>
        <div className='stragegy-item'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h2 data-aos='fade-up' data-aos-duration='200'>
                {title}
              </h2>
              <div className='row text-center'>
                {strategy_items &&
                  strategy_items.map((item, index) => {
                    const { title, prefix, count } = item || {};
                    return (
                      <div
                        key={index}
                        className='col-md-4'
                        data-aos='fade-up'
                        data-aos-duration='200'
                      >
                        <Counter count={count} symbol={prefix} title={title} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
