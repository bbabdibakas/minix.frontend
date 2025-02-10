import {Route, Routes} from "react-router";
import {routeConfig} from "app/providers/AppRouter/lib/routeConfig";

const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        path={path}
                        key={path}
                        element={element}
                    />
                ))
            }
        </Routes>
    )
}

export default AppRouter;