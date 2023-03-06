import {createContext, ReactNode, useCallback, useContext, useState} from "react";

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

export const initialUser = {
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
 const AuthContext = createContext(initialUser);
 const UpdateAuthContext = createContext((user: TUser) => {})

export const useUser = ()=> {return useContext(AuthContext)};
export const useUpdateUser = ()=>{return useContext(UpdateAuthContext)};


// const AuthContext = createContext({
//     user: initialUser,
//     setUser: (user: TUser) => {}
// })

type Props = {
    children:ReactNode
}
const AuthProvider = ({children}:Props)=>{
    const [user,setUser] = useState(initialUser);

    return (
        <AuthContext.Provider value={user}>
            <UpdateAuthContext.Provider value={setUser}>
                {children}
            </UpdateAuthContext.Provider>
        </AuthContext.Provider>
    )
}
export default AuthProvider;
