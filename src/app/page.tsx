import React from 'react';
import Carousel from './containers/Home/Carousel';
import Deals from './containers/Home/Deals';
import NewArrivals from './containers/Home/NewArrivals';
import Banner from './containers/Home/Banner';
import CategoriesMen from './containers/Home/CategoriesMen';
import CategoriesWomen from './containers/Home/CategoriesWomen';
import LimeLightDeals from './containers/Home/LimeLightDeals';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Deals />\
      <NewArrivals />
      <Banner />
      <CategoriesMen />
      <CategoriesWomen />
      <LimeLightDeals />
    </div>
  );
}
