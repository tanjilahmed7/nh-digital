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
              <Image
                src={image}
                alt=''
                width={445}
                height={445}
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
