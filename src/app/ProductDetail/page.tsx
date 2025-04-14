import ProductDescription from '@/containers/ProductDetails/ProductDescription';
import ProductShowcase from '@/containers/ProductDetails/ProductShowcase';
import SimilarProduct from '@/containers/ProductDetails/SimilarProducts';

export default function ProductDetail() {
  return (
    <div>
      <ProductShowcase />
      <ProductDescription />
      <SimilarProduct />
    </div>
  );
}
