// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23381f9d606c6cff00c6543b3446c4ad&page=1'

// const imgPath = 'https://image.tmdb.org/t/p/w1280'

// const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=23381f9d606c6cff00c6543b3446c4ad&query=" '

// const form = document.getElementById('form')
// const main = document.getElementById('main')
// const search = document.getElementById('search')

// getMovies(apiUrl)

// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()

//     showMovies(data.results)
// }

// function showMovies(movies) {
//     // MediaInfo.innerHTML = ''
//     movies.forEach(movie => {
//         const { title, poster_path, vote_average, overview } = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
//         <img src='${imgPath + poster_path}' alt='${title}'>
//         <div class='movie-info'>
//         <h3>${title}</h3>
//         <div class='overview'>
//         <h3>Overview</h3>
//         ${overview}
//         </div>
//         </div>
//         `

//         main.appendChild(movieEl)
//     })
// }

// function getRate(vote) {
//     if(vote >= 8) {
//         return 'green'
//     } else if(vote >= 5) {
//         return 'orange'
//     } else {
//         return 'red'
//     }
// }

// ===============================================================================================================================================================

const apiUrl =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/&api_key=c2d174569fef0a8f47248b0950000403&page=1'

const imgPath = 'https://image.tmdb.org/t/p/w1280'
const searchApi =
  'https://api.themoviedb.org/3/search/movie?api_key=c2d174569fef0a8f47248b0950000403&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Get initial movies
getMovies(apiUrl)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
            <img src="${imgPath + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getRate(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>overview</h3>
               ${overview}
            </div>
        `

        main.appendChild(movieEl)
  })
}

function getRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(searchApi + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})



// ===================OMDB===================================

// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=28265795'
