import { ADMIN_ROUTE, AGENCY_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TRIP_ROUTE } from "./utils/consts"
import Basket from "./pages/Basket"
import Agency from "./pages/Agency"
import Auth from "./pages/Auth"
import TripPage from "./pages/TripPage"
import Admin from "./pages/Admin"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: AGENCY_ROUTE,
        Component: Agency
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TRIP_ROUTE + '/:id',
        Component: TripPage
    }
]