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
    youtube_video_link,
    gallery_two,
    description_two,
  } = data || {};

  return (
    <section className='case-study-details'>
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
        {subtitle && (
          <div className='section'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <h4>{subtitle}</h4>
              </div>
            </div>
          </div>
        )}

        {gallery.length > 0 && (
          <div className='section'>
            <div className='row g-2'>
              {gallery.map((image, index) => (
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
        )}

        {description && (
          <div className='section'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>
          </div>
        )}

        {(full_width_image_two || gallery_two.length > 0) && (
          <div className='section'>
            <div className='row g-2'>
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
                  {youtube_video_link && (
                    <div className='col-12'>
                      <div className='ratio ratio-16x9'>
                        <iframe
                          src={youtube_video_link}
                          title='YouTube video player'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {gallery_two.map((image, index) => (
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
        )}

        <div className='section'>
          {project.length > 0 ||
            (description_two && (
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  {description_two && (
                    <div
                      dangerouslySetInnerHTML={{ __html: description_two }}
                    ></div>
                  )}

                  {project.length > 0 && (
                    <div className='case-study-stats'>
                      {project.map((item, index) => (
                        <div className='case-study-item' key={index}>
                          <h3>{item.count + item.prefix}</h3>
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <hr />
                </div>
              </div>
            ))}
          <SocialShare tags={tags} />
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;
