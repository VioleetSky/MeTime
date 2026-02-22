import MainLayout from '../templates/MainLayout.jsx';
import { Routes, Route } from 'react-router-dom';
import StartPage from "../pages/StartPage.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import ServicePage from "../pages/ServicePage.jsx";
import SpecialistPage from "../pages/SpecialistPage.jsx";
import BookPage from "../pages/BookPage.jsx";
import DataPage from "../pages/DataPage.jsx";

const AppRouter = () => {
    return (
            <Routes>
                <Route element={<MainLayout />}>
                 <Route path="/" element={<StartPage />} />
                    <Route  path="categories" element={<CategoriesPage />} />
                    <Route  path=":category" element={<CategoryPage/>} />
                    <Route path=":category/:service" element={<ServicePage />} />
                    <Route path=":category/:service/:specialist" element={<SpecialistPage />} />
                    <Route path="booking" element={<BookPage />} />
                    <Route path="yourData" element={<DataPage />} />
                </Route>
            </Routes>

    );
};

export default AppRouter;