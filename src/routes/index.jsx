import { Route, Routes } from 'react-router-dom';

import { LandingPage, ShowcasePage } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />

      <Route path='/showcase' element={<ShowcasePage />} />
    </Routes>
  );
};
