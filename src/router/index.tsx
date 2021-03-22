import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../components';
import PageLoading from '../pages/PageLoading';
import OpenRoutes from './OpenRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const MainRouter = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            {ProtectedRoutes()}
            {OpenRoutes()}
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default MainRouter;
