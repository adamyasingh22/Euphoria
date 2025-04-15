'use client';
import BestPrice from './BestPrice';
import CategoryDiscription from './CategoryDiscription';
import ProductList from './ProductList';

const ProductListingContainer = () => {
  return (
    <div>
      <ProductList />
      <CategoryDiscription />
      <BestPrice />
    </div>
  );
};
export default ProductListingContainer;
