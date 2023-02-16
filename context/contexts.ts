import {createContext} from "react";

const AuthContext = createContext({
    user: "",
    setUser: (username: string) => {
    }
})
export {AuthContext}