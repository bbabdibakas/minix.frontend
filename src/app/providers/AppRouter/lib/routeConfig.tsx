import {RouteProps} from "react-router";
import {MainPage} from "pages/MainPage";
import {ProfilePage} from "pages/ProfilePage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'notfound',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',

    // last
    [AppRoutes.NOT_FOUND]: '/*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>
    },
    [AppRoutes.PROFILE]: {
        path: routePath.profile,
        element: <ProfilePage/>
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: routePath.notfound,
        element: <NotFoundPage/>
    },
}