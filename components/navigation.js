import * as React from "react"
import Hamburger from "../components/hamburger";
import Image from "next/image";

const Navigation = () => (
  <div className="relative h-[90px] mx-auto flex justify-between items-center">
    <a className="block pt-6" href="/">
      <Image
          src="https://letsgrow-images.s3.eu-north-1.amazonaws.com/logo_30047b8d92.png?updated_at=2022-11-04T23:33:19.805Z"
          alt="letsgrow lofo"
          width={150}
          height={60}
      />
    </a>
    <div className="flex items-center">
      <div className="headline text-xl pt-7 pr-6">51 51 77 83</div>
      <Hamburger />
    </div>
  </div>
)

export default Navigation
