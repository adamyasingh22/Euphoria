export type FilterOption = {
  categories: {
    id: number;
    name: string;
  }[];
  price: {
    min: number;
    max: number;
    default: [number, number];
  };
  colors: {
    id: number;
    name: string;
    hex: string;
  }[];
  size: {
    id: number;
    name: string;
  }[];
  style: {
    id: number;
    name: string;
  }[];
  combos: {
    id: number;
    name: string;
    price: number;
  }[];
};
