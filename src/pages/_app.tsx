import {AppProps} from 'next/app'
import Layout from "@/components/global/Layout";

function Magnificent({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default Magnificent