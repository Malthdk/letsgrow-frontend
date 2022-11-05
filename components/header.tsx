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
        {/* <div className="header-bg">
          <svg width="2400" height="500" viewBox="0 0 1000 509" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-314 0V368.696C-314 368.696 -88.7953 509 327.492 509C743.78 509 676.511 382.318 1192.24 382.318C1707.97 382.318 1901 283.787 1901 283.787V0H-314Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="511.75" y1="290.598" x2="656.878" y2="-315.784" gradientUnits="userSpaceOnUse">
                <stop stopColor="#46749E" />
                <stop offset="1" stopColor="#659DA4" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>
      <header className="max-w-screen-lg w-full mx-auto">
        <Navigation />
        <div className="flex flex-col md:flex-row md:h-[500px] items-center ">
        <div className="pr-4 md:w-[85%]">
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
