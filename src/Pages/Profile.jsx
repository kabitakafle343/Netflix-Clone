import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from '../Context/AuthContext';
import { db } from '../services/fireBase';
import { createImageUrl } from '../services/movieServices';
import { onSnapshot, doc } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.exists()) {
          setMovies(doc.data().favShows);
        }
      });
      return () => unsubscribe();
    }
  }, [user?.email]);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += offset;
  }

  if (!user) {
    return (
      <>
        <p>fetching movies..........</p>
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <img className="block w-full object-cover h-[500px]" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/8a8e0c65-6d0f-4aae-bb8f-28ee225f5d6c/NP-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='img' />
        </div>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]">
          <div className="absolute top-[20%] p-4 md:p-8">
     
         
          </div>
        </div>
       
        <h1 className="text-5xl text-cyan-300 p-4 capitalize md:text-xl">Fav shows</h1>
        <p className="font-light text-gray-400 text-lg mx-4">email:{user.email}</p>
        <div className="relative flex item-center group">
          <MdChevronLeft onClick={() => slide(-500)} size={20} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 hidden z-10 group-hover:block cursor-pointer" />
          <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map(({ id, title, backdrop_path, poster_path }) => (
              <div key={id} className="relative w-[160px] sm:w-[200px] md:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
                <img className="w-full h-40 block object-cover object-top" src={createImageUrl(backdrop_path || poster_path, 'w500')} alt={title} />
                <div className="absolute top-0 left-0 w-full h-60 bg-black/80 opacity-0 hover:opacity-100 text-white ">
                  <p className="flex justify-center whitespace-normal text-xs md:text-sm items-center">{title}</p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 hidden z-10 group-hover:block cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Profile;
