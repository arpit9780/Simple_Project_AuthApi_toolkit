import { Navigate } from "react-router-dom";

export const PrivateRout = ({ children}) => {
    
  const auth = localStorage.getItem("userToken")     
    if (auth ) {
      return children
    }
    return <Navigate to="/" />
  }