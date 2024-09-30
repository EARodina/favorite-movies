# Interview Management

<img src="https://github.com/ENelyubova/favorite-movies/blob/master/app.png">

## Tech Stack

**Vue 3**
**Pinia**

# Getting Started

First you need an API key from <a  target="_blank" href="https://kinopoiskdev.readme.io/reference/%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-%D0%B8-%D1%82%D0%B4">kinopoiskdev</a>, you can get one by creating an account on their website.
After you got your API key:

- go to `/stores/SearchStore.js`
- replace `YOUR_KEY` to your API, like this

```dart
const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-KEY': 'YOUR_KEY'}};
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
