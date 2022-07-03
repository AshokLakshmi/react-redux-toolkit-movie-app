//----------import tmdb api key----------
import { API_KEY } from "./apiKey";

//----------tmdb base url----------
const BASE_URL = "https://api.themoviedb.org/3";

// ------------get Movie & Tv Series url--------------------------
export const URL_ALL_MOVIE = `${BASE_URL}3/discover/movie`;
export const URL_ALL_TV = `${BASE_URL}3/discover/tv`;
//-------- get trending------
//-----------------------/trending/{all,movie,tv,person}/{week,day}/--------
export const URL_ALL_TRENDING = `${BASE_URL}/trending/all/day?${API_KEY}`;

//--------------------search methods--------------
// in a single request search for movie tv & person
export const URL_ALL_SEARCH = `${BASE_URL}/search/multi?${API_KEY}&query=`;
//------by actor name-------
export const URL_SEARCH_BY_PERSON = `${BASE_URL}/search/person?${API_KEY}&query=`;
//------by series name-------
export const URL_ALL_TV_SEARCH = `${BASE_URL}search/tv?${API_KEY}&query=`;
//------by movie name-------
export const URL_ALL_MOVIE_SEARCH = `${BASE_URL}search/movie?${API_KEY}&query=`;

//----------get movie & tv poster with ${poster_path}
export const URL_POSTER_IMG = "https://image.tmdb.org/t/p/";

// --------------url youtube trailer---------
export const URL_YOUTUBE = "https://www.youtube.com/embed/";

export const URL_CAST = "/casts";
export const URL_VIDEO = "/videos";
export const IMG_SIZE_XSMALL = "w45/";
export const IMG_SIZE_SMALL = "w150/";
export const IMG_SIZE_LARGE = "w342/";
export const CAST_MAX_NUM = 5;
export const TRAILER_MAX_NUM = 3;

// function to fetch movie,tv list

const basicFetch = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();
  return json;
};

//

export default {
  getHomeList: async () => {
    return [
      {
        id: 213,
        title: "Netflix originals",
        items: await basicFetch(
          `${BASE_FOR_TV}?with_networks=213&${COMMON_KEYS}`
        ),
      },
      {
        id: 28,
        title: "Tranding Movie Weekly",
        items: await basicFetch(
          `${API_BASE}/trending/movie/week?api_key=${API_KEY}`
        ),
      },
      {
        id: 28,
        title: "Tranding Movie dayily",
        items: await basicFetch(
          `${API_BASE}/trending/movie/day?api_key=${API_KEY}`
        ),
      },
      {
        id: 28,
        title: "Tranding Movie Weekly",
        items: await basicFetch(
          `${API_BASE}/trending/person/week?api_key=${API_KEY}`
        ),
      },
      {
        id: 28,
        title: "Action",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=28&${COMMON_KEYS}`
        ),
      },
      {
        id: 12,
        title: "Adventure",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=12&${COMMON_KEYS}`
        ),
      },
      {
        id: 16,
        title: "Animation",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=16&${COMMON_KEYS}`
        ),
      },
      {
        id: 35,
        title: "Comedy",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=35&${COMMON_KEYS}`
        ),
      },
      {
        id: 80,
        title: "Crime",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=80&${COMMON_KEYS}`
        ),
      },
      {
        id: 99,
        title: "Documentary",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=99&${COMMON_KEYS}`
        ),
      },
      {
        id: 18,
        title: "Drama",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=18&${COMMON_KEYS}`
        ),
      },
      {
        id: 10751,
        title: "Family",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=10751&${COMMON_KEYS}`
        ),
      },
      {
        id: 14,
        title: "Fantasy",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=14&${COMMON_KEYS}`
        ),
      },
      {
        id: 36,
        title: "History",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=36&${COMMON_KEYS}`
        ),
      },
      {
        id: 27,
        title: "Horror",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=27&${COMMON_KEYS}`
        ),
      },
      {
        id: 10402,
        title: "Music",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=10402&${COMMON_KEYS}`
        ),
      },
      {
        id: 9648,
        title: "Mystery",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=9648&${COMMON_KEYS}`
        ),
      },
      {
        id: 10749,
        title: "Romance",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=10749&${COMMON_KEYS}`
        ),
      },
      {
        id: 878,
        title: "Sc-Fi",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=878&${COMMON_KEYS}`
        ),
      },

      {
        id: 53,
        title: "Thriller",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=53&${COMMON_KEYS}`
        ),
      },
      {
        id: 10752,
        title: "War",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=10752&${COMMON_KEYS}`
        ),
      },
      {
        id: 37,
        title: "Western",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=37&${COMMON_KEYS}`
        ),
      },
      {
        id: 10770,
        title: "TV Movie",
        items: await basicFetch(
          `${BASE_FOR_MOVIES}?with_genres=10770&${COMMON_KEYS}`
        ),
      },
    ];
  },
};
