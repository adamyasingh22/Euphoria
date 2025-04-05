import React from 'react';
import Carousel from './containers/Home/Carousel';
import Deals from './containers/Home/Deals';
import NewArrivals from './containers/Home/NewArrivals';
import Banner from './containers/Home/Banner';
import CateoriesMen from './containers/Home/CategoriesMen';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Deals />\
      <NewArrivals />
      <Banner />
      <CateoriesMen />
    </div>
  );
}
