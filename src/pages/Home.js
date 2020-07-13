import React from 'react';

import Logo from '../components/Logo';

const Home = (props) => {
  return (
    <section className="section-home">
      <div className="home-logo">
        <Logo />
      </div>
      <ol className="home">
        <li className="home__item">
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
            szukać i przeglądać każdej strony z interesujących nas firm
            osobno.
          </p>
        </li>
        <li className="home__item">
          <h1 className="home__article-title">Instrukcja obsługi</h1>
          <ul>
            <li>
              Pole wyszukiwania - zaznaczone na{' '}
              <span className="home__article-highlight">Rys. 1</span>{' '}
              czerwoną prostokątną ramką - służy do wyszukiwania
              obiektów znajdujących się w bazie. W polu wpisujemy
              słowa kluczowe oddzielając je przecinkiem. Algorytmy
              wyszukiwania będą dobierać odpowiednie obiekty zawierające
              w sobie te słowa. Jeśli jednak chcemy wyszukać obiekty
              zawierające dokładnie wpisywane słowo, wtedy na końcu tego
              słowa dodajemy symbol gwiazdki&nbsp;"*".
              <div className="home__image home__image--1"></div>
              <div className="home__image-label">
                <span className="home__article-highlight">Rys. 1.</span>{' '}
                Pole wyszukiwania
              </div>
            </li>
            <li>
              Pole dynamicznej paginacji - zaznaczone na{' '}
              <span className="home__article-highlight">Rys. 2</span>{' '}
              czerwoną prostokątną ramką - służy do określenia ile
              maksymalnie obiektów ma zostać wyświetlonych na stronie.
              Domyślnie wyświetlanych jest 5 obiektów. Jeśli chcemy
              zmienić tą wartość należy podać liczbę z przedziału od 1
              do&nbsp;30.
              <div className="home__image home__image--2"></div>
              <div className="home__image-label">
                <span className="home__article-highlight">Rys. 2.</span>{' '}
                Pole dynamicznej paginacji
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default Home;
