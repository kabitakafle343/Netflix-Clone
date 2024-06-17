import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movieitems from './Movieitems';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Movierows = ({ title, url }) => {
  const rowId = Math.floor(Math.random() * 1000);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="text-5xl text-cyan-300 p-4 capitalize md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={() => slide(-500)} size={20} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 hidden z-10 group-hover:block cursor-pointer" />
        <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie) => (
            <Movieitems key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight onClick={() => slide(500)} size={20} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 hidden z-10 group-hover:block cursor-pointer" />
      </div>
    </>
  );
};

export default Movierows;
