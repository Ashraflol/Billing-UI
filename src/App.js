import logo from './logo.svg';
import './App.css';
import Header from './header';
import SwiperComponent from './components/swiper';
import Blocks from './components/blocks';
import Home from './mainpages/home';
import { Route, Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Createbill from './mainpages/createbill';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/createbill",
    element: <Createbill/>,
  },
]);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
      {/* <SwiperComponent swiperclass={'swiper1'}/> */}
    </div>
  );
}

export default App;
