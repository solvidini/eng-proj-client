# System Wyszukiwania Produktów i Usług

System Wyszukiwania Produktów i Usług został stworzony na potrzeby pracy
inżynierskiej. Jego działanie polega na zbieraniu podstawowych
informacji o produktach i usługach, a następnie agregacji ich w jednej
bazie danych. Następnie użytkownik korzystający z systemu może za pomocą
wyszukiwarek dostępnych w zakładkach PRODUKTY oraz USŁUGI wyszukać
interesujące go informacje. Dzięki temu nie trzeba szukać i przęglądać
każdej strony z interesujących nas firm osobno.

## Działanie

System dzieli się na 3 główne częsci. Obecna część to interfejs użytkownika odpowiedzialna za interakcję użytkownika z systemem. Poza samym interfejsem są również 2 mikroserwisy.
Jednym z nich jest API odpowiedzialne za komunikację z interfejsem użytkownika. To do niego wysyłane są wszelkie żądania odpowiedzialne za pobór odpowiednich danych z bazy. Ponadto został tu napisany autorski algorytm wyszukiwania danych oparty o wyrażenia regularne. Algorytm ten wyodrębnia podstawy słów kluczowych i na bazie ich logicznej kombinacji wyszukuje odpowiednie dane.
Drugi mikroserwis to kolektor danych, który pozyskuje informacje i zdjęcia z różnych stron internetowych i zapisuje je w plikach na serwerze oraz w zewnętrznej bazie danych. Ta część odpowiada również za progresywną aktualizację oraz usuwanie nieaktualnych danych.

## Technologie

Główne technologie użyte przy tworzeniu systemu:

### 1. Front End

- React
- Sass

### 2. API

- Node.js
- Express.js
- Mongoose
- Diacritic Regex

### 3. Data Collector

- Node.js
- Mongoose
- Puppeteer
- Cheerio
- Node Image Downloader
- Node Schedule

### 4. Database

- MongoDB

## Live

http://swpiu.samuelk.pl/

## Author

Samuel Kędziora
