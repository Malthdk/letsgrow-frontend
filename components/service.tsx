import * as React from "react"
import Image from 'next/image';


const Service = ({ service }: any) => (
  <div className="content offer">
    <h2 className="content-headline">Din vækstpakke kan inkludere</h2>
    <div className="content__flex-col">
      <div className="content__item">
        <div className="content-icon">
          <a href={service.attributes.service_1_link}>
            {service.attributes.service_1_image.data &&
              <Image
                src={service.attributes.service_1_image.data.attributes.url}
                alt={service.attributes.service_1_image.data.attributes.alternativeText}
                width={120}
                height={120}
              />
            }
          </a>
        </div>
        <div className="content-headline content__icon-description">
          {service.attributes.service_1}
        </div>
      </div>
      <div className="content__item">
        <div className="content-icon">
          <a href={service.attributes.service_2_link}>
            {service.attributes.service_2_image.data &&
              <Image
                src={service.attributes.service_2_image.data.attributes.url}
                alt={service.attributes.service_2_image.data.attributes.alternativeText}
                width={120}
                height={120}
              />
            }
          </a>
        </div>
        <div className="content-headline content__icon-description">
          {service.attributes.service_2}
        </div>
      </div>
      <div className="content__item">
        <div className="content-icon">
          <a href={service.attributes.service_3_link}>
            {service.attributes.service_3_image.data &&
              <Image
                src={service.attributes.service_3_image.data.attributes.url}
                alt={service.attributes.service_3_image.data.attributes.alternativeText}
                width={120}
                height={120}
              />
            }
          </a>
        </div>
        <div className="content-headline content__icon-description">
          {service.attributes.service_3}
        </div>
      </div>
      <div className="content__item">
        <div className="content-icon">
          <a href={service.attributes.service_4_link}>
            {service.attributes.service_4_image.data &&
              <Image
                src={service.attributes.service_4_image.data.attributes.url}
                alt={service.attributes.service_4_image.data.attributes.alternativeText}
                width={120}
                height={120}
              />
            }
          </a>
        </div>
        <div className="content-headline content__icon-description">
          {service.attributes.service_4}
        </div>
      </div>
    </div>
  </div>
)

export default Service

