import React from 'react';
import Carousel from '../containers/Home/Carousel';
import Deals from '../containers/Home/Deals';
import NewArrivals from '../containers/Home/NewArrivals';
import Banner from '../containers/Home/Banner';
import CategoriesMen from '../containers/Home/CategoriesMen';
import CategoriesWomen from '../containers/Home/CategoriesWomen';
import LimeLightDeals from '../containers/Home/LimeLightDeals';
import BrandDeals from '../containers/Home/BrandDeals';
import BigSavingDays from '../containers/Home/BigSavingDays';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Deals />
      <NewArrivals />
      <BigSavingDays />
      <Banner />
      <CategoriesMen />
      <CategoriesWomen />
      <BrandDeals />
      <LimeLightDeals />
    </div>
  );
}
