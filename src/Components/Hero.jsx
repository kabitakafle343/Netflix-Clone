import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
      setLoading(false);
    });
  }, [endpoints.popular]); // add endpoints.popular as dependency

  if (loading) {
    return <p>fetching....................</p>;
  }

  const truncateFunc = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };
  

  const {title,backdrop_path,release_date,overview}=movie;
  return (
 <>
 <div className="w-full h-[550px] lg:h-[590px]">
<div className="w-full h-full"> 
<div className="absolute w-full h-[550px] lg:h-[590px] bg-gradient-to-r from-black" /> 
<img className="w-full h-full object-cover object-top" src={createImageUrl(backdrop_path,"original")}  alt={title} />
<div className=" p-4 absolute w-full top-[20%] lg:top-[25%]  md:p-8"><h1 className="text-3xl md:text-6xl font-bold text-cyan-500">{title}</h1>
<div className="mt-8 mb-4 "><button className="text-black capitalize border bg-gray-300  py-2 px-5 ">play</button>
<button className="text-white capitalize border border-gray-300 py-2 px-5 ml-4">watch later</button></div>
<p className="text-gray-400 text-sm ">{release_date}</p>
<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] text-gray-200">{truncateFunc(overview,390)}</p>
</div>

</div>
</div>

 </>
  )
}

export default Hero
// w-full h-full