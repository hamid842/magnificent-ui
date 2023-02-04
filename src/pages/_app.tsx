import {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/components/Layout";

function Magnificent({Component, pageProps}: AppProps) {
    return (
        <>
            <NextNProgress color={'"#A47C30"'}/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default Magnificent