const rawFilters = {
  categories: [
    { id: 1, name: 'Tops' },
    { id: 2, name: 'Printed T-shirts' },
    { id: 3, name: 'Plain T-shirts' },
    { id: 4, name: 'Kurti' },
    { id: 5, name: 'Boxers' },
    { id: 6, name: 'Full sleeve T-shirts' },
    { id: 7, name: 'Joggers' },
    { id: 8, name: 'Payjamas' },
    { id: 9, name: 'Jeans' },
  ],

  price: {
    min: 0,
    max: 1000,
    default: [70, 600],
  },

  colors: [
    { id: 1, name: 'Purple', hex: '#8e44ad' },
    { id: 2, name: 'Black', hex: '#000000' },
    { id: 3, name: 'Red', hex: '#e74c3c' },
    { id: 4, name: 'Orange', hex: '#e67e22' },
    { id: 5, name: 'Navy', hex: '#34495e' },
    { id: 6, name: 'White', hex: '#ecf0f1' },
    { id: 7, name: 'Broom', hex: '#d35400' },
    { id: 8, name: 'Green', hex: '#2ecc71' },
    { id: 9, name: 'Yellow', hex: '#f1c40f' },
    { id: 10, name: 'Grey', hex: '#bdc3c7' },
    { id: 11, name: 'Pink', hex: '#ff69b4' },
    { id: 12, name: 'Blue', hex: '#00cfff' },
  ],

  size: [
    { id: 1, name: 'XXS' },
    { id: 2, name: 'XL' },
    { id: 3, name: 'XS' },
    { id: 4, name: 'S' },
    { id: 5, name: 'M' },
    { id: 6, name: 'L' },
    { id: 7, name: 'XXL' },
    { id: 8, name: '3XL' },
    { id: 9, name: 'XL' },
  ],
  style: [
    { id: 1, name: 'Classic' },
    { id: 2, name: 'Casual' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'Elegant' },
    { id: 6, name: 'Formal(Evening)' },
  ],
  combos: [
    { id: 1, price: 1000, name: 'Pick Any 4 - Womens Plain T-shirt Combo' },
    { id: 2, price: 900, name: 'Pick Any 4 - Plain Womens Boxer Combo' },
    {
      id: 3,
      price: 2000,
      name: 'Pick Any 4 - Women Plain Full Sleeve T-shirt Combo',
    },
    {
      id: 4,
      price: 600,
      name: 'Multicolor Checkered Long Casual Shirts for Women',
    },
    {
      id: 5,
      price: 900,
      name: 'Pick Any 2: Plain Boxy Casual Shirts for Women Combo',
    },
    { id: 6, price: 1500, name: 'Blue Floral Anarkali Kurti' },
    {
      id: 7,
      price: 1000,
      name: 'Jade Black Narrow Cut Flexible Women Jeggings',
    },
    {
      id: 8,
      price: 1060,
      name: 'Mustard-yellow Solid Straight-Fit Women Pant',
    },
    { id: 9, price: 650, name: 'Women Pants Combo - Pick Any 2' },
    {
      id: 10,
      price: 1200,
      name: 'Pista Green Solid Boxy Casual Shirts for Women',
    },
    { id: 11, price: 1800, name: 'Plain Burgundy Womens Boxer' },
    { id: 12, price: 500, name: 'Striped Front Tie Casual Shirts for Women' },
  ],
};
export default rawFilters;
