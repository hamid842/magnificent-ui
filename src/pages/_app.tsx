import type {ReactElement, ReactNode} from 'react'
import {useState} from "react";
// Next.js
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
// Third party
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Project imports
import {AuthContext, initialUser} from '../../context/AuthContext';
import {useNProgress} from "@/hooks/use-nprogress";

NProgress.configure({showSpinner: false});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function Magnificent({Component, pageProps}: AppPropsWithLayout) {
    useNProgress();
    const [user, setUser] = useState(initialUser)

    const getLayout = Component.getLayout ?? ((page) => page)


    return getLayout(
        <AuthContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
            <ToastContainer/>
        </AuthContext.Provider>
    )
}