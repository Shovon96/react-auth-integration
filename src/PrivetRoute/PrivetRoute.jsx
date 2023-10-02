import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className="h-[80vh] w-full flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }
    if(user){
        return children
    }


    return <Navigate to='/login'></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;