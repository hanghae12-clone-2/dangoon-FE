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
import Messenger from './pages/Messenger';

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
        path: ROUTER.PATH.MESSENGER,
        element: <Messenger />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
