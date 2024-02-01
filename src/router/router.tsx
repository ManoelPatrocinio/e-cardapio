import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cardapio } from '../pages/Cardapio';
import { ProductDetail } from '../pages/productDatail';
import { Location } from '../pages/Location';

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cardapio",
    element: <Cardapio/>,
  },
  {
    path: "/cardapio/:productName/:productId",
    element: <ProductDetail/>,
  },
  {
    path: "/location",
    element: <Location/>,
  },
]);