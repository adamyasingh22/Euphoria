import BestPrice from '@/containers/ProductListings/BestPrice';
import CategoryDiscription from '@/containers/ProductListings/CategoryDiscription';
import ProductList from '@/containers/ProductListings/ProductList';

export default function ProductListing() {
  return (
    <div>
      <ProductList />
      <CategoryDiscription />
      <BestPrice />
    </div>
  );
}
