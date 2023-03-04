import {createContext} from "react";

export type TUser = {
    id: number,
    username: string
    email: string,
    fullName: string,
    phoneNumber: string,
    blocked: boolean,
    confirmed: boolean,
    provider: string,
    createdAt: string,
    updatedAt: string,
};

const user = {
    id: 0,
    username: "",
    email: "",
    fullName: "",
    phoneNumber: "",
    blocked: false,
    confirmed: false,
    provider: "",
    createdAt: "",
    updatedAt: "",
}

const AuthContext = createContext({
    user,
    setUser: (user:any) => {}
})
export {AuthContext}