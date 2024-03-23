import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../AuthContext";

function PrivateRoute({children}) {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    if (user) navigate('/dashboard');
    else return children;
}

export default PrivateRoute;