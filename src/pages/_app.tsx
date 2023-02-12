import {AppProps} from 'next/app'
import Layout from "@/components/global/Layout";
import 'font-awesome/css/font-awesome.min.css';

function Magnificent({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default Magnificent