import {Route, Routes} from "react-router";
import {AppRoutesProps, routeConfig} from "../lib/routeConfig";
import {RequireAuth} from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = (route: AppRoutesProps) => (
        <Route
            key={route.path}
            path={route.path}
            element={route.isRequiredAuth ? <RequireAuth>{route.element}</RequireAuth> : route.element}
        />
    )

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default AppRouter;