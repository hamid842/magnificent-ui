import type {ReactElement, ReactNode} from 'react'
import {useState} from "react";
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {AuthContext, TUser} from '../../context/contexts'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function Magnificent({Component, pageProps}: AppPropsWithLayout) {

    const [user, setUser] = useState<TUser>()

    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <AuthContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}