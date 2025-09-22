import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { RouterProvider } from 'react-router';
import AboutUs from './components/AboutUs';
import WriteABlog from './components/WriteABlog';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import MyBlogs from './components/MyBlogs';
import Blog from './components/Blog';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter(
  [
    {
      path : '/',
      element : <App/>,
      children:[
        {path:'/',element:<HomePage></HomePage>},

        {path:"/aboutus",element:<AboutUs></AboutUs>},
        {path:"/contactus",element:<ContactUs></ContactUs>},
        {element:<ProtectedRoute></ProtectedRoute>,
          children: [
            {path:"/writeablog",element:<WriteABlog></WriteABlog>},
            {path:"/myblogs",element:<MyBlogs></MyBlogs>},
            {path:"/myblogs/:title",element:<Blog></Blog>},
          ]
        },
        {path:"/login",element:<Login></Login>},
        {path:"/register",element:<CreateAccount></CreateAccount>}
      ]
      
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
