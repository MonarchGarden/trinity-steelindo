import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import AppRoutes from './routes';
import './index.css';
import {ErrorFallback} from './pages/ErrorFallback';
import {ErrorBoundary} from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>,
);
