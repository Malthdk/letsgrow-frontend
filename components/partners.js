import * as React from "react"
import Image from 'next/image';

const Partners = ({ partnersList }) => {
    return (
        <div className="content">
            <h2 className="content-headline">Samarbejdspartnere</h2>
            <div className="content__flex-col content__flex-col--centered content--full-width md:overflow-x-auto">
                {partnersList &&
                    partnersList.attributes.partner.map((partner, index) => {
                        return (
                            <div className="content__item content-icon--autow" key={index}>
                                <a href={partner.partner_link} target="_blank" rel="noreferrer">
                                    <div className="content-icon">
                                        {
                                            partner.partner_image.data &&
                                            <Image
                                                src={partner.partner_image.data.attributes.url}
                                                height={120}
                                                width={120}
                                                alt={partner.partner_image.data.attributes.alternativeText}
                                            />
                                        }

                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partners

