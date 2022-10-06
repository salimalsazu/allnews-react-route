import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Component/Outlet/Main';
import Breaking from './Component/Breaking/Breaking';
import Details from './Component/Details/Details';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/news/categories')
      },
      element: <Main></Main>,
      children: [
        {
          path: '/details/:detail',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.detail}`),
          element: <Details></Details>
        },
        {
          path: '/breaking/:category_id',
          loader: async ({ params }) => {
            // console.log(params.category_id);
            return fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`)
          },
          element: <Breaking></Breaking>
        },

      ]
    }

  ]);

  return (
    <div className="App">

      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
