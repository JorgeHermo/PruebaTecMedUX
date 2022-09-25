import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/Home/HomePage'
import CatDetails from '../pages/CatDetails/CatDetails'
import CatListPage from '../pages/CatsPage/CatPage'
import NewCatPage from '../pages/NewCatPage/NewCatPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galerie" element={<CatListPage />} />
            <Route path="/create" element={<NewCatPage />} />
            <Route path="/details/:cat_id" element={<CatDetails />} />
        </Routes>
    )
}

export default AppRoutes