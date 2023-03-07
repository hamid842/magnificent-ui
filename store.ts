import {atom} from "jotai";
import {atomWithCache} from "jotai-cache";

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
export const initialUser:TUser = {
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

export const loggedInUser = atom<TUser>(initialUser);

export const cachedUser = atomWithCache(async (get) => {
    return get(loggedInUser);
})