import * as React from "react"
import Image from 'next/image';
import classNames from 'classnames';

const ContentField = ({ content }) => {
    return (<Content fullWidth={content.attributes.full_width}>
        <div className="content">
            <h1 id="modebooking" className="content-title">
                {content.attributes.title}
            </h1>
            <h2 className="content-headline">
                {content.attributes.subtitle}
            </h2>
            <div className={classNames("content__flex", content.attributes.image_left_aligned ? 'flex-row-reverse' : '')}>
                <div className="content__col">
                    <div className="content-description" dangerouslySetInnerHTML={{ __html: content.attributes.description }}>
                    </div>
                </div>

                    {
                        content.attributes.image.data &&
                        <div className="content__col content-image">
                        <a href={content.attributes.image_link} target="_blank" rel="noreferrer">
                            <Image
                                src={content.attributes.image.data.attributes.url}
                                alt={content.attributes.image.data.attributes.alternativeText}
                                width={content.attributes.image.data.attributes.width}
                                height={content.attributes.image.data.attributes.height}
                            />
                        </a>
                        </div>
                    }

            </div>
        </div>
    </Content>)
}

const Content = ({ fullWidth, children }) => {
    return fullWidth ? (
        <div className="content--full-width content--grey">
            {children}
        </div>) :
        (<>
            {children}
        </>)
}

export default ContentField
