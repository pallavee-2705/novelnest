import React from 'react'
import {Articles, Banner, Categories, Discounts, FeaturedBook, NewReleases, NewsLetter, MobileBanner} from "../components"

const Home = () => {
  return (
    <div>
      <MobileBanner />
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