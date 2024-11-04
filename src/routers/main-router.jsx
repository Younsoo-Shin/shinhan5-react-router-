// Router: 각 URL에 따른 page 컴포넌트 연결
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/page';
import BoardListPage from '~/routes/board/page';

import BoardLayout from '~/routes/board/layout';

export const mainRoutes = [
  {
    path: '/',
    element: <MainPage />,
    index: true,
  },
  {
    path: '/board',
    // element: <BoardListPage />,
    element: <BoardLayout />,
    // index: true,
    children: [
      {
        path: '',
        index: true,
        element: <BoardListPage />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);
export default router;
