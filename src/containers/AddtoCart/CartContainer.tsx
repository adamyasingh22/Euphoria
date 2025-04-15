'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const CartWrapper = styled.div`
  width: 100%;
  margin: 40px auto;
  font-family: Arial, sans-serif;
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.5fr;
  padding: 20px 0;
  border-bottom: 2px solid #ddd;
  font-weight: 500;
  color: #f9f9f9;
  background-color: rgb(36, 35, 35);
  padding-left: 40px;
  padding-right: 40px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 30px 0px;
  border-bottom: 1px solid #eee;
  padding-left: 40px;
  padding-right: 40px;
  color: #666;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Price = styled.p`
  font-weight: 600;
`;

const QuantityControl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f2f2f2;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  user-select: none;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
  }
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #a855f7;
  cursor: pointer;
`;

const cartData = [
  {
    id: 1,
    name: 'Blue Flower Print Crop Top',
    color: 'Yellow',
    size: 'M',
    price: 29,
    shipping: 0,
    image:
      'https://img.freepik.com/free-photo/young-businesswoman-jacket-standing-posing-gray-wall_114579-81649.jpg?t=st=1743864154~exp=1743867754~hmac=3af8ca65617574676f4a0163b877febce2a9afa05abcf9c680a731ad14f9dc66&w=740',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Lavender Hoodie',
    color: 'Lavender',
    size: 'XXL',
    price: 119,
    shipping: 0,
    image:
      'https://img.freepik.com/free-photo/young-female-practicing-kickboxing_23-2149127349.jpg?t=st=1743864042~exp=1743867642~hmac=635f42713a089b24b9af11df8852c2e85b14c7d9f5152d66420e3a9a2aabf929&w=740',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Black Sweatshirt',
    color: 'Black',
    size: 'XXL',
    price: 123,
    shipping: 5,
    image:
      'https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246201.jpg?t=st=1743864198~exp=1743867798~hmac=6a8125926bd60405f3861809774dfa0654476a45a58eb8cb34728b622ba276b8&w=740',
    quantity: 2,
  },
];

export default function CartContainer() {
  const [cart, setCart] = useState(cartData);

  const handleQuantity = (id: number, type: 'inc' | 'dec') => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
              ...item,
              quantity:
                type === 'inc'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartWrapper>
      <CartHeader>
        <div>PRODUCT DETAILS</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>SHIPPING</div>
        <div>SUBTOTAL</div>
        <div>ACTION</div>
      </CartHeader>

      {cart.map((item) => (
        <CartItem key={item.id}>
          <ProductDetails>
            <ProductImage src={item.image} alt={item.name} />
            <ProductInfo>
              <strong>{item.name}</strong>
              <small>Color: {item.color}</small>
              <small>Size: {item.size}</small>
            </ProductInfo>
          </ProductDetails>

          <Price>${item.price.toFixed(2)}</Price>

          <QuantityControl style={{ justifySelf: 'start' }}>
            <button
              style={{ color: '#666' }}
              onClick={() => handleQuantity(item.id, 'dec')}
            >
              −
            </button>
            {item.quantity}
            <button
              style={{ color: '#666' }}
              onClick={() => handleQuantity(item.id, 'inc')}
            >
              +
            </button>
          </QuantityControl>

          <p style={{ padding: '5px' }}>
            {item.shipping === 0 ? 'FREE' : `$${item.shipping.toFixed(2)}`}
          </p>
          <Price>${(item.price * item.quantity).toFixed(2)}</Price>

          <RemoveBtn onClick={() => handleRemove(item.id)}>🗑️</RemoveBtn>
        </CartItem>
      ))}
    </CartWrapper>
  );
}
