import * as React from "react";
import Image from 'next/image';

const Footer = () => (
  <div>
    <div className="footer-bg__container">
      <div className="footer-bg">
        <svg width="2400" height="850" viewBox="0 0 1000 850" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1428.5 903.943L1428.5 0.000244751L1198.5 0.000264858C898.994 0.000291042 797.361 77.5947 392.002 77.5947C126.958 77.5947 -559 0.000235399 -559 0.000235399L-559 903.943L1428.5 903.943Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="692.5" y1="843" x2="938.509" y2="-14.3189" gradientUnits="userSpaceOnUse">
              <stop stopColor="#659DA4" />
              <stop offset="1" stopColor="#304E76" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
    <footer className="footer">
      <div className="footer__col">
        <h4 className="footer__header">Toke Lindholm Hølledig:</h4>
        <p>Med baggrund i min uddannelse og mangeårig karriereerfaring med salg, vil jeg gerne bidrage til at virksomheder vokser med fokus på fundamentale salgsprocesser og kundetilfredshed. Denne proces har altid motiveret mig og er en konstant læring. Det er grunden til, jeg gør hvad jeg gør, og har stiftet <strong>LETSGROW.SALE</strong></p>
        <div className="flex mt-4">
        <Image
          src="https://letsgrow-images.s3.eu-north-1.amazonaws.com/toke_afc7794993.png?updated_at=2022-11-02T09:55:21.568Z"
          alt="toke"
          width={120}
          height={120}
        />
        <Image
          src="https://letsgrow-images.s3.eu-north-1.amazonaws.com/logo_vi_stoetter_julehjaelpen_fd143a324c.png?updated_at=2022-11-02T09:55:20.212Z"
          alt="julehjaelp"
          width={120}
          height={120}
        />
        </div>
        
      </div>
      <div className="footer__col">
        <h4 className="footer__header">Virksomhed:</h4>
        <span>LETSGROW ApS</span>
        <h4 className="footer__header">CVR:</h4>
        <span>42231371</span>
        <h4 className="footer__header">Besøgsadresse:</h4>
        <span>Næsseslottet, Dronninggårds alle 136, 2840 Holte</span>
        <h4 className="footer__header">Sydbank:</h4>
        <span>Regnr.: 7117 Kontonr.: 0001446942</span>
      </div>
      <div className="footer__col">
        <h4 className="footer__header">Sociale medier:</h4>
        <span><a href="https://www.linkedin.com/in/tokeholledig/" target="_blank" rel="noreferrer">LinkedIn</a></span>
        <h4 className="footer__header">Direkte kontakt:</h4>
        <span>(+45) 51517783</span>
        <h4 className="footer__header">Telefontid:</h4>
        <span>24/7</span>
        <h4 className="footer__header">Mail:</h4>
        <span><a href="mailto:toke@letsgrow.sale">toke@letsgrow.sale</a></span>
        <div className="credit-link">
          <a href="https://www.freepik.com/vectors/business" target="_blank" rel="noreferrer">Business vector created by stories - www.freepik.com</a><br />
          <a href="https://www.freepik.com/vectors/infographic" target="_blank" rel="noreferrer">Other vectors created by pch.vector - www.freepik.com</a>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
