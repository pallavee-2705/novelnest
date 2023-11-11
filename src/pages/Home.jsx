import React from 'react'
import {Articles, Banner, Categories, Discounts, FeaturedBook, NewReleases, NewsLetter} from "../components"

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <NewReleases />
      <FeaturedBook />
      <Discounts />
      <NewsLetter />
      <Articles />
      
    </div>
  )
}

export default Home