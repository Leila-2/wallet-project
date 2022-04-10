import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Loader from './components/Loader/Loader';
import NotFound from './pages/NotFound/NotFound';
import CurrencyMobPage from './pages/CurrencyMobPage/CurrencyMobPage';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage/StatisticsPage'),
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/currency" element={<CurrencyMobPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
