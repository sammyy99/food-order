import { useRouteError } from "react-router-dom";

const RouteError = ()=>{

    const err = useRouteError()
    console.log(useRouteError())

    return (
        <div>
            <h1>Opps something went wrong</h1>
            <p1>Status: {err.status}, message: {err.data}</p1>
        </div>
    )
}

export default RouteError;