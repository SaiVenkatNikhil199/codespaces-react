import { Navigate, Outlet, useOutletContext } from "react-router-dom"

function ProtectedRoute() {
    let { isUserLoggedIn, setIsUserLoggedIn } = useOutletContext()
    return (
        <>
            {isUserLoggedIn ? <Outlet></Outlet> : <Navigate to="/login" replace></Navigate>}
        </>
    )
}

export default ProtectedRoute