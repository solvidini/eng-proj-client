import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='footer' ref={props.footerRef}>
      <div className='footer__top'>
        <div className='footer__top-item'>
          <h4>Kontakt z twórcą systemu:</h4>
          <a target='_blank' rel='noopener noreferrer' href='mailto:samuel@front-up.pro'>
            <FontAwesomeIcon icon='envelope' />
            &nbsp;samuel@front-up.pro
          </a>
        </div>
        <div className='footer__top-item'>
          <h4>Strona twórcy systemu:</h4>
          <a target='_blank' rel='noopener noreferrer' href='http://front-up.pro/'>
            <FontAwesomeIcon icon='link' />
            &nbsp;front-up.pro
          </a>
        </div>
        <div className='footer__top-item'>
          <h4>Uwzględnione firmy:</h4>
          <div className='footer__top-group'>
            <a target='_blank' rel='noopener noreferrer' href='https://mera.eu/'>
              Mera
            </a>
            <a target='_blank' rel='noopener noreferrer' href='http://projektw.pl/'>
              Projekt&nbsp;W
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://homeconcept.com.pl/katowice/'>
              Home&nbsp;Concept
            </a>
          </div>
          <div className='footer__top-group'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.ikea.com/pl/pl/'>
              IKEA
            </a>
            <a target='_blank' rel='noopener noreferrer' href='http://www.fizia.pl/'>
              Fizia
            </a>
            <a target='_blank' rel='noopener noreferrer' href='http://www.pracownia-button.pl/'>
              Button
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.elmax.tychy.pl/'>
              Elmax
            </a>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <span>
          Samuel Kędziora &copy; <b>{currentDate}</b>
        </span>
        <span>System Wyszukiwania Produktów i Usług</span>
      </div>
    </footer>
  );
};

export default Footer;
