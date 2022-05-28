import React, { Suspense } from 'react';
import {
  Routes as Switch,
  Route,
  useNavigate,
  useRoutes,
  useLocation,
} from 'react-router-dom';

const ListClientApp = React.lazy(() => import('list/ListClientApp'));
const RegisterClientApp = React.lazy(() =>
  import('register/RegisterClientApp')
);
const ViewClientApp = React.lazy(() => import('view/ViewClientApp'));

export function Routes() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Switch>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Carregando...</div>}>
            <ListClientApp navigate={navigate} />
          </Suspense>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>Carregando...</div>}>
            <RegisterClientApp navigate={navigate} />
          </Suspense>
        }
      ></Route>
      <Route
        path="/view/:id"
        element={
          <Suspense fallback={<div>Carregando...</div>}>
            <ViewClientApp location={location} />
          </Suspense>
        }
      ></Route>
    </Switch>
  );
}
