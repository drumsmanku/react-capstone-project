const API_KEY = '6bf1dd2c1c01b0760e553d848ab21e5c';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`, 
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`, 
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35s`, 
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;