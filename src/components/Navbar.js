import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e151942b4b4464f46b486954bfdd9251&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=e151942b4b4464f46b486954bfdd9251&query=";


const Navbar = () => {
    const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )
  return (
    <div className="flex flex-wrap justify-between mb-4 mt-4">
          <p className="lg:mb-0 mb-4 text-orange-500 font-bold text-xl">Movie Fynder</p>
          <div>
            <Link to="/"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Trending</button></Link>
            <Link to="/2021"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Year 2021</button></Link>
            <Link to="/2022"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">year 2022</button></Link>
            <Link to="/gallery"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Gallery</button></Link>
          </div>
          <input type="search" value={search} onChange={changeTheSearch} placeholder="Search Movie" className="lg:w-1/4 w-full mt-4 lg:mt-0 rounded text-grey-700 p-2 border-2 border-black" />
        </div>
  )
}

export default Navbar