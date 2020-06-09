import React from 'react';

import Logo from '../components/Logo';

import userManual1 from '../assets/images/user-manual1.png';

const Home = (props) => {
  return (
    <section className="section-home">
      <div className="home-logo">
        <Logo />
      </div>
      <div className="home">
        <article className="home__about">
          <h1 className="home__article-title">Krótko o systemie</h1>
          <p>
            <span className="home__article-highlight">
              System Wyszukiwania Produktów i Usług
            </span>{' '}
            został stworzony na potrzeby pracy inżynierskiej. Jego
            działanie polega na zbieraniu podstawowych informacji o
            produktach i usługach, a następnie agregacji ich w jednej
            bazie danych. Następnie użytkownik korzystający z systemu
            może za pomocą wyszukiwarek dostępnych w zakładkach{' '}
            <span className="home__article-highlight">PRODUKTY</span>{' '}
            oraz <span className="home__article-highlight">USŁUGI</span>{' '}
            wyszukać interesujące go informacje. Dzięki temu nie trzeba
            szukać i przęglądać każdej strony z interesujących nas firm
            osobno.
          </p>
        </article>
        <article className="home__user-manual">
          <h1 className="home__article-title">Instrukcja obsługi</h1>
          <p>
            został stworzony na potrzeby pracy inżynierskiej. Jego
            działanie polega na zbieraniu podstawowych informacji o
            produktach i usługach, a następnie agregacji ich w jednej
            bazie danych.
          </p>
          <img
            src={userManual1}
            className="home__image"
            alt="Instrukcja Obsługi 1"
          />
        </article>
      </div>
    </section>
  );
};

export default Home;
