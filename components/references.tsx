import * as React from "react"
import Image from 'next/image';
import { Icon } from '@iconify/react';
import SwipeableViews from 'react-swipeable-views';
import classNames from "classnames";
import trimText from '../lib/trimmer';

type ReferenceItemProps = {
    data: any;
}

const ReferenceItem = ({ data }: ReferenceItemProps) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [readMore, setReadMore] = React.useState(false);
    const isReadMore = data.text.length > 310;
    const cleanText = data.text.replace(/<\/?[^>]+(>|$)/g, "");
    const trimmedText = trimText(cleanText, 290, 310, 330)

    const vidRef = React.useRef(null);

    const handlePlayVideo = () => {
        if (vidRef.current !== null) {
            setIsPlaying(true);
            (vidRef.current as HTMLVideoElement).play();
        }
    }

    return (
        <div className="max-w-xs w-full mx-auto mb-4 flex flex-col items-center">
            {data.image.data &&
                <div className="relative z-50">
                    <Image src={data.image.data.attributes.url}
                        alt="text"
                        width={100}
                        height={100}
                        priority={true}
                        className="mb-0 rounded-full border-white border-solid border-2" />
                </div>
            }

            <div className="relative w-full z-20 rounded-md bg-slate-50 mt-[-3rem] text-black pt-16 p-4">
                <h4 className="text-center mb-2">{data.name}</h4>
                <h5 className="text-center mb-4">{data.company_name}</h5>
                {data.video.data ?
                    <div className={classNames(isPlaying ? "reference-video--playing" : "reference-video", "relative")}>
                        {!isPlaying &&
                            <Icon className="absolute z-20 text-white text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={handlePlayVideo} icon="material-symbols:play-circle-outline" />
                        }
                        <video ref={vidRef} id="video" width="220" height={200} className={classNames(isPlaying ? "" : "pointer-events-none", "mx-auto w-full")} controls {...(data.poster && data.poster.data ? {poster: data.poster.data.attributes.url} : {})}>
                            <source src={data.video.data.attributes.url} type={data.video.data.attributes.mime} />
                        </video>
                    </div>
                    :
                    <>
                        <div className="mb-2">
                            {isReadMore && !readMore ? trimmedText[0] : cleanText}
                        </div>{isReadMore && !readMore ?
                            <div className="underline cursor-pointer" onClick={() => setReadMore(true)}>Læs mere</div> :
                            isReadMore && readMore ?
                                <div className="underline cursor-pointer" onClick={() => setReadMore(false)}>Læs mindre</div> :
                                <></>
                        }</>
                }
            </div>
        </div>)
}

const References = ({ references }: any) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = references.attributes.reference.length;
    const [width, setWidth] = React.useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const referenceData = references.attributes.reference.reduce((acc: any, curr: any, index: number) => {
        if (index && (index + 1) % 3 === 0) {
            acc.push([references.attributes.reference[index - 2], references.attributes.reference[index - 1], references.attributes.reference[index]]);
        } else if (maxSteps - 1 === index && (index && (index + 1) % 3 === 1)) {
            acc.push([references.attributes.reference[index], null, null]);
        } else if (maxSteps - 1 === index && (index && (index + 1) % 3 === 2)) {
            acc.push([references.attributes.reference[index - 1], references.attributes.reference[index], null]);
        }
        return acc;
    }, [] as Array<any>);

    return (
        <div className="content content--full-width content--alt-color">
            <h1 className="content-title text-center">{references.attributes.title}</h1>

            <div className="max-w-[1140px] w-full mx-auto flex gap-1 flex-nowrap justify-between">
                {activeStep > 0 && !isMobile ? (
                    <Icon className="fill-white text-[3rem] cursor-pointer my-auto" onClick={handleBack} icon="material-symbols:arrow-back" />
                ) : <div className="w-[45px]" />}
                <SwipeableViews
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    disableLazyLoading={true}
                    slideStyle={{overflowY: "hidden"}}
                    enableMouseEvents>
                    {references.attributes.reference &&
                        isMobile ? references.attributes.reference.map((refItem: any, index: number) => (<ReferenceItem data={refItem} key={index} />)) :
                        referenceData.map((refItem: any, index: number) => (
                            <div key={index} className="flex gap-4 px-2">
                                {refItem[0] &&
                                    <ReferenceItem data={refItem[0]} />
                                }
                                {refItem[1] &&
                                    <ReferenceItem data={refItem[1]} />
                                }
                                {refItem[2] &&
                                    <ReferenceItem data={refItem[2]} />
                                }
                            </div>
                        ))
                    }
                </SwipeableViews>
                {activeStep < referenceData.length - 1 && !isMobile ? (
                    <Icon className="fill-white text-[3rem] cursor-pointer my-auto" onClick={handleNext} icon="material-symbols:arrow-forward" />
                ) : <div className="w-[45px]" />}
            </div>
        </div>);
}

export default References

