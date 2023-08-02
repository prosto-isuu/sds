import {RouteProps} from "react-router-dom";
import App from "../../../app/App";
import {LoginPage} from "../../../pages/LoginPages";

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    LOGIN = 'login',
    PROFILE = 'profile',
    PRODUCTS_ID = 'products',
    CART = 'cart'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.LOGIN]: 'login',
    [AppRoutes.PROFILE]: 'profile',
    [AppRoutes.PRODUCTS_ID]: 'products/:productId',
    [AppRoutes.CART]: 'cart',
};


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <App />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <LoginPage />,
    },[AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <LoginPage />,
    },[AppRoutes.PRODUCTS_ID]: {
        path: RoutePath.products,
        element: <LoginPage />,
    },[AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <LoginPage />,
    },
};