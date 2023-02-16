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

export type TUserContext = {
    user: TUser | undefined,
    setUser:(user: TUser) => void
};

const AuthContext = createContext<TUserContext>({
    user: undefined,
    setUser: (user: TUser) => {}
})
export {AuthContext}