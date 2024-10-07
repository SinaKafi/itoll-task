interface IRating {
  rating: {
    rate: number;
    count: number;
  };
}
export interface IProduct extends IRating {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
// full on site
// 7tire
