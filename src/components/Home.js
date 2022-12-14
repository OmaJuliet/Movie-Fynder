import React from 'react';
import HomeResult from "./HomeResult";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("Form is not yet active")
}


const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  }


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e151942b4b4464f46b486954bfdd9251&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=e151942b4b4464f46b486954bfdd9251&query=";


const Home = () => {
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
          toast(error)
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
    <>
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
        <div className="flex flex-wrap justify-between mb-4 mt-4">
          <p className="lg:mb-0 mb-4 text-orange-500 font-bold text-xl">Movie Fynder</p>
          <div>
            <Link to="/"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Trending</button></Link>
            <Link to="/2021"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Year 2021</button></Link>
            <Link to="/2022"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Year 2022</button></Link>
            <Link to="/gallery"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Gallery</button></Link>
          </div>
          <input type="search" value={search} onChange={changeTheSearch} placeholder="Search Movie" className="lg:w-1/4 w-full mt-4 lg:mt-0 rounded text-grey-700 p-2 border-2 border-black" />
        </div>
        {
          movies.length === 0
            ?
            <motion.div className="text-center flex m-auto mt-12 w-4 h-4 rounded-full bg-red-400" variants={loaderVariants} animate="animationOne"></motion.div>
            :
            <HomeResult movies={movies} />

        }
      </div>
      <ToastContainer />
      </>
  )
}

export default Home