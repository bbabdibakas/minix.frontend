import {RouteProps} from 'react-router';
import {MainPage} from 'pages/MainPage';
import {AuthPage} from 'pages/AuthPage';
import {ProfilePage} from 'pages/ProfilePage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {PostPage} from 'pages/PostPage';

export type AppRoutesProps = RouteProps & {
    isRequiredAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth',
    PROFILE = 'profile',
    POST = 'post',

    // last
    NOT_FOUND = 'notfound',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.POST]: '/post',

    // last
    [AppRoutes.NOT_FOUND]: '/*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>,
        isRequiredAuth: true
    },
    [AppRoutes.AUTH]: {
        path: routePath.auth,
        element: <AuthPage/>,
    },
    [AppRoutes.PROFILE]: {
        path: routePath.profile,
        element: <ProfilePage/>,
        isRequiredAuth: true
    },
    [AppRoutes.POST]: {
        path: routePath.post,
        element: <PostPage/>,
        isRequiredAuth: true
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: routePath.notfound,
        element: <NotFoundPage/>
    },
}