import SocialShare from '../socialShare';
import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const CaseDetails = ({ data, tags = {} }) => {
  const {
    banner_image,
    subtitle,
    gallery,
    description,
    project,
    full_width_image_two,
    gallery_two,
    description_two,
  } = data || {};

  return (
    <section className='case-study-details section'>
      {banner_image && (
        <div className='ratio ratio-16x9'>
          <Image
            src={banner_image}
            alt=''
            width={400}
            height={400}
            placeholder='blur'
            blurDataURL={shimmerBlurData}
          />
        </div>
      )}
      <div className='container'>
        <div className='section'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>{subtitle && <h4>{subtitle}</h4>}</div>
          </div>
        </div>
        <div className='section pt-0'>
          <div className='row g-2'>
            {gallery &&
              gallery.map((image, index) => (
                <div className='col-md-6' key={index}>
                  <Image
                    src={image.image}
                    alt=''
                    className='w-100'
                    width={600}
                    height={600}
                    priority={index === 0 ? true : false}
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
              ))}
          </div>
        </div>

        {description && (
          <div className='section pt-0'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>
          </div>
        )}

        <div className='section pt-0'>
          <div className='row g-2'>
            {full_width_image_two && (
              <div className='col-12'>
                <div className='ratio ratio-16x9'>
                  <Image
                    src={full_width_image_two}
                    alt=''
                    width={400}
                    height={400}
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
              </div>
            )}

            {gallery_two &&
              gallery_two.map((image, index) => (
                <div className='col-md-6' key={index}>
                  <Image
                    src={image.image}
                    alt=''
                    className='w-100'
                    width={600}
                    height={600}
                    priority={index === 0 ? true : false}
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div dangerouslySetInnerHTML={{ __html: description_two }}></div>

              <div className='case-study-stats'>
                {project &&
                  project.map((item, index) => (
                    <div className='case-study-item' key={index}>
                      <h3>{item.count + item.prefix}</h3>
                      <p>{item.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <SocialShare tags={tags} />
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;
