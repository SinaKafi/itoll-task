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

interface IProductListResponse {
  data?: IProduct[];
  error?: AxiosError;
}
interface IProductDetailResponse {
  data?: IProduct;
  error?: AxiosError;
}
