import Accordion from '../accordion';

const FAQ = ({ data }) => {
  const { title, items } = data;
  return (
    <section className='general-questions section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
};

export default FAQ;
