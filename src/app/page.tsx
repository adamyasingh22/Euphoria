import React from 'react';
import Carousel from './containers/Home/Carousel';
import Deals from './containers/Home/Deals';
import NewArrivals from './containers/Home/NewArrivals';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Deals />\
      <NewArrivals />
    </div>
  );
}
