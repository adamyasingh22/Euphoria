'use client';
import styled from 'styled-components';
import rawFilters from '@/mock/rawFilters';
import type { FilterOption } from './type/filters';
const filters = rawFilters as FilterOption;

const CategoriesContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: -40px;
`;
const HeadingContainer = styled.div`
  display: flex;
  alignitems: center;
  height: 50px;
  justifycontent: center;
  padding: 20px;
  gap: 10px;
  margin-bottom: 30px;
`;

const ArrivalHeading = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;
const Pointer = styled.div`
  width: 8px;
  height: 30px;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    #a855f7,
    #7c3aed
  ); /* violet gradient */
`;
const TableWrapper = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  background-color: #f9f9f9;
  text-align: left;
`;

const HeaderCell = styled.th`
  padding: 16px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #444;
  border-bottom: 2px solid #eee;
`;

const DataRow = styled.tr`
  &:hover {
    background-color: #fafafa;
  }
`;

const DataCell = styled.td`
  padding: 14px 12px;
  font-size: 0.95rem;
  color: #444;
  border-bottom: 1px solid #eee;
`;

const BestPrice = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Buy Women Clothing at Best Price</ArrivalHeading>
      </HeadingContainer>
      <TableWrapper>
        <Table>
          <thead>
            <HeaderRow>
              <HeaderCell>Women Clothing</HeaderCell>
              <HeaderCell>Best Price</HeaderCell>
            </HeaderRow>
          </thead>
          <tbody>
            {filters.combos.map((product) => (
              <DataRow key={product.id}>
                <DataCell>{product.name}</DataCell>
                <DataCell>₹{product.price}</DataCell>
              </DataRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </CategoriesContainer>
  );
};
export default BestPrice;
