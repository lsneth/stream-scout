import displayShows from './displayResults.js'

const searchForm = document.getElementById('search-form')
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  displayShows(e.target.showType.value, e.target.searchQuery.value)
  document.getElementById('hero').remove()
})
