import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({element, path}) => {
                    return <Route
                        key={path}
                        path={path}
                    >
                        {element}
                    </Route>
                })
            }
        </Routes>
    );
};
