import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './Routes';
import { CentralAlertProvider } from './context/alertContext/CentralAlertProvider';
import LoadPage from './components/loadPage/LoadPage';
function App() {
  return (
    <CentralAlertProvider>
      <Suspense fallback={<LoadPage />}>
        <BrowserRouter>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
            <Route path='/*' element={<Navigate to={`/${routes[0].path}`} replace/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </CentralAlertProvider>
  );
}

export default App;
