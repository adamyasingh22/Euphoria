'use client';
import Banner from './Banner';
import BigSavingDays from './BigSavingDays';
import BrandDeals from './BrandDeals';
import Carousel from './Carousel';
import CategoriesMen from './CategoriesMen';
import CategoriesWomen from './CategoriesWomen';
import Deals from './Deals';
import LimeLightDeals from './LimeLightDeals';
import NewArrivals from './NewArrivals';

const HomeContainer = () => {
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
};
export default HomeContainer;
