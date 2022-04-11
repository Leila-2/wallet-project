import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import { actionCurrent } from './store/auth/authActions';
import Loader from './components/Loader/Loader';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import CurrencyMobPage from './pages/CurrencyMobPage/CurrencyMobPage';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage/StatisticsPage'),
);

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('AUTH_TOKEN');

  useEffect(() => {
    if (token) {
      dispatch(actionCurrent());
    }
  }, []);
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute>
                <StatisticsPage />
              </PrivateRoute>
            }
          />
          <Route path="/currency"
            element={
              <PrivateRoute>
                <CurrencyMobPage />
              </PrivateRoute>
            }
          />
          

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
