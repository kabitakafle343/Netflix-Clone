import React from 'react'
import Hero from '../Components/Hero'

import Movierows from '../Components/Movierows.jsx'
import endpoints from '../services/movieServices.js'
const Home = () => {
  return (
   <>
    <Hero/>

<Movierows title="upcoming" url={endpoints.upcoming}/>
<Movierows  title="trending" url={endpoints.trending}/>
<Movierows  title="topRated" url={endpoints.topRated}/>
<Movierows  title="comedy" url={endpoints.comedy}/>
<Movierows  title="popular" url={endpoints.popular}/>



   </>
  )
}

export default Home