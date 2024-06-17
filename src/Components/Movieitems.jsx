import React, { useState } from 'react';
import { createImageUrl } from '../services/movieServices';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from "../services/fireBase";
import { UserAuth } from '../Context/AuthContext';

const Movieitems = ({ movie }) => {
  const [like, setLike] = useState(false);

  const { user } = UserAuth();
  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDocRef = doc(db, 'users', userEmail);
 
        setLike(!like);
        await updateDoc(userDocRef,{
          favShows:arrayUnion({...movie})
        });
   
    } else {
      alert("Login to save a movie");
    }
  };
  
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img className="w-full h-40 block object-cover object-top" src={createImageUrl(backdrop_path ?? poster_path, 'w500')} alt={title} />
      <div className="absolute top-0 left-0 w-full h-60 bg-black/80 opacity-0 hover:opacity-100 text-white ">
        <p className="flex justify-center whitespace-normal text-xs md:text-sm items-center">{movie.title.length>10?movie.title.slice(0,15) +"...":movie.title}</p>
        <p onClick={markFavShow} className="cursor-pointer">{like ? (<FaHeart size={20} className="absolute top-2 left-2 text-gray-200" />) : (<FaRegHeart size={20} className="absolute top-2 left-2 text-gray-200" />)}</p>
      </div>



    </div>
  );
}

export default Movieitems;
