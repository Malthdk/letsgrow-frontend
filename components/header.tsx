import * as React from "react"
import Navigation from "./navigation";
import Video from "./video"
import { useInView } from 'react-intersection-observer';
import ContactSvg from "../svg/conversation";

interface Header {
  headline: string;
  button: string;
}

const Header = ({ header }: any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div>
      <div className="header-bg__container">
      </div>
      <header className="max-w-screen-lg w-full mx-auto">
        <Navigation />
        <div className="flex p-2 flex-col md:flex-row md:h-[500px] items-center ">
        <div className="pr-4 md:w-[85%] pt-4 md:pt-0">
          <div  dangerouslySetInnerHTML={{ __html: header.attributes.headline}}></div>

          <a className={`button call-to-action-btn ${inView ? "header-button-active" : "c2a-button-active"}`} href="https://outlook.office365.com/owa/calendar/LETSGROW@letsgrow.sale/bookings/" target="_blank" rel="noreferrer">
            <span className={`button-text ${inView ? "" : "hide"}`}>{header.attributes.button}</span>
            <span className={`button-svg ${inView ? "hide" : ""}`}><ContactSvg props={inView ? "" : "active"} /></span>
          </a>

          <div ref={ref}></div>

        </div>
        <div className="md:w-[45%]">
          <Video
            videoSrcURL="https://www.youtube.com/embed/WjBZlUaVemY?autoplay=1&mute=1&cc_load_policy=1&rel=0&modestbranding=1"
            videoTitle="LetsGROW intro video"
            width="100%"
            height="250px"
          />
        </div>
        </div>
      </header>

    </div>
  )
}

export default Header
