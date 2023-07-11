import { getWatchProviders, getBackdropImage } from './services.js'

const LOGO_IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
})

async function showTemplate() {
  return `
  <div id='showHeader'>
    <div class='backdropImageGradient'>
      <img class='backdropImage' src='${await getBackdropImage(PARAMS.showType, PARAMS.showId)}'/>
    </div>
    <img id='posterImage' src='${PARAMS.imageUrl}'/>
    <h1 id='title'>${PARAMS.title}</br>${PARAMS.releaseYear}</h1>
  </div>

  <div id="flatrate">
    <h2>Stream</h2>
  </div>
  <div id="rent">
    <h2>Rent</h2>
  </div>
  <div id="buy">
    <h2>Buy</h2>
  </div>

  <button onclick='location.href="index.html";' class="button">Search Again</button>
  `
}

async function displayShow() {
  document.querySelector('title').textContent = `${PARAMS.title} | Stream Scout`
  document.querySelector('body').insertAdjacentHTML('afterbegin', await showTemplate())
  displayProviders()
}

async function displayProviders() {
  const providers = await getWatchProviders(PARAMS.showType, PARAMS.showId)
  const watchTypes = ['flatrate', 'rent', 'buy']

  watchTypes.map((watchType) => {
    const watchTypeProviders = providers[watchType]
    if (watchTypeProviders) {
      watchTypeProviders.map((provider) => {
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', `${LOGO_IMAGE_URL}${provider.logo_path}`)
        imageEl.setAttribute('style', 'padding:10px 10px 50px')
        imageEl.setAttribute('class', 'providerLogo')
        document.querySelector('#' + watchType).append(imageEl)
      })
    } else {
      const noneEl = document.createElement('p')
      noneEl.textContent = 'Not Available'
      document.querySelector('#' + watchType).append(noneEl)
    }
  })
}

displayShow()
