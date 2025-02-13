import {Sidebar} from "widgets/Sidebar";
import {AppRouter} from "app/providers/AppRouter";
import {useEffect} from "react";
import {getIsUserInit, getUserData, userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";

const App = () => {
    const dispatch = useAppDispatch()
    const isUserInit = useSelector(getIsUserInit)
    const userData = useSelector(getUserData)

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                {userData && <Sidebar/>}
                {isUserInit && <AppRouter/>}
            </div>
        </div>
    )
}

export default App;