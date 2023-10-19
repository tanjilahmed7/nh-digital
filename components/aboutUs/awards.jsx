import Image from 'next/image';
import AwardItem from './awardItem';

// awards data
const awards = [
	{
		id: 0,
		year: 2022,
		description:
			'We grow businesses by creating shopping experiences that turn everyday brands into industry leaders.',
	},
	{
		id: 1,
		year: 2022,
		description:
			'We grow businesses by creating shopping experiences that turn everyday brands into industry leaders.',
	},
];

const Awards = ({ data }) => {
	const { image, title, items } = data || {};
	return (
    <section className='awards-and-recognition section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0 align-items-center justify-content-end'>
          <div className='col-lg-5 order-1 order-lg-0'>
            <div className='award-img'>
              <Image
                src={image}
                alt=''
                width={402}
                height={585}
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <h2>{title}</h2>
            {items &&
              items.map((award) => <AwardItem key={award._id} award={award} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
