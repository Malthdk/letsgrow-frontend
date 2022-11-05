import * as React from "react"

const Hamburger = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a href="#modebooking"><li>Mødebooking</li></a>
        <a href="#salgsproces"><li>Salgsproces</li></a>
        <a href="#crm"><li>Kundestyringssystem</li></a>
        <a href="#markedsdata"><li>Unik Markedsdata</li></a>
      </ul>
    </div>
  </nav>
)


export default Hamburger
