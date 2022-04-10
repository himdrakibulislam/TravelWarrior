import { useContext } from "react"
import { getContext } from "../components/context/UseContext"

const useAuth = () =>{
    return useContext(getContext)
}

export default useAuth;