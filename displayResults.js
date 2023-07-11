import { getShowData } from './services.js'

// takes a list of movies/tv shows and displays each one in the list
export default async function displayShows(showType, searchQuery) {
  removeResults()

  const shows = await getShowData(showType, searchQuery)
  const noResultsStrings = [
    // TODO: add more funny strings haha
    "Sorry, we don't have any matches for your imaginary movie! Care to search for something, you know, real? ;)",
    'Second grade spelling bee champ you were not. Try again, you must. ;)',
    "Well that's embarrasing... for you! What do you think this is a spell checker? ;)",
  ]

  if (shows.length > 0) {
    shows.map((show) => {
      if (show.poster_path) {
        // if it isn't mainstream enough to have a cover, I'm not going to mess with styling it
        document.querySelector('body').insertAdjacentHTML('beforeend', showTemplate(show, showType) ?? '')
      }
    })
  } else {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<p id="noResultsString">${noResultsStrings[Math.floor(Math.random() * noResultsStrings.length)]}</p>`)
  }

  document.activeElement.blur() // remove focus from search bar
}

function showTemplate(show, showType) {
  const image = `https://image.tmdb.org/t/p/w300${show.poster_path}`
  return `
      <a href='show.html?showId=${show.id}&showType=${showType}&title=${showType === 'tv' ? show.name : show.original_title}&releaseYear=${showType === 'tv' ? show.first_air_date.slice(0, 4) : show.release_date.slice(0, 4)}&imageUrl=${image}' class='show'>
        <img src='${image}'/>
      </a>
    `
}

// removes search results
function removeResults() {
  if (document.querySelector('.show') || document.querySelector('#noResultsString')) {
    document.querySelectorAll('.show')?.forEach((show) => show.remove())
    document.querySelector('#noResultsString')?.remove()
  }
}
