# System Wyszukiwania Produktów i Usług

System Wyszukiwania Produktów i Usług został stworzony na potrzeby pracy
inżynierskiej. Jego działanie polega na zbieraniu podstawowych
informacji o produktach i usługach, a następnie agregacji ich w jednej
bazie danych. Następnie użytkownik korzystający z systemu może za pomocą
wyszukiwarek dostępnych w zakładkach PRODUKTY oraz USŁUGI wyszukać
interesujące go informacje. Dzięki temu nie trzeba szukać i przęglądać
każdej strony z interesujących nas firm osobno.

## Działanie

System dzieli się na 3 częsci. Obecna część to interfejs użytkownika
odpowiedzialna za obsługę systemu. Poza nim są jeszcze 2 mikroserwisy.
Jednym z nich jest API odpowiedzialne za komunikację z interfejsem
użytkownika. To do niego wysyłane są wszelkie żądania odpowiedzialne za
pobór odpowiednich danych z bazy. Drugi to kolektor danych, który
pozyskuje dane ze stron HTML i zapisuje je na serwerze oraz w bazie
danych.

## Technologie

Główne technologie użyte przy tworzeniu systemu:

1. Front End

- React
- Sass

2. API

- Node.js
- Express.js
- MongoDB

3. Data Collector

- Node.js
- MongoDB
- Puppeteer
- Cheerio

&other

## Live

http://swpiu.front-up.pro/

## Author

Samuel Kędziora
