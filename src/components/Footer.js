import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer" ref={props.footerRef}>
      <div className="footer__top">
        <div className="footer__top-item">
          <h4>Kontakt z twórcą systemu:</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contact@samuelk.pl"
          >
            <FontAwesomeIcon icon="envelope" />
            &nbsp;contact@samuelk.pl
          </a>
        </div>
        <div className="footer__top-item">
          <h4>Strona twórcy systemu:</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://samuelk.pl/"
          >
            <FontAwesomeIcon icon="link" />
            &nbsp;samuelk.pl
          </a>
        </div>
        <div className="footer__top-item">
          <h4>Uwzględnione firmy:</h4>
          <div className="footer__top-group">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mera.eu/"
            >
              mera
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ikea.com/pl/pl/"
            >
              ikea
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.fizia.pl/"
            >
              fizia
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://projektw.pl/"
            >
              Projekt&nbsp;W
            </a>
          </div>
          <div className="footer__top-group"></div>
        </div>
      </div>
      <div className="footer__copyright">
        <span>
          Samuel Kędziora &copy; <b>{currentDate}</b>
        </span>
        <span>System Wyszukiwania Produktów i Usług</span>
      </div>
    </footer>
  );
};

export default Footer;
