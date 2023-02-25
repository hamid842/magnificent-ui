import type {ReactElement, ReactNode} from 'react'
import {useEffect, useState} from "react";
// Next.js
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {useRouter} from "next/router";
// Third party
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// Project imports
import {AuthContext, TUser} from '../../context/contexts';

NProgress.configure({showSpinner: false});


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function Magnificent({Component, pageProps}: AppPropsWithLayout) {

    const [user, setUser] = useState<TUser>()

    const router = useRouter()

    useEffect(() => {
        const handleStart = (url: string) => {
            console.log(`Loading: ${url}`)
            NProgress.start()
        }

        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <AuthContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}