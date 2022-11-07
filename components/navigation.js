import * as React from "react"
import Hamburger from "../components/hamburger";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => (
  <div className="relative px-2 h-[90px] mx-auto flex justify-between items-center">
    <Link className="block pt-6" href="/">
      <Image
          src="https://letsgrow-images.s3.eu-north-1.amazonaws.com/logo_30047b8d92.png?updated_at=2022-11-04T23:33:19.805Z"
          alt="letsgrow lofo"
          width={150}
          height={60}
      />
    </Link>
    <div className="flex items-center">
      <div className="font-primary font-black text-white text-2xl pr-6">51 51 77 83</div>
      <Hamburger />
    </div>
  </div>
)

export default Navigation
