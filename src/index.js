import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Main from './pages/Main';
import store from './redux/config/configStore';
import HotArticles from './pages/HotArticles';
import Detail from './pages/Detail';
import ROUTER from './constants/router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Messenger from './pages/Messenger';
import Search from './pages/Search';
import Write from './pages/Write';
import MyPost from './pages/MyPost';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTER.PATH.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTER.PATH.HOT_ARTICLES,
        element: <HotArticles />,
      },
      {
        path: `${ROUTER.PATH.DETAIL}/:postId`,
        element: <Detail />,
      },
      {
        path: ROUTER.PATH.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTER.PATH.SIGNUP,
        element: <Signup />,
      },
      {
        path: `${ROUTER.PATH.MESSENGER}/:postId`,
        element: <Messenger />,
      },
      {
        path: `${ROUTER.PATH.SEARCH}/:keyWord`,
        element: <Search />,
      },
      {
        path: ROUTER.PATH.MY,
        element: <MyPost />,
      },
      {
        path: ROUTER.PATH.WRITE,
        element: <Write />,
      },
      {
        path: `${ROUTER.PATH.EDIT}/:postId`,
        element: '',
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
