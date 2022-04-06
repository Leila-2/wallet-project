import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Loader from './components/Loader/Loader';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
