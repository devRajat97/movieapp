import {useEffect} from 'react'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/const';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovie = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_Options
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(() => {
        getNowPlayingMovie();
      }, []);
}

export default useNowPlayingMovies
