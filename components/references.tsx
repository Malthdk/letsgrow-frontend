import * as React from "react"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Modal } from '@mui/material';

type ReferenceItemProps = {
    data: any;
}

const ReferenceItem = ({ data }: ReferenceItemProps) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <div className="max-w-xs w-full mx-auto mb-4 flex flex-col items-center">
            {data.image.data &&
                <div className="relative z-50">
                    {data.video.data &&
                        <Icon className="absolute z-20 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPlaying(true)} icon="material-symbols:play-circle-outline" />
                    }
                    <Image src={data.image.data.attributes.url}
                        alt="text"
                        width={100}
                        height={100}
                        className="mb-0 rounded-full border-white border-solid border-2" />
                    {data.video.data &&
                        <Modal open={isPlaying} onClose={() => setIsPlaying(false)}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] shadow-md rounded-md">
                                <video id="video" width="220" controls>
                                    <source src="https://letsgrow-images.s3.eu-north-1.amazonaws.com/minfv_9aa9511345.mp4?updated_at=2022-11-08T09:09:33.762Z" type="video/mp4" />
                                </video>
                            </div>
                        </Modal>
                    }
                </div>
            }

            <div className="relative z-20 rounded-md bg-slate-50 mt-[-3rem] text-black pt-16 p-4">
                <h4 className="text-center mb-2">{data.name}</h4>
                <h5 className="text-center mb-4">{data.company_name}</h5>
                <div className="mb-2" dangerouslySetInnerHTML={{ __html: data.text}}></div>
            </div>
        </div>)
}

const References = ({ references }: any) => {
    return (
        <div className="content content--full-width content--alt-color">
            <h1 className="content-title text-center">{references.attributes.title}</h1>

            <div className="max-w-[440px] w-full mx-auto">
                <Carousel autoPlay={false} showIndicators={true} showThumbs={false} showStatus={false} interval={8000}>
                    {references.attributes.reference &&
                        references.attributes.reference.map((refItem: any, index: number) => {
                            return <ReferenceItem data={refItem} key={index} />
                        })
                    }
                </Carousel>
            </div>
        </div>);
}

export default References

