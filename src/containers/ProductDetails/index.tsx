'use client';
import ProductDescription from './ProductDescription';
import ProductShowcase from './ProductShowcase';
import SimilarProduct from './SimilarProducts';

const ProductDetailConatiner = () => {
  return (
    <div>
      <ProductShowcase />
      <ProductDescription />
      <SimilarProduct />
    </div>
  );
};
export default ProductDetailConatiner;
