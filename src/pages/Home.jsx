import React from 'react'
import {Articles, Banner, Categories, Discounts, FeaturedBook, Footer, Navbar, NewReleases, NewsLetter} from "../components"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <NewReleases />
      <FeaturedBook />
      <Discounts />
      <NewsLetter />
      <Articles />
      <Footer />
      
    </div>
  )
}

export default Home