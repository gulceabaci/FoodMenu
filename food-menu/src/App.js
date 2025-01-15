import './App.scss';
//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MealDetailsPage from './Pages/MealDetailsPage/MealDetailsPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
       <Sidebar />
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/category/:name" element={<CategoryPage />} />
          <Route path="/meal/:id" element={<MealDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
