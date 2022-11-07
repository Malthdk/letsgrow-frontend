import * as React from "react"
import { Carousel } from 'react-responsive-carousel';

const References = () => {
      return (
      <div className="content content--full-width content--alt-color">
          <h1 className="content-title text-center">Vores kunder siger:</h1>
          <div className="max-w-2xl w-full mx-auto flex items-center">
            
          <Carousel autoPlay={false} infiniteLoop={true} showIndicators={true} showThumbs={false} showStatus={false} interval={8000} >
          <iframe className="rounded-xl" src="https://www.videoask.com/anl1fozc5ecxzlaq24z0w9mruhhn2mr6inrogaw3" allow="encrypted-media *; fullscreen *;" width="100%" height="500px"></iframe>
          <iframe className="rounded-xl" src="https://www.videoask.com/atsqddzwtmpa30mbm179ob2iu0z090m6etgs7cao" allow="autoplay *; encrypted-media *; fullscreen *;" width="100%" height="500px"></iframe>
            </Carousel>
          </div>
      </div>)
}

export default References

